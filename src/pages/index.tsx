import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Filters from "../components/Filters/Filters";
import Offerts from "../components/Offerts/Offerts";
import Map from "../components/Map/Map";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>EditIT</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <Filters />
      <main>
        <Offerts />
        <Map />
      </main>
    </>
  );
};

export default Home;
