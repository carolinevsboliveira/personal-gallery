import {
  getAllItemsFromCollection,
  getSingleItemFromCollection,
} from "~/firebase/queries";
import { PhotoCard } from "./photo-card";
import styles from "./styles.module.scss";

export async function PhotoGrid() {
  const [images, header] = await Promise.all([
    getAllItemsFromCollection("images"),
    getSingleItemFromCollection("photo-header"),
  ]);

  return (
    <div className={styles["cards"]}>
      {images.map((image) => (
        <PhotoCard
          modalImage={image.data.url}
          key={image.key}
          profileUrl={header.profileUrl}
          src={header.profileImageUrl}
          username={header.profileUsername}
          mainPhotoSrc={image.data.url_squared}
          title={image.data.title}
          description={image.data.description}
        />
      ))}
    </div>
  );
}
