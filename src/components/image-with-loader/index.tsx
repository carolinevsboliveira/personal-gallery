"use client";

import Image from "next/image";
import type { ImageProps } from "next/image";
import styles from "./styles.module.scss";
import { useState } from "react";

interface ImageWithLoaderProps extends ImageProps {
  reservedHeight?: string;
}
export function ImageWithLoader(props: ImageWithLoaderProps) {
  const [displayLoading, setDisplayLoading] = useState(true);

  return (
    <>
      {displayLoading && (
        <div
          className={
            displayLoading
              ? styles["loader-container"]
              : styles["loader-container-hidden"]
          }
          style={{ height: props.reservedHeight ?? "20rem" }}
        >
          <div className={styles["loader"]} data-testid="loader" />
        </div>
      )}
      <figure
        style={{
          display: displayLoading ? "hidden" : "block",
        }}
      >
        <Image
          {...props}
          alt={props.alt}
          onLoadingComplete={() => setDisplayLoading(false)}
        />
      </figure>
    </>
  );
}
