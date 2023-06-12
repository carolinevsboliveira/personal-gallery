import { getSingleItemFromCollection } from "~/firebase/queries";
import { HeroContent } from "./content";
import styles from "./styles.module.scss";
import { Wave } from "../waves";

export async function Hero() {
  const data = await getSingleItemFromCollection("details");

  return (
    <div className={styles["hero"]}>
      <div className={`${styles["hero-content"]} ${styles["flex"]}`}>
        <HeroContent
          profilePhotoUrl={data.profile_photo}
          title={data.instagram_account}
          subtitle={data.subtitle}
        />
      </div>

      <Wave />
    </div>
  );
}
