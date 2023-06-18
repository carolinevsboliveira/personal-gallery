"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

import styles from "./styles.module.scss";

export function ImageWithLoader(props: ImageProps) {
  const [displayLoading, setDisplayLoading] = useState(true);

  return (
    <>
      {displayLoading && (
        <div className={styles["loader"]} data-testid="loader" />
      )}
      <Image
        {...props}
        alt={props.alt}
        style={{ display: displayLoading ? "none" : "block" }}
        onLoadingComplete={() => setDisplayLoading(false)}
      />
    </>
  );
}
