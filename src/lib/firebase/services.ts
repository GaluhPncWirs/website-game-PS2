import { app } from "./init";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);

export async function getDataGamePS2() {
  const snapshot = await getDocs(collection(firestore, "database-gamePS2"));
  const dataGames = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return dataGames;
}
