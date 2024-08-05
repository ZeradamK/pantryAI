import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, setDoc, doc, getDocs, query } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwBqTLI7mGa2RroNDAeyMTqGu0FrYanmg",
    authDomain: "wholefoodsinventory.firebaseapp.com",
    projectId: "wholefoodsinventory",
    storageBucket: "wholefoodsinventory.appspot.com",
    messagingSenderId: "449991482945",
    appId: "1:449991482945:web:b3523f204fa8c423f5f0c0",
    measurementId: "G-MGWGP7Y9XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const getCartFromFirestore = async () => {
    const cartCollection = collection(firestore, 'carts');
    const cartSnapshot = await getDocs(cartCollection);
    const cartList = cartSnapshot.docs.map(doc => doc.data());
    return cartList.length > 0 ? cartList[0].items : [];
};

const saveCartToFirestore = async (cartItems) => {
    const cartDoc = doc(firestore, 'carts', 'userCart');
    await setDoc(cartDoc, { items: cartItems });
};

export {app, firestore, getCartFromFirestore, saveCartToFirestore};