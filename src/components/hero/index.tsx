import {
  getAllItemsFromCollection,
  getSingleItemFromCollection,
} from "~/firebase/queries";
import { HeroContent } from "./content";
import { Icon } from "../icon";
import Link from "next/link";
import { Wave } from "../waves";
import styles from "./styles.module.scss";

export async function Hero() {
  const [details, socialNetwork] = await Promise.all([
    getSingleItemFromCollection("details"),
    getAllItemsFromCollection("social"),
  ]);

  return (
    <div className={styles["hero"]}>
      <div className={`${styles["hero-content"]} ${styles["flex"]}`}>
        <HeroContent
          profilePhotoUrl={details.profile_photo}
          title={details.instagram_account}
          subtitle={details.subtitle}
        />
      </div>
      <div className={styles["social-media-list"]}>
        {socialNetwork.map(({ data, key }) => (
          <Link href={data.url} key={key} role="link">
            <Icon use={data.name} />
          </Link>
        ))}
      </div>
      <Wave />
    </div>
  );
}
