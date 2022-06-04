import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";
const Navbar = ({ userName }) => {
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" passHref>
          <a className={styles.logoLink}>
            <div className={styles.logoWrapper}>Netflix</div>
          </a>
        </Link>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem2}>
            <Link href="browse/mylist">My List</Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              onClick={() => setShowSignOut(!showSignOut)}
            >
              <p className={styles.username}>{userName}</p>
            </button>
            {showSignOut && (
              <div className={styles.navDropdown}>
                <div>
                  <Link href="/login" passHref>
                    <a className={styles.linkName}>Sign Out</a>
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
