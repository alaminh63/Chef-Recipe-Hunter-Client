import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const Auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthContexts = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const signInWithGitHub = () => {
    return signInWithPopup(Auth, gitProvider);
  };

  const SignInWithGooglePopup = () => {
    return signInWithPopup(Auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    loading,
    SignInWithGooglePopup,
    signInWithGitHub,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
