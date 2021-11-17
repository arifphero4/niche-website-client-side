import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken   } from "firebase/auth";


initializeFirebase(); 
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name, history) =>{
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name};
                setUser(newUser);
                saveUser(email, name, 'POST');
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
              saveUser(user.email, user.displayName, 'PUT');
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
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribe;
    },[auth]);


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {

        })
        .finally( () => setLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName};
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body:  JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        loading,
        logOut,
        loginUser,
        authError,
        signInWithGoogle,
        registerUser
    }
}
export default useFirebase;