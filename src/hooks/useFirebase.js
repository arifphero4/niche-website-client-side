import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword    } from "firebase/auth";
//GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken

initializeFirebase(); 
const useFirebase = () =>{
    const [user, setUser] = useState({});


    const auth = getAuth();
    const registerUser = (email, password,name, history) =>{
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage  = error.message;
            });  
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    //----------------observe user state----------------- 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, (user) => {
            if(user) {
                setUser(user);
            }
            else{
                setUser({})
            }
        })
        return () => unsubscribe;
    },[auth])

    const logOut = () => {
        signOut(auth).then(() => {

        })
    }

    return {
        user,
        logOut,
        loginUser,
        registerUser
    }
}
export default useFirebase;