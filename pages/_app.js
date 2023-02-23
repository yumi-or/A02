import Head from "next/head";
import { useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import { stickyNav } from "../src/utils";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  });

  return (
    <>
      <Head>
        <title> A02 - Education platform </title>
        <link rel="shortcut icon" href="/img/favicon_a02.png" type="img/png" />
      </Head>
      {loader && <PreLoader />}
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
