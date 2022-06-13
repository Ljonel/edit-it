import React, { FC } from "react";
import { useRouter } from "next/router";
import { NavbarOptionsWrapper } from "./NavbarOptionsStyled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSession, signIn, signOut } from "next-auth/react";

export const NavList = () => {
  const router = useRouter();
  const { data: session }: any = useSession();

  return (
    <NavbarOptionsWrapper>
      <ul>
        <li onClick={() => router.push("/")}>Oferty</li>
        <li onClick={() => router.push("users")}>Użytkownicy</li>
        {/* <li onClick={() => router.push("companies")}>Firmy</li> */}
      </ul>
      <div className="navbar-access-btns-wrapper">
        {session ? (
          <>
            <button onClick={() => router.push("/profile")}>
              {session.user.email}
            </button>
            <button onClick={() => signOut()}>Wyloguj</button>
          </>
        ) : (
          <>
            <button onClick={() => router.push("/auth/signin")}>
              Logowanie
              {/* <ArrowDropDownIcon /> */}
            </button>
            {/* <button>
              Rejestracja
              <ArrowDropDownIcon />
            </button> */}
          </>
        )}
      </div>
    </NavbarOptionsWrapper>
  );
};
