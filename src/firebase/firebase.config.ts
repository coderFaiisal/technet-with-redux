import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDkNkdmfvV2oTj_xHTXOgzCq-N_OBSnxvA',
  authDomain: 'techenet-458f0.firebaseapp.com',
  projectId: 'techenet-458f0',
  storageBucket: 'techenet-458f0.appspot.com',
  messagingSenderId: '115875733038',
  appId: '1:115875733038:web:298f3d5403129581de49bf',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
