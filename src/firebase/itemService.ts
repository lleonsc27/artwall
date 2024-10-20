import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stock: number;
    category: string;
}

export const fetchItems = async (categoryId?: string): Promise<Item[]> => {
    const items: Item[] = [];
    const itemCollection = collection(db, 'items');

    if (categoryId) {
        const q = query(itemCollection, where("category", "==", categoryId));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            items.push({ id: doc.data().id, ...doc.data() } as Item);
        });
    } else {
        const querySnapshot = await getDocs(itemCollection);
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.data().id, ...doc.data() } as Item);
        });
    }

    return items;
};
