import React from "react";

import styles from "./join-our-community.module.scss";

function JoinOurCommunity() {
  return (
    <div className={styles.cta}>
      <h2 className={styles["cta__heading"]}>Join Our Community</h2>
      <div className={styles["cta__socials"]}>
        <button className={styles["cta__socials-icon"]}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 9.7291V15.6444H12.5707V10.1253C12.5707 8.73882 12.0747 7.79263 10.8334 7.79263C9.88579 7.79263 9.32189 8.4303 9.07381 9.04713C8.98334 9.26765 8.96006 9.57458 8.96006 9.88326V15.6444H5.52958C5.52958 15.6444 5.57578 6.29681 5.52958 5.32833H8.95972V6.79059C8.95276 6.80153 8.94372 6.81332 8.93718 6.82392H8.95972V6.79059C9.41545 6.08868 10.2293 5.08598 12.051 5.08598C14.308 5.08594 16 6.5604 16 9.7291ZM1.94116 0.355469C0.767605 0.355469 0 1.12523 0 2.1375C0 3.1277 0.745397 3.92082 1.89563 3.92082H1.91855C3.11484 3.92082 3.85882 3.12785 3.85882 2.1375C3.83628 1.12523 3.11484 0.355469 1.94116 0.355469ZM0.20374 15.6444H3.63291V5.32833H0.20374V15.6444Z"
              fill="black"
            />
          </svg>

          <span className={styles["cta__socials-icon-name"]}>Linkedin</span>
        </button>

        <button className={styles["cta__socials-icon"]}>
          <svg
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.86667 2.6C1.86667 2.4 1.8 2.2 1.66667 2.06667L0.200002 0.266663V0H4.86667L8.46667 7.86667L11.6 0H16V0.266663L14.7333 1.46666C14.6 1.53333 14.6 1.66666 14.6 1.8V10.8C14.6 10.9333 14.6 11.0667 14.7333 11.1333L16 12.3333V12.6H9.73334V12.3333L11 11.0667C11.1333 10.9333 11.1333 10.9333 11.1333 10.7333V3.46666L7.53334 12.6H7.06667L2.86667 3.46666V9.6C2.8 9.86666 2.93334 10.1333 3.06667 10.3333L4.73334 12.4V12.6667H0V12.4L1.66667 10.3333C1.86667 10.1333 1.93334 9.86666 1.86667 9.6C1.86667 9.66666 1.86667 2.6 1.86667 2.6Z"
              fill="black"
            />
          </svg>

          <span className={styles["cta__socials-icon-name"]}>Medium</span>
        </button>

        <button className={styles["cta__socials-icon"]}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.195312C3.57969 0.195312 0 3.775 0 8.19531C0 11.7359 2.29062 14.725 5.47031 15.7859C5.87031 15.8563 6.02031 15.6156 6.02031 15.4062C6.02031 15.2156 6.01094 14.5859 6.01094 13.9156C4.00156 14.2859 3.48125 13.425 3.32031 12.975C3.22969 12.7453 2.84063 12.0344 2.5 11.8453C2.22031 11.6953 1.82031 11.325 2.49062 11.3156C3.12031 11.3062 3.57031 11.8953 3.72031 12.1359C4.44063 13.3453 5.59063 13.0063 6.05 12.7953C6.12031 12.275 6.32969 11.925 6.55937 11.725C4.77969 11.525 2.91875 10.8344 2.91875 7.775C2.91875 6.90469 3.22812 6.18437 3.73906 5.625C3.65937 5.425 3.37969 4.60469 3.81875 3.50469C3.81875 3.50469 4.48906 3.29531 6.01875 4.325C6.65938 4.14531 7.33906 4.05469 8.01875 4.05469C8.69844 4.05469 9.37813 4.14531 10.0188 4.325C11.5484 3.28437 12.2188 3.50469 12.2188 3.50469C12.6594 4.60469 12.3781 5.425 12.2984 5.625C12.8078 6.18437 13.1187 6.89531 13.1187 7.775C13.1187 10.8453 11.2484 11.525 9.46875 11.725C9.75937 11.975 10.0094 12.4547 10.0094 13.2047C10.0094 14.275 10 15.1344 10 15.4047C10 15.6141 10.15 15.8641 10.55 15.7844C13.7094 14.725 16 11.725 16 8.19375C16 3.77656 12.4203 0.195312 8 0.195312Z"
              fill="black"
            />
          </svg>
          <span className={styles["cta__socials-icon-name"]}>Discord</span>
        </button>

        <button className={styles["cta__socials-icon"]}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.46281 10.02C8.31169 10.1145 8.14168 10.1522 7.99056 10.1522C7.83943 10.1522 7.66942 10.1145 7.5183 10.02L0 5.42969V11.5312C0 12.8347 1.05785 13.8925 2.36128 13.8925H13.6387C14.9421 13.8925 16 12.8347 16 11.5312V5.42969L8.46281 10.02Z"
              fill="black"
            />
            <path
              d="M13.6374 2.10547H2.35993C1.24541 2.10547 0.300901 2.89886 0.0742188 3.95671L8.0081 8.7926L15.9231 3.95671C15.6964 2.89886 14.7519 2.10547 13.6374 2.10547Z"
              fill="black"
            />
          </svg>
          <span className={styles["cta__socials-icon-name"]}>Twitter</span>
        </button>
      </div>
    </div>
  );
}

export default JoinOurCommunity;
