import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyArQo-OuyifO8R-gP3DfyRaDfXnAUwI4OI',
	authDomain: 'daxon-clone.firebaseapp.com',
	projectId: 'daxon-clone',
	storageBucket: 'daxon-clone.appspot.com',
	messagingSenderId: '124594991049',
	appId: '1:124594991049:web:3ae2480964bb2bb16e0218',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
