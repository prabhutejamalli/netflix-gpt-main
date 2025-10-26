// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAwKbz6Wo1UVp1BzKSJVXV6hTz3vwy74k8",
//   authDomain: "netflixgpt-57a56.firebaseapp.com",
//   projectId: "netflixgpt-57a56",
//   storageBucket: "netflixgpt-57a56.appspot.com",
//   messagingSenderId: "1093133802935",
//   appId: "1:1093133802935:web:c284961959cce2a54adc32",
//   measurementId: "G-DEHFXGZ999",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALHEGg-suRVdIuKoGtBI8mPa54ns1QdFM",
  authDomain: "netflixgpt-prabhu.firebaseapp.com",
  projectId: "netflixgpt-prabhu",
  storageBucket: "netflixgpt-prabhu.appspot.com",
  messagingSenderId: "352145170293",
  appId: "1:352145170293:web:abc123example", // <- if Firebase shows your App ID, replace this
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
