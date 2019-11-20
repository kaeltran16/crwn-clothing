import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyD9al3pmEn0h2GwY1Mfl6h-pAXjFegu99Q',
   authDomain: 'crwn-clothing-8e97b.firebaseapp.com',
   databaseURL: 'https://crwn-clothing-8e97b.firebaseio.com',
   projectId: 'crwn-clothing-8e97b',
   storageBucket: 'crwn-clothing-8e97b.appspot.com',
   messagingSenderId: '940914742511',
   appId: '1:940914742511:web:52a50046f01a4e792ff71a',
   measurementId: 'G-DZDXJ9C8WT'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) {
      return null;
   }

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapshot = await userRef.get();

   if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt, ...additionalData
         });
      } catch (e) {
         console.error(`error when creating user: ${e}`);
      }
   }

   return userRef;

};

export default firebase;
