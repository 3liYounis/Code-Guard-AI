import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, collection, getDoc, setDoc, doc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import type { CodeReview } from "@/components/Dashboard/Review Card/ReviewCard";
export interface UserFromFields {
    email: string;
    password: string;
    displayName: string;
}
export interface User {
    uid: string;
    email: string;
    displayName: string;
    code_reviews: CodeReview[];
}
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export const signUp = async (user: UserFromFields): Promise<User> => {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    const firebaseUser = userCredential.user;
    await updateProfile(firebaseUser, {
        displayName: user.displayName,
    });
    const userDoc: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email ?? "",
        displayName: user.displayName,
        code_reviews: [],
    };
    await setDoc(doc(db, "users", firebaseUser.uid), userDoc);
    return userDoc;
};
export const signIn = async (email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);
    let codeReviews: CodeReview[] = [];
    if (userDocSnap.exists()) {
        const data = userDocSnap.data();
        codeReviews = data.code_reviews ?? [];
    }
    return {
        uid: user.uid,
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        code_reviews: codeReviews,
    };
};

export const signOutUser = async () => {
    signOut(auth).then().catch((error) => console.log(error))
}
export const validatePasswordPolicy = async (passwordFromUser: string) => {
    const status = await validatePassword(auth, passwordFromUser);
    if (!status.isValid) {
        const shorterThanMin = status.meetsMinPasswordLength !== true;
        return { shorterThanMin }
    }
}
export const getIdToken = async (): Promise<string | null> => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
        try {
            const token = await user.getIdToken();
            return token;
        }
        catch (error) {
            console.error("Failed to get ID token:", error);
            return null;
        }
    }
    else {
        console.warn("No user is currently signed in.");
        return null;
    }
};