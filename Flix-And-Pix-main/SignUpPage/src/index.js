
import { initializeApp } from "firebase/app";
import{
    getFirestore
} from 'firebase/firestore'
import{
    getAuth,
    createUserWithEmailAndPassword
}from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDla-v9G2uY8Py8uSAuGMJfyIihI1FXGn8",
    authDomain: "excal23-591e2.firebaseapp.com",
    projectId: "excal23-591e2",
    storageBucket: "excal23-591e2.appspot.com",
    messagingSenderId: "489817354587",
    appId: "1:489817354587:web:3b3a19f3fe3589158d6a7e"
  };
  //initilize firebase->
  initializeApp(firebaseConfig);

  //init services ->
  const db= getFirestore();
  const auth= getAuth();
  
  const signupForm= document.querySelector('.signup');
  signupForm.addEventListener('submit',(e)=>{
     e.preventDefault()
     
     const email= signupForm.mail.value;
     const pwd= signupForm.password.value;
     createUserWithEmailAndPassword(auth,email,pwd)
         .then((cred)=>{
             console.log('User created: ',cred.user);
             window.location.assign("success.html");
         })
         .catch((err)=>{
             console.log(err.message);
             window.location.assign("failure.html");
         })
  })