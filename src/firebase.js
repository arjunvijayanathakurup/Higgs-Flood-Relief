import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCChCTbnqe1z_SKozmj3_6BaAbZKtoOR9Q",
    authDomain: "higgs-flood-relief.firebaseapp.com",
    databaseURL: "https://higgs-flood-relief.firebaseio.com",
    projectId: "higgs-flood-relief",
    storageBucket: "higgs-flood-relief.appspot.com",
    messagingSenderId: "999857828472",
    appId: "1:999857828472:web:bc7bf29282561d53"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;