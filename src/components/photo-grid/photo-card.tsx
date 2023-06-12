"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

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
        <Link href={profileUrl} target="_blank">
          <Image
            alt={`profile photo from ${username}`}
            src={src}
            width={50}
            height={50}
          />
        </Link>
        <h3>
          <strong>{username}</strong>
        </h3>
      </div>

      <Image src={mainPhotoSrc} fill alt={`a fantasy image called ${title}`} />

      <div className={styles["description"]}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
