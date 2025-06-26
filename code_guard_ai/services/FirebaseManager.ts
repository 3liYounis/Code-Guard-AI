import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword, signOut, updateProfile } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import type { CodeReview } from "@/components/Dashboard/Review Card/ReviewCard";
export interface UserFromFields {
    email: string;
    password: string;
    displayName: string;
}
export interface User {
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
    return {
        email: firebaseUser.email ?? "",
        displayName: user.displayName,
        code_reviews: [],
    };
};
export const signIn = async (email: string, password: string): Promise<User> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
        email: user.email ?? "",
        displayName: user.displayName ?? "",
        code_reviews: [],
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