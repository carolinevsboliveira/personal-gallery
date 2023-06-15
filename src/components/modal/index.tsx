import type { ReactNode } from "react";
import styles from "./styles.module.scss";

type ModalProps = {
  toggleModal: () => void;
  content: ReactNode;
};
export function Modal({ toggleModal, content }: ModalProps) {
  return (
    <div className={styles["backdrop"]}>
      <div className={styles["container"]}>
        {content}
        <button type="button" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
}
