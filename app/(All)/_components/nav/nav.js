import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span>
        <h3>KrytaniK</h3>
      </span>
      <span className={styles.links}>
        <Link className={styles.disabledLink} href={"/blog"}>
          Blog
        </Link>
        <Link href={"/projects"}>Portfolio</Link>
        <Link className={styles.disabledLink} href={"/"}>
          Home
        </Link>
      </span>
      <span></span>
    </nav>
  );
}
