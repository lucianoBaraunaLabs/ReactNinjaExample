import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBbFQSbF3k-_ZAnDRULvZO7F2fsWquVCS4',
  authDomain: 'reactzzaria-af7ae.firebaseapp.com',
  projectId: 'reactzzaria-af7ae',
  storageBucket: 'reactzzaria-af7ae.appspot.com',
  messagingSenderId: '18945026297',
  appId: '1:18945026297:web:fb2b0b41e20ef1ab901a28',
  measurementId: 'G-D7DX39LT29'
}

firebase.initializeApp(config)

export const db = firebase.firestore()
export default firebase
