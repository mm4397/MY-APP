// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD63bNLfp8lNaVM_XenNMZHV3O-DbXPYDM",
    authDomain: "taskdashboard7.firebaseapp.com",
    projectId: "taskdashboard7",
    storageBucket: "taskdashboard7.appspot.com",
    messagingSenderId: "462881236748",
    appId: "1:462881236748:web:92ef50795f0283b3754b29",
    measurementId: "G-H8DCGWFJJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app)