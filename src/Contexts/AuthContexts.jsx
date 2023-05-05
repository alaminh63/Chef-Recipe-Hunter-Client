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
  updateProfile,
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
    setLoading(true);
    return signInWithPopup(Auth, gitProvider);
  };

  const SignInWithGooglePopup = () => {
    setLoading(true);
    return signInWithPopup(Auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(Auth);
  };

  const profileInfoUpdate = (displayName, photoURL) => {
    const user = Auth.currentUser;
    return updateProfile(user, { displayName, photoURL });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
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
    profileInfoUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContexts;
