import { initializeApp } from 'firebase/app'


  // FireBase Authentication
  import{
    getAuth,
    signInWithEmailAndPassword
  }from 'firebase/auth'

// below lines are copied from firebase (go to console)
const firebaseConfig = {
    apiKey: "AIzaSyDm8ZZrqHg9YLWfQw30Qv_Kz7HtOvqZ03Q",
    authDomain: "firstproject-12adc.firebaseapp.com",
    projectId: "firstproject-12adc",
    storageBucket: "firstproject-12adc.appspot.com",
    messagingSenderId: "219107450289",
    appId: "1:219107450289:web:b65212b083c0dc8d0db190",
    measurementId: "G-ZYGPE6E1B7"
  };

  
  initializeApp(firebaseConfig);

  const auth=getAuth()

  const loginForm = document.querySelector('.form')
loginForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = loginForm.email.value
  const password = loginForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('user logged in:', cred.user)
     // loginForm.reset()
    })
    .catch(err => {
       console.log(err.message)
    })
})