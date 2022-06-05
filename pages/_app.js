import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    isUserLoggedIn();
  }, []);

  const handleComplete = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);
  const isUserLoggedIn = async () => {
    setIsLoading(true);
    const isLoggedIn = await magic.user.isLoggedIn();

    if (isLoggedIn) {
      router.replace("/");
    } else {
      router.push("/login");
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
