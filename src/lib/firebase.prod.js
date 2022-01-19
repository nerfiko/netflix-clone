import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBbI_N4JgKS2kZH8DgoC1WNSTBm1bcb9OU",
    authDomain: "netflix-clone-3531d.firebaseapp.com",
    projectId: "netflix-clone-3531d",
    storageBucket: "netflix-clone-3531d.appspot.com",
    messagingSenderId: "952509955500",
    appId: "1:952509955500:web:7cf88391d4c256c9e7ce09"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };