import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken   } from "firebase/auth";
//, signInWithPopup, updateProfile, getIdToken

initializeFirebase(); 
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name, history) =>{
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name};
                setUser(newUser);
                updateProfile(auth.currentUser,{
                    displayName: name})
                    .then(() =>{

                    })
                    .catch((error) => {

                    });

                history.replace('/');
            })
            .catch((error) => {
               setAuthError(error.message);
            })
            .finally( () => setLoading(false));  
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally( () => setLoading(false));
    }


    //------google sign in ------------
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
            //   saveUser(user.email, user.displayName, 'PUT');
              setAuthError('');
              const destination = location?.state?.from || '/';
              history.replace(destination);
            }).catch((error) => {
              setAuthError (error.message);
            })
            .finally( () => setLoading(false));
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
            setLoading(false);
        });
        return () => unsubscribe;
    },[auth])

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {

        })
        .finally( () => setLoading(false));
    }

    return {
        user,
        loading,
        logOut,
        loginUser,
        authError,
        signInWithGoogle,
        registerUser
    }
}
export default useFirebase;