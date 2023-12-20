"use client";

import Link from "next/link";
import styles from "./nav.module.css";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <span>
        <h3>KrytaniK</h3>
      </span>
      <span className={styles.links}>
        <Link
          className={`${styles.link} ${styles.disabledLink} ${
            pathname === "/blog" ? styles.active : ""
          }`}
          href={"/blog"}
        >
          Blog
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/projects" ? styles.active : ""
          }`}
          href={"/projects"}
        >
          Portfolio
        </Link>
        <Link
          className={`${styles.link} ${styles.disabledLink} ${
            pathname === "/" ? styles.active : ""
          }`}
          href={"/"}
        >
          Home
        </Link>
      </span>
      <span></span>
    </nav>
  );
}
