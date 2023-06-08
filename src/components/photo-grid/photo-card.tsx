"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

type PhotoCardProps = {
  src: string;
  profileUrl: string;
  username: string;
  mainPhotoSrc: string;
  title: string;
  description: string;
};

export function PhotoCard({
  profileUrl,
  src,
  username,
  mainPhotoSrc,
  title,
  description,
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
        <Image src={mainPhotoSrc} fill alt={`a image called ${title}`} />
      </div>
      <div className={styles["description"]}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
