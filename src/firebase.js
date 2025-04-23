import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCECiW6awicNPNXVLChCiqZ8defgv9hijs",
    authDomain: "watchlist-diaries-review-page.firebaseapp.com",
    projectId: "watchlist-diaries-review-page",
    storageBucket: "watchlist-diaries-review-page.firebasestorage.app",
    messagingSenderId: "1033798682657",
    appId: "1:1033798682657:web:635264eba993b8a049bb60"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
