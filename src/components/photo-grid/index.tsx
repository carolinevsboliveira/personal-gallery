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

  return (
    <div className={styles["cards"]}>
      {images.map(({ data }) => (
        <PhotoCard
          key={data.id}
          profileUrl={header.profileUrl}
          src={header.profileImageUrl}
          username={header.profileUsername}
          mainPhotoSrc={data.url_squared}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  );
}
