import styles from "./AuthenticationFooter.module.scss";

const AuthenticationFooter = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <p className={styles.text}>Community Standards </p>
        <p className={styles.text}>IP Agreement </p>
        <div className={styles.linkContainer}>
          <p className={styles.text}>Privacy</p>
          <p className={styles.text}>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationFooter;
