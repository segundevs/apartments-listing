import {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, sendPasswordResetEmail, signOut} from 'firebase/auth';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  //Sign up
   const signUp = async (email, password, name) => {
    setLoading(false)
    await createUserWithEmailAndPassword(auth, email, password)
    .then(response => {
      setUser(response.user)
      const user = auth.currentUser;
      updateProfile(user, {
      displayName: name
     })
      setLoading(false)
      window.location.replace('/login')
      toast.success('Successfully created account!', {theme: "colored", autoClose: 2000 })
      return response.user
    })
    .catch(err => {
      setError(err.message)
      setLoading(false)
      setTimeout(() => {
        setError(false)
      }, 5000) 
      }) 
  };

  //Login
  const login = async(email, password) => {
  setLoading(true)
  await signInWithEmailAndPassword(auth, email, password)
  .then(response => {
    setUser(response.user)
    setLoading(false)
    window.location.replace('/')
    toast.success('Successfully signed in', {theme: "colored", autoClose: 2000 })
    return response.user
  })
  .catch(err => {
    console.log(err.message)
    setError(err.message)
    setLoading(false)
    setTimeout(() => {
      setError(false)
    }, 5000) 
  })
}

//Login with google
const signInWithGoogle = async() => {
    setLoading(true)
    await signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
      setUser(response.user)
      setLoading(false)
      window.location.replace('/')
      toast.success('Successfully signed in!', {theme: "colored", autoClose: 2000 })
      return response.user
    }).catch(err => {
        setError(err.message)
        setLoading(false)
        toast.error( error? `${error}` : 'Something went wrong!', {theme: "colored", autoClose: 2000 })
    })   
  };

//Send Password Reset Email
const resetPassword = async(email) => {
  await sendPasswordResetEmail(auth, email)
  .then(() => {
    setLoading(false)
    toast.success('Please check your email to reset your password', {theme: "colored", autoClose: 2000 })
    return true;
  }).catch(err => {
    setError(err.message)
    setLoading(false)
    setTimeout(() => {
      setError(false)
    }, 5000)
  })
}

//Logout
const logOut = () => {
  signOut(auth)
  .then(() => {
    setUser(false)
  })
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsAuthenticating(false)
    })

    return () => unsubscribe();
  }, [])


  const values = {
    user,
    isAuthenticating,
    loading,
    error,
    signUp,
    login,
    logOut,
    signInWithGoogle,
    resetPassword
  }

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider