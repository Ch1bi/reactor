import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCSEIM2VK2HrxtR81_zS0lTnmg1CCVLCZo",
    authDomain: "reactor-92ae6.firebaseapp.com",
    databaseURL: "https://reactor-92ae6.firebaseio.com",
    projectId: "reactor-92ae6",
    storageBucket: "reactor-92ae6.appspot.com",
    messagingSenderId: "190518610208"
  };
  firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;