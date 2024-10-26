// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmdhMhoYbsNUJaP4vuaSA8udedE0eviAU",
  authDomain: "clone-react-79612.firebaseapp.com",
  projectId: "clone-react-79612",
  storageBucket: "clone-react-79612.appspot.com",
  messagingSenderId: "801402068822",
  appId: "1:801402068822:web:41afbc5b0e3c85b3b2c0f7",
  measurementId: "G-DDM5JP03YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);