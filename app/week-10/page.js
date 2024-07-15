"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";




const Login = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [error, setError] = useState("");
       

    const onLogin = async (e) => {
        e.preventDefault();
        
        setError("");
        try {
            await gitHubSignIn();
        } catch (error) {
            setError(error.message);
        }
        
    };

    const onLogout = async (e) => {
        e.preventDefault();
        
        setError("");
        try {
            await firebaseSignOut();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
      <div className="min-h-screen items-center justify-between p-24">
        {user ? (
          <div>
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={onLogout} className="mx-8">Logout</button>
            <Link href="./week-10/shopping-list">Shopping List</Link>
          </div>
        ) : (
          <div>
            <button onClick={onLogin}>Login with GitHub</button>
            {error && <p>{error}</p>}
          </div>
        )}
      </div>
    );
}
 
export default Login;


 
