
const firestoreService = require('firestore-export-import');
const firebaseConfig = require('./firebaseConfig.js');
const serviceAccount = require('./serviceAccount.json');

const jsonPath = './json/collections.json';

// JSON To Firestore
const jsonToFirestore = async () => {
    try {
        await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
        console.log('Firebase Initialized');
       
        // firestoreService
        //     .backups(['general']) // Array of collection's name is OPTIONAL 
        //     .then(collections => {
        //         // You can do whatever you want with collections
        //         console.log(JSON.stringify(collections));
        //     });

        await firestoreService.restore(jsonPath)

    }
    catch (error) {
        console.log(error);
    }
};

jsonToFirestore();