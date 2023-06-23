"use client";

import Image from "next/image";
import { ImageWithLoader } from "../image-with-loader";
import Link from "next/link";
import { Modal } from "../modal";
import styles from "./styles.module.scss";
import { useState } from "react";

type PhotoCardProps = {
  src: string;
  profileUrl: string;
  username: string;
  mainPhotoSrc: string;
  title: string;
  modalImage: string;
  description: string;
};

export function PhotoCard({
  profileUrl,
  src,
  username,
  mainPhotoSrc,
  modalImage,
  title,
  description,
}: PhotoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles["photo-card"]}>
        <div className={styles["header"]}>
          <Link
            href={profileUrl}
            target="_blank"
            aria-label="Link that redirects to Instagram profile."
          >
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

        <ImageWithLoader
          src={mainPhotoSrc}
          fill
          alt={`a fantasy image called ${title}`}
          onClick={() => toggleModal()}
          aria-label={`a clickable image that opens the artwork named ${title} in full size.`}
        />

        <div className={styles["description"]}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          toggleModal={toggleModal}
          content={
            <ImageWithLoader
              reservedHeight="60vh"
              src={modalImage}
              fill
              alt={`a fantasy image called ${title}`}
            />
          }
        />
      )}
    </>
  );
}
