import {
  getSingleItemFromCollection,
  getAllItemsFromCollection,
} from "~/firebase/queries";
import styles from "./styles.module.scss";
import { PhotoCard } from "./photo-card";

export async function PhotoGrid() {
  const [images, header] = await Promise.all([
    getAllItemsFromCollection("images"),
    getSingleItemFromCollection("photo-header"),
  ]);
  console.log("🚀 ~ file: index.tsx:13 ~ PhotoGrid ~ images:", images);
  console.log(header);
  return (
    <div className={styles["cards"]}>
      {images.map(({ data }) => (
        <div className={styles["card-container"]} key={data.id}>
          <PhotoCard
            key={`${data.id}0`}
            profileUrl={header.profileUrl}
            src={header.profileImageUrl}
            username={header.profileUsername}
            mainPhotoSrc={data.url_squared}
          />
        </div>
      ))}
    </div>
  );
}
