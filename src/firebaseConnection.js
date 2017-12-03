import Firebase from 'firebase'
 /* Replace your config info below*/
const config = {
    apiKey: /* */,
    authDomain: /* */,
    databaseURL: /* */,
    projectId: /* */,
    storageBucket: /* */,
    messagingSenderId: /* */
};

const firebaseApp = Firebase.initializeApp(config);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
let db = firebaseApp.database();

export default db;
