import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "A",
  authDomain: "recipe-finder-55a9b.firebaseapp.com",
  projectId: "recipe-finder-55a9b",
  storageBucket: "recipe-finder-55a9b.appspot.com",
  messagingSenderId: "176337726808",
  appId: "1:176337726808:web:bbab013c14b4747020892d"
};


const app = initializeApp(firebaseConfig);

export default app;