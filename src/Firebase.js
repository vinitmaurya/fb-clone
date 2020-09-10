import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUJoKY2gEb9RX5R9KGsuGlxtUFUGwA-Zk",
  authDomain: "fb-clone-6c141.firebaseapp.com",
  databaseURL: "https://fb-clone-6c141.firebaseio.com",
  projectId: "fb-clone-6c141",
  storageBucket: "fb-clone-6c141.appspot.com",
  messagingSenderId: "1035695949688",
  appId: "1:1035695949688:web:c52d7d48f4f24b17716a8d",
  measurementId: "G-VJ829W2EM0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;