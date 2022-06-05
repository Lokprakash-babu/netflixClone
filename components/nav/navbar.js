import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";
import { magic } from "../../lib/magic-client";
import { useRouter } from "next/router";
const Navbar = () => {
  const [showSignOut, setShowSignOut] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const getEmail = async () => {
    try {
      const { email, publicAddress } = await magic.user.getMetadata();
      setEmail(email);
    } catch (err) {
      console.error("Error in retriving email", err);
    }
  };
  useEffect(() => {
    getEmail();
  }, []);
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
              <p className={styles.username}>{email}</p>
            </button>
            {showSignOut && (
              <div className={styles.navDropdown}>
                <div
                  onClick={async () => {
                    await magic.user.logout();
                    router.push("/login");
                  }}
                >
                  <a className={styles.linkName}>Sign Out</a>
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
