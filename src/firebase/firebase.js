import firebase from "firebase/app"
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyBIIUPm37U4iA8MmA2vOUSyB4ASYNKA9WQ",
    authDomain: "vue-test1-b9f16.firebaseapp.com",
    databaseURL: "https://vue-test1-b9f16.firebaseio.com",
    projectId: "vue-test1-b9f16",
    storageBucket: "vue-test1-b9f16.appspot.com",
    messagingSenderId: "832251833973",
    appId: "1:832251833973:web:ca4f969a3616d68003923c",
    measurementId: "G-Z15KRSR6VH"
  };

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase