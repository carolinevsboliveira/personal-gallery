"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className={styles["modal-overlay"]}>
          <div className={styles["modal"]}>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button className={styles["close-button"]} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
