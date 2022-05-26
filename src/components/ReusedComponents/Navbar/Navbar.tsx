import React, { FC } from "react";

/* -- Components imports -- */
import Image from "next/image";
import { NavbarWrapper } from "./NavbarStyles";
import { NavList } from "./NavbarComponents/NavbarOptions";

/* -- IMG and Icons imports -- */
import LogoImg from "../../../imgs/EditITLogo.png"

export const Navbar : FC = () =>{
  return(
    <NavbarWrapper>
      <Image src={LogoImg} alt=""/>
      <NavList/>
    </NavbarWrapper>
  );
};