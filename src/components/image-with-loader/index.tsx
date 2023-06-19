"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import styles from "./styles.module.scss";
import { useState } from "react";

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
        style={{ visibility: displayLoading ? "hidden" : "visible" }}
        onLoadingComplete={() => setDisplayLoading(false)}
      />
    </>
  );
}
