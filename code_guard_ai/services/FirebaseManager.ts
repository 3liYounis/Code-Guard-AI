import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// const signUp = (email: string, password: string) => {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
// }
const signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
const signOutUser = async () => {
    signOut(auth).then().catch((error) => console.log(error))
}
const validatePasswordPolicy = async (passwordFromUser: string) => {
    const status = await validatePassword(auth, passwordFromUser);
    if (!status.isValid) {
        const shorterThanMin = status.meetsMinPasswordLength !== true;
        return { shorterThanMin }
    }
}