import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        &#128550;
      </span>
      <span role="img" aria-label="musical keyboard emoji">
        &#128536;
      </span>
      <span role="img" aria-label="musical notes emoji">
        &#128540;
      </span>
    </h1>
  );
};

export { Logo };
