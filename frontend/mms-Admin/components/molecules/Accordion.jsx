import React, { useState } from "react";
import styles from "./styles/accordion.module.scss";

export const Accordion = ({ header, body, footer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div class={styles.accordion}>
        <div
          className={`${styles.header}`}
          onClick={() => setOpen((prev) => !prev)}>
          {header}
        </div>
        {open && (
          <div>
            <div className={styles.accordion_body}>{body}</div>
            <div className={`flex flex-justify-end ${styles.accordion_footer}`}>
              {footer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
