// Importando o SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOuKOBRGDev2Qr2LtNz4Jmdl9F1v_yhvE",
  authDomain: "chat-246b1.firebaseapp.com",
  projectId: "chat-246b1",
  storageBucket: "chat-246b1.firebasestorage.app",
  messagingSenderId: "95338184214",
  appId: "1:95338184214:web:e7c8e177803d741eb53f37"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando os serviços necessários
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Exportando as referências
export { auth, firestore, database };
