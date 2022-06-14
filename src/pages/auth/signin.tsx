import React from "react";
import Image from "next/image";
import {
  getProviders,
  getSession,
  signIn as signInProvider,
  useSession,
} from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import {
  LoginPageWrapper,
  BackLink,
} from "../../components/LoginPage/LoginPageStyled";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import hello from "../../assets/hello.svg";
import { useRouter } from "next/router";
import { BsArrowLeftCircleFill } from "react-icons/bs";
//

export default function Signin({ providers }: any) {
  const { data: session }: any = useSession();
  const router = useRouter();

  return (
    <div>
      <BackLink onClick={() => router.push("/")}>
        <BsArrowLeftCircleFill className="backIcon" />
      </BackLink>
      <LoginPageWrapper>
        <div className="circle-wrapper">
          <h2>Witaj!</h2>
          <p>
            Cieszymy się, że do nas zawitałeś!
            <br />
            Perferendis ipsum dolor sit amet consectetur, adipisicing.
            <br />
            Perferendis, itaque nisi recusandae natus sit vitae, magni nulla!
            <br />
            Perferendis ipsum dolor sit amet consectetur, adipisicing.
          </p>
        </div>
        <div className="helloImage">
          <Image src={hello} alt="hey" className="helloImage" />
        </div>
        <div className="login-form-wrapper">
          {/* <form>
            <span>
              <PersonOutlineIcon fontSize="large" className="user-icon" />
              <input type="email" placeholder="Email" />
            </span>
            <span>
              <LockOutlinedIcon fontSize="large" className="password-icon" />
              <input type="password" placeholder="Password" />
            </span>
            <button type="submit">Zaloguj się</button>
          </form> */}
          <h1>Zaloguj się</h1>
          <div className="social-media-icons-wrapper">
            {Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                <a
                  className="rounded-lg bg-blue-500 p-3 text-white"
                  onClick={() => {
                    signInProvider(provider.id);
                  }}
                >
                  <GoogleIcon fontSize="large" />
                </a>
              </div>
            ))}
            <a>Cos jeszcze bedzie</a>
          </div>
        </div>
      </LoginPageWrapper>
    </div>
  );
}
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
  console.log(profile);
  return {
    props: {
      providers,
      session,
      profile,
    },
  };
};
