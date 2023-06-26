"use client";

import { PhotoCard } from "./photo-card";
import type firebase from "firebase/compat";
import styles from "./styles.module.scss";
import { useWindowWidth } from "~/hooks/use-window-width";
export function Grid({
  images,
  header,
}: {
  images: firebase.firestore.DocumentData[];
  header: firebase.firestore.DocumentData;
}) {
  const width = useWindowWidth();
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
          modalAllowed={width > 600}
        />
      ))}
    </div>
  );
}
