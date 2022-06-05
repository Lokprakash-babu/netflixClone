import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleComplete = () => setLoading(false);
  useEffect(() => {
    router.events.on("routeChangeComplete", handleComplete);
    return () => router.events.off("routeChangeComplete", handleComplete);
  }, []);
  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        setLoading(true);
        const didToken = await magic.auth.loginWithMagicLink({
          email,
        });
        if (didToken) {
          router.replace("/");
        }
      } catch (err) {
        setLoading(false);
        console.error("Something went wrong in login", err);
      }
    } else {
      setUserMsg("Enter a valid Email Id");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Netflix signIn</title>
        </Head>
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <Link className={styles.logoLink} href="/">
              <div className={styles.logoWrapper}>
                <p>Netflix</p>
              </div>
            </Link>
          </div>
        </header>

        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
            <form onSubmit={handleLoginWithEmail}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.emailInput}
                onChange={handleOnChangeEmail}
                required
              />

              <p className={styles.userMsg}>{userMsg}</p>
              <button className={styles.loginBtn}>
                <p>{loading ? "Loading" : "Sign In"}</p>
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
