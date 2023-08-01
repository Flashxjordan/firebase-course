import { useState } from 'react';
import { auth, googleAuthProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
 
export const Google = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithGoogle = async () => {
        try {
        await signInWithPopup(auth, googleAuthProvider)
        } catch (err) {
            console.error(err)
        }
    };
    const logout = async () => {
        try {
        await signOut(auth )
        } catch (err) {
            console.error(err)
        }
    };
     

    return (
        <div>
            <input 
                placeholder="Email..." 
                onChange={(e) => setEmail(e.target.value)}/>
            <input 
                placeholder="Password..." 
                type="password"
                onChange={(e) => setPassword(e.target.value)} />
           
            <button 
                onClick={signInWithGoogle}> Sign In With Google </button>
            <button 
                onClick={logout}> Logout </button>
        </div>
    );
};