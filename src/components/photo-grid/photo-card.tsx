"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Modal } from "../modal";

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
            className={styles["header-photo"]}
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
      <div className={styles["image-container"]}>
        <Image
          src={mainPhotoSrc}
          fill
          alt={`a fantasy image called ${title}`}
        />
      </div>
      <div className={styles["description"]}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Modal />
    </div>
  );
}
