import Link from "next/link";
import { Wave } from "../waves";
import styles from "./styles.module.scss";
import { Icon } from "../icon";

export function Footer() {
  return (
    <footer>
      <Wave type="primary" />
      <div className={styles["footer-content"]}>
        <h1>Made with love &#9829;</h1>
        <Link
          href="https://github.com/carolinevsboliveira/personal-gallery"
          target="_blank"
        >
          <p>&#8594; Visit this repo on Github &#8592;</p>
        </Link>
      </div>
    </footer>
  );
}
