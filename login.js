 // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 //import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
 //import { initializeApp } from 'firebase/app';

 //import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js';


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
 const app = firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth()
 const database = firebase.database()

 function register(){

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
    //  var sec = new TimeStamp(firebase.database.ServerValue.TIMESTAMP).toDate()
      let user_data = {
        email: user.email,
        password: password,
        full_name: full_name,
        created_at: firebase.database.ServerValue.TIMESTAMP,
        updated_at: firebase.database.ServerValue.TIMESTAMP,
        last_login: firebase.database.ServerValue.TIMESTAMP,  
        

        
      } 
      console.log(user_data)

      database_ref.child("users/" + user.uid).set(user_data)
      window.location.href = "/indexVel.html"

    }).catch(function(){
    var errorCode = error.code
    var errorMessage = error.message

    alert(errorMessage)
    })

 }

 // Get a reference to the "users" node in the database
const usersRef = database.ref("users");

// Attach an event listener to the "value" event to listen for changes in the data
usersRef.on("value", function (snapshot) {
  // Get the data from the snapshot
  const data = snapshot.val();




  // Loop through each user in the data
  for (const userId in data) {
    const user = data[userId];

    // Log the user data to the console
    console.log(user.email, user.full_name, user.created_at);
  }
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, get the UID
    var uid = user.uid;
    // Retrieve the user's information from the Realtime Database using the UID
    firebase.database().ref('users/' + uid).once('value').then(function(snapshot) {
      var userInformation = snapshot.val();
      // Do something with the user's information
      console.log(userInformation);
      localStorage.setItem('full_name', JSON.stringify(userInformation.full_name));

      

    });
  } else {
    // User is signed out
  }
});



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
 