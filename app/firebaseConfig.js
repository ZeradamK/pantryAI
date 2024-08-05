// Import the functions you need from the SDKs you need
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { app } from './firebaseConfig'; // Assuming your firebase configuration is in firebaseConfig.js

const firestore = getFirestore(app);

const CART_COLLECTION = 'carts';
const CART_DOC = 'userCart'; // You can change this to any identifier, maybe user ID if applicable

// Initialize Firebase
const firestore = getFirestore(app);

export const saveCartToFirestore = async (cart) => {
    try {
        await setDoc(doc(firestore, CART_COLLECTION, CART_DOC), { cart });
        console.log('Cart saved to Firestore');
    } catch (error) {
        console.error('Error saving cart to Firestore:', error);
    }
};

export const getCartFromFirestore = async () => {
    try {
        const docSnap = await getDoc(doc(firestore, CART_COLLECTION, CART_DOC));
        if (docSnap.exists()) {
            return docSnap.data().cart;
        } else {
            console.log('No such document!');
            return [];
        }
    } catch (error) {
        console.error('Error getting cart from Firestore:', error);
        return [];
    }
};
