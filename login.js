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

const auth = firebase.auth();
const database = firebase.database();


// funktion som bliver kørt, da brugeren har klikket på registrer knappen
function register() {

  // Hent inputværdierne 
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  full_name = document.getElementById("full_name").value;

// Tjek om de gyldige 
  if (
    validate_email(email) == false ||
    validate_pw(password) == false ||
    validate_fields(full_name) == false
  ) {
    alert("Fejl i email eller adgangskode.Prøv igen");
    return;
  }

  // De er gyldige; brugeren bliver oprettet i databasen
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      console.log("User created!");
      // Hent brugeren oplysninger, som er logget ind 
      let user = auth.currentUser;
      // reference til databasen
      var database_ref = database.ref();
    
      //Nødvendige oplysninger på brugeren
      let user_data = {
        email: user.email,
        password: password,
        full_name: full_name,
        created_at: firebase.database.ServerValue.TIMESTAMP,
        updated_at: firebase.database.ServerValue.TIMESTAMP,
        last_login: firebase.database.ServerValue.TIMESTAMP,
      };
      console.log(user_data);
      // Opdaterer brugerens oplysninger i databasen
      database_ref.child("users/" + user.uid).set(user_data);
      window.location.href = "/indexVel.html";
    })
    // Tjekker om fejl i oprettelsen
    .catch(function () {
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
    });
}

// Refererer til users node i databasen
const usersRef = database.ref("users");

// Tilføjer en eventlistener således når værdien ændrer sig bliver funktion kørt
usersRef.on("value", function (snapshot) {
  // Tager et snapshot af databasen
  const data = snapshot.val();

  // Loop igennem databasen
  for (const userId in data) {
    const user = data[userId];

    // Vis det i consolen
    console.log(user.email, user.full_name, user.created_at);
  }
});

// Tjekker om brugeren er logget ind ?

firebase.auth().onAuthStateChanged(function (user) {
  // Brugeren er logget ind
  if (user) {
    // Hent brugeren uid
    var uid = user.uid;
    // Søger efter brugerens oplysninger og tager et snapshot af værdien
    firebase
      .database()
      .ref("users/" + uid)
      .once("value")
      .then(function (snapshot) {
        var userInformation = snapshot.val();
        // Gemmer brugeren fuldenavn i localstorage
        console.log(userInformation);
        localStorage.setItem(
          "full_name",
          JSON.stringify(userInformation.full_name)
        );
      });
  } else {
    // Brugeren er ikke logget ind 
    console.log("Ikke logget ind ");
  }
});

function validate_email(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
function validate_pw(password) {
  if (password.length > 6) {
    return true;
  } else {
    return false;
  }
}

function validate_fields(field) {
  if (field.length > 0) {
    return true;
  } else {
    return false;
  }
}
