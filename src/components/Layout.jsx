import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Photosnap"}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
