import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAIGmGwDe6JUADpNGzexV27m8HhkgHn_Yk",
    authDomain: "slack-clone-f3606.firebaseapp.com",
    projectId: "slack-clone-f3606",
    storageBucket: "slack-clone-f3606.appspot.com",
    messagingSenderId: "388839564418",
    appId: "1:388839564418:web:fd36d7e45356a58f50409b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db
  