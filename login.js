 // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
 import { initializeApp } from 'firebase/app';


//import { getDatabase } from "firebase/database";


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBZGXunX2rIzgq0MmOvcrdkT517-pMLCP4",
   authDomain: "tekniprojekt.firebaseapp.com",
   databaseURL:
     "https://tekniprojekt-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "tekniprojekt",
   storageBucket: "tekniprojekt.appspot.com",
   messagingSenderId: "384005180840",
   appId: "1:384005180840:web:650f921d606de9e837619d",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = firebase.auth()
 const database = firebase.database()

 function register(){
console.log("trhe")
    email = document.getElementById("email").value 
    password = document.getElementById("password").value
    full_name = document.getElementById("full_name").value

    if(validate_email(email)==false || validate_pw(password)==false || validate_fields(full_name)==false){
      alert("Fejl i email eller adgangskode.Prøv igen")
      return
    }


    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
      console.log("User created!")

      let user = auth.currentUser

      var database_ref = database.ref()

      let user_data = {
        email: user.email,
        password: password,
        full_name: full_name,
        created_at: firebase.database.ServerValue.TIMESTAMP,
        updated_at: firebase.database.ServerValue.TIMESTAMP,
        
      }

      database_ref.child("users/" + user.uid).set(user_data)

    }).catch(function(){
    var errorCode = error.code
    var errorMessage = error.message

    alert(errorMessage)
    })

 }

 function validate_email(email){

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(regex.test(email)){
        return true
    }
    else{
        return false
    }
    
 }
 function validate_pw(password){

  if(password.length>6){
    return true
  } else{
    return false
  }
 }

 function validate_fields(field){

  if(field.length>0){
    return true
  }
  else{
    return false
  }

 }
 