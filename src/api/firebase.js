import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyANcOLBQCPVBSuk4HU0gzDm1Iu_XDoMhRs",
  authDomain: "e-learning-976fe.firebaseapp.com",
  databaseURL: "https://e-learning-976fe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-learning-976fe",
  storageBucket: "e-learning-976fe.appspot.com",
  messagingSenderId: "667596070260",
  appId: "1:667596070260:web:b38598a30522282cdba021",
  measurementId: "G-1KH7H8VQRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth