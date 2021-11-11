import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // ------------------------------------------------------------//
  // handle user registration
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");
  const [error, setError] = useState("");

  const emailHandle = (e) => {
    const email = e.target.value;
    setEmails(email);
  };
  const passHandle = (e) => {
    const password = e.target.value;
    setPasswords(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emails, passwords)
      .then((userCredential) => {
        // Signed in
        const users = userCredential.user;
        hanldeUserInfoRegister(userCredential.user.email);
        setUser(users);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handle user information for db
  const hanldeUserInfoRegister = (email) => {
    fetch("http://localhost:5000/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Register Successfully");
        }
      });
  };
  // ------------------------------------------------------------//

  // ------------------------------------------------------------//
  // handle user login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const userss = userCredential.user;
        // ...
        setUser(userss);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // ------------------------------------------------------------//

  // google login
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // logout system
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    user,
    signInUsingGoogle,
    logOut,
    isLoading,
    setIsLoading,
    emailHandle,
    passHandle,
    handleRegister,
    handleEmail,
    handlePassword,
    handleLogin,
    error,
  };
};

export default useFirebase;
