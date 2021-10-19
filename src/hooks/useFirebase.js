import { useState, useEffect } from 'react';
import { useHistory,useLocation  } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,createUserWithEmailAndPassword,updateProfile,sendEmailVerification,signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthenthication from "../Components/Login/Firebase/firebase.init";

initializeAuthenthication();
const useFirebase=()=>{
    const history = useHistory();
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    
    const auth = getAuth();

  //sign in with google

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            history.push(redirect_uri);
        })
        .finally(()=>setIsLoading(false))
    }
   
   //name change handle
    const handleNameChange = e => {
        setName(e.target.value);
      }

      //email change handle
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      
      //password change handle
      const handlePasswordChange = e => {
        setPassword(e.target.value);
      }

      //registration handle
      const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('Password Must be at least 6 characters long.')
          return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
          setError('Password Must contain 2 upper case');
          return;
        }

        //creating user with email and password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          setError('');
          verifyEmail();
          setUserName();
          logOut();
          history.push('/login')
        })
        .catch(error => {
          setError(error.message);
        })
      }

      //setUserName
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(result => { })
      }
 
      //verify email
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
          .then(result => {
            console.log(result);
          })
      }
    
      //login handle
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
         if(!user.emailVerified){
             setError('email is not verified');
             return
         }
 
          history.push(redirect_uri);
          setError('');
        })
        .catch(error => {
          setError(error.message);
        })
      }
      // onAuthStateChanged
      useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return ()=> unsubscribed
        },[])

        // signout
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
          setUser({})
        })
        .finally(()=>setIsLoading(false))
    }
    return{
                user,
                signInUsingGoogle,
                logOut,
                handleLogin,
                isLoading,
                handleNameChange,
                handleEmailChange,
                handlePasswordChange,
                handleRegistration,
                error
            }
}
export default useFirebase;