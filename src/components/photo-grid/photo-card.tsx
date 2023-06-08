"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

type PhotoCardProps = {
  src: string;
  profileUrl: string;
  username: string;
  mainPhotoSrc: string;
};

export function PhotoCard({
  profileUrl,
  src,
  username,
  mainPhotoSrc,
}: PhotoCardProps) {
  return (
    <div className={styles["photo-card"]}>
      <div className={styles["header"]}>
        <Image
          className={styles["header-photo"]}
          alt={`profile photo from ${username}`}
          src={src}
          width={50}
          height={50}
        />
        <h3>
          <strong>{username}</strong>
        </h3>
      </div>
      <div className={styles["image-container"]}>
        <img src={mainPhotoSrc}></img>
      </div>
    </div>
  );
}
