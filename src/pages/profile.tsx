import React, { useState } from "react";

import { PrismaClient } from "@prisma/client";
import { getSession, useSession } from "next-auth/react";
import { Navbar } from "../components/ReusedComponents/Navbar/Navbar";
import DisplayProfile from "../components/Profile/DisplayProfile";
import { DisplayProfileWrapper } from "../components/Profile/DisplayProfileStyled";
const Profile = ({ profile }: any) => {
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const { data: session }: any = useSession();
  const userProfile = profile;

  return (
    <>
      <Navbar />
      <DisplayProfileWrapper>
        <DisplayProfile
          profile={userProfile}
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      </DisplayProfileWrapper>
    </>
  );
};
export default Profile;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  const prisma = new PrismaClient();
  if (!session) {
    return {
      props: {
        session: null,
      },
    };
  }
  const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });
  return {
    props: {
      profile,
    },
  };
};
