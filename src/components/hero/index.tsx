import {
  getAllItemsFromCollection,
  getSingleItemFromCollection,
} from "~/firebase/queries";
import { HeroContent } from "./content";
import styles from "./styles.module.scss";
import { Wave } from "../waves";
import Link from "next/link";
import { Icon } from "../icon";

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
            <Icon variant={data.name} />
          </Link>
        ))}
      </div>
      <Wave />
    </div>
  );
}
