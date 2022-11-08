import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyDBB6LeVSIjy2Nz8yb8GzJ7PlWqWQbfSL8',
  authDomain: 'react-pokedex-ade70.firebaseapp.com',
  projectId: 'react-pokedex-ade70',
  storageBucket: 'react-pokedex-ade70.appspot.com',
  messagingSenderId: '19916156411',
  appId: '1:19916156411:web:894dc2d1536b2f4329af5e',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export { auth, db }
