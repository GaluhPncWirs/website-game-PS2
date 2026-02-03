import { app } from "./init";
import {
  collection,
  getDocs,
  getFirestore,
  // onSnapshot,
  // query,
} from "firebase/firestore";

const firestore = getFirestore(app);

export async function getDataGamePS2() {
  const snapshot = await getDocs(collection(firestore, "database-gamePS2"));
  const dataGames = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return dataGames;
}

// // untuk realtime
// export function subscribeToGetDataGamePS2(callback: (dataGame : dataGamePS2[]) => void){
//   const q = query(collection(firestore, "database-gamePS2"))

//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const dataGamePS2 = querySnapshot.docs.map((doc) => ({
//       id : doc.id,
//       ...doc.data()
//     })) as dataGamePS2[]
//     callback(dataGamePS2)
//   })
//   return unsubscribe
// }
