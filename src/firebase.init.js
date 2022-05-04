import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXNAOqPDUNHMoD4jK9_RJ2FVp071EEZp4",
  authDomain: "bike-warehouse-8640e.firebaseapp.com",
  projectId: "bike-warehouse-8640e",
  storageBucket: "bike-warehouse-8640e.appspot.com",
  messagingSenderId: "826914241994",
  appId: "1:826914241994:web:cfb5c24d2958760863e333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export auth
export default auth;