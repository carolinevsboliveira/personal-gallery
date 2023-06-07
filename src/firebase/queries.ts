import { firestore } from "./config";

export const getSelectedCollection = async (collection: string) => {
  const unsub = await firestore
    .collection(collection)
    .orderBy("createdAt", "desc")
    .get();
  return unsub.docs.map((item) => {
    return { data: item.data(), key: item.data().createdAt.toDate() };
  });
};
