import admin from 'firebase-admin';

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert(
    require('../config/service-account-key.json')
  ),
  storageBucket: 'gs://apollogameslab-f43c8.appspot.com',
});

// Cloud storage
export default admin.storage().bucket();
