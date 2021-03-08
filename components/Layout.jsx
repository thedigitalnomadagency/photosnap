import Head from "next/head";

//components
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Photosnap"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
