
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnZj2qJMu15GMbCakOAGYZVeQM1Gvd8u0",
  authDomain: "patiricalzados.firebaseapp.com",
  projectId: "patiricalzados",
  storageBucket: "patiricalzados.appspot.com",
  messagingSenderId: "310319856341",
  appId: "1:310319856341:web:ca26a85ce14963fdb1805c"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app