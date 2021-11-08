import {createContext, useContext, useState, useEffect} from 'react';
import {auth} from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, sendPasswordResetEmail, signOut} from 'firebase/auth';
import { toast } from 'react-toastify';
import useLocalStorage from '../components/hooks/useLocalStorage';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  // const [token, setToken] = useState(null);
  const [token, setToken] =  useLocalStorage('token', ''); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  //Sign up
   const signUp = async (email, password, name) => {
    setLoading(false)
      await
    createUserWithEmailAndPassword(auth, email, password)
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
      if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
        setError('Password should be at least 6 characters')
      }
     else if(err.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
        setError('The email address is already in use by another account')
      } 
      else {
        setError('There was a network error')
      }
      setLoading(false)
      setTimeout(() => {
            setError(false)
          }, 2000)
    }) 
  };

  //Login
  const login = async(email, password) => {
  setLoading(true)
  await
  signInWithEmailAndPassword(auth, email, password)
  .then(response => {
    setUser(response.user)
    setLoading(false)
    window.location.replace('/')
    toast.success('Successfully signed in', {theme: "colored", autoClose: 2000 })
    return response.user
  })
  .catch(err => {
    if(err.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
      setError('The password is invalid or the user does not have a password')
    }
    else if (err.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'){
      setError('There is no user with this email address or the user may have been deleted')
    }
    else {
      setError(err.message)
    }
     setLoading(false)
    setTimeout(() => {
            setError(false)
          }, 2000) 
  })
}

//Login with google
const signInWithGoogle = async() => {
    setLoading(true)
    signInWithPopup(auth, new GoogleAuthProvider())
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
  await 
  sendPasswordResetEmail(auth, email)
  .then(() => {
    setLoading(false)
    toast.success('Please check your email to reset your password', {theme: "colored", autoClose: 2000 })
    return true;
  }).catch(err => {
    if(err.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).'){
      setError('There is no user with this email address or the user may have been deleted')
    } else {
      setError(err.message)
    } 
      setLoading(false)
      setTimeout(() => {
        setError(false)
      }, 2000)
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
      if(user !== null){
        auth.currentUser.getIdToken().then(token => {
          setToken(token)
        })
      }
      setIsAuthenticating(false)
    })

    return () => unsubscribe();
  }, [setToken])


  const values = {
    user,
    isAuthenticating,
    loading,
    error,
    token,
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