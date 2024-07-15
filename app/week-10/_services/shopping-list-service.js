import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
    const items = [];
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    console.log("Items: ", items);
    return items;

}

const addItem = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    
    } catch (error) {
        console.error("Error adding document: ", error);
    }
    
}


export { getItems, addItem };