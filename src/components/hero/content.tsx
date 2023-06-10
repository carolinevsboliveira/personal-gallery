import Image from "next/image";
import styles from "./styles.module.scss";
import { Modal } from "../modal";
type HeroContentProps = {
  profilePhotoUrl: string;
  title: string;
  subtitle: string;
};
export function HeroContent({
  profilePhotoUrl,
  title,
  subtitle,
}: HeroContentProps) {
  return (
    <div className={styles["hero-information"]}>
      <div className={styles["image-container"]}>
        <Image src={profilePhotoUrl} fill alt="profile image" />
      </div>
      <div className={styles["typewriter-container"]}>
        <h1>{title}</h1>
      </div>
      <h2>{subtitle}</h2>
    </div>
  );
}
