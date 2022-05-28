import React, { FC } from "react";
import Image from "next/image";

/* -- Components imports -- */
import { LoginPageWrapper } from "./LoginPageStyled";

import IMG from "../../imgs/LoginPageIMG.png"

export const LoginPage : FC = () => {
    return(
        <LoginPageWrapper>
            <Image src={IMG} alt=""/>
        </LoginPageWrapper>
    );
};