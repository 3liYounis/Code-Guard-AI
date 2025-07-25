import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword, signOut, updateProfile, onAuthStateChanged, signInWithPopup, signInWithRedirect, getRedirectResult, type Auth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore/lite";
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
const provider = new GoogleAuthProvider();
export const googleAuth = async (): Promise<User | undefined> => {
    try {
        const result = await signInWithPopup(auth, provider);
        const firebaseUser = result.user;
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        var userDoc: User;
        const data = userDocSnap.data();
        userDoc = {
            uid: firebaseUser.uid,
            email: firebaseUser.email ?? "",
            displayName: data ? (firebaseUser.displayName ?? data.displayName) : "",
            code_reviews: data ? data.code_reviews : [],
        };
        if (!data)
            await setDoc(userDocRef, userDoc);
        return userDoc;
    }
    catch (error) {
        console.error("Google sign-in error:", error);
        return undefined;
    }
};
export const signUp = async (user: UserFromFields): Promise<User> => {
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
export const onAuthStateChangedListener = (setUser: (user: User | undefined) => void) => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
            const userDocRef = doc(db, "users", firebaseUser.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const data = userDocSnap.data();
                setUser({
                    uid: firebaseUser.uid,
                    email: firebaseUser.email ?? "",
                    displayName: firebaseUser.displayName ?? "",
                    code_reviews: data.code_reviews ?? [],
                });
            }
        } else {
            setUser(undefined);
        }
    });
};