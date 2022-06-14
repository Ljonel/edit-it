import type { NextPage } from "next";
import Head from "next/head";

/* -- Components imports -- */
import { Navbar } from "../components/ReusedComponents/Navbar/Navbar";
import { FindJobOfferPage } from "../components/FindJobOfferPage/FindJobOfferPage";
import {
  useSession,
  signIn,
  signOut,
  getSession,
  getProviders,
} from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import CreateProfile from "../components/Profile/CreateProfile";

const Home: NextPage = ({ profile }: any) => {
  const { data: session }: any = useSession();

  return (
    <>
      {session && !profile ? (
        <CreateProfile />
      ) : (
        <>
          <Head>
            <title>EditIT</title>
            <link rel="icon" href="" />
          </Head>
          <Navbar />
          <FindJobOfferPage />
        </>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  const prisma = new PrismaClient();
  const providers = await getProviders();

  if (!session) {
    return {
      props: {
        session: null,
        providers,
      },
    };
  }
  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });
  return {
    props: {
      providers,
      session,
      profile,
    },
  };
};
