"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";

export default function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <span>
        <h3>KrytaniK</h3>
      </span>
      <div className={styles.hamburgerWrapper}>
        <div
          className={`${styles.hamburger} ${collapsed ? styles.collapsed : ""}`}
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
        >
          <span></span>
          <span></span>
        </div>
        <span
          className={`${styles.links} ${collapsed ? "" : styles.collapsed}`}
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
        >
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
      </div>
      <span className={styles.empty}></span>
    </nav>
  );
}
