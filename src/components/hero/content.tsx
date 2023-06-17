import Image from "next/image";
import styles from "./styles.module.scss";

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
      <Image
        src={profilePhotoUrl}
        alt="profile image"
        height={100}
        width={100}
        role="img"
      />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
