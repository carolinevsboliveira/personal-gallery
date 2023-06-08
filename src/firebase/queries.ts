import { firestore } from "./config";

export const getAllItemsFromCollection = async (collection: string) => {
  const unsub = await firestore.collection(collection).get();
  return unsub.docs.map((item) => {
    return { data: item.data(), key: item.data().createdAt.toDate() };
  });
};

export const getSingleItemFromCollection = async (collection: string) => {
  return (await firestore.collection(collection).limit(1).get()).docs.map(
    (item) => item.data()
  )[0];
};
