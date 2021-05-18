import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBwaMNmbOfdnJ7MFyPR_DOO5RQMZyvNvN4',
  authDomain: 'vue3workoutapp.firebaseapp.com',
  databaseURL: 'https://vue3workoutapp-default-rtdb.firebaseio.com',
  projectId: 'vue3workoutapp',
  storageBucket: 'vue3workoutapp.appspot.com',
  messagingSenderId: '62295303634',
  appId: '1:62295303634:web:3f4eef397c525ef171940b',
  measurementId: 'G-R2MFNMYJMM'
})

export default firebaseApp.firestore()
