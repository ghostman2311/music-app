import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="https://nikhil-karnwal.netlify.app/">Nikhil Karnwal</a>
      <br />
      {currentYear}
    </footer>
  );
};

export { Footer };
