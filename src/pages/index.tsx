import type { NextPage } from "next";
import Head from "next/head";

/* -- Components imports -- */
import { Navbar } from "../components/ReusedComponents/Navbar/Navbar";
import { FindJobOfferPage } from "../components/FindJobOfferPage/FindJobOfferPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EditIT</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <FindJobOfferPage/>
    </>
  );
};

export default Home;
