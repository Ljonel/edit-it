import React, { FC } from "react";
import Image from "next/image";

/* -- Components imports -- */
import { LoginPageWrapper } from "./LoginPageStyled";

/* -- IMG and Icons imports -- */
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const LoginPage : FC = () => {
    return(
        <LoginPageWrapper>
            <div className="circle-wrapper">
                <h2>Pierwszy raz?</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    <br/>Perferendis ipsum dolor sit amet consectetur, adipisicing. 
                    <br/>Perferendis,  itaque nisi recusandae natus sit vitae, magni nulla!
                    <br/>Perferendis ipsum dolor sit amet consectetur, adipisicing.
                </p>
                <button>REJESTRACJA</button>
            </div>
            <div className="login-form-wrapper">
                <form>
                    <span>
                        <PersonOutlineIcon fontSize="large" className="user-icon"/>
                        <input type="email" placeholder="Email"/>
                    </span>
                    <span>
                        <LockOutlinedIcon  fontSize="large" className="password-icon"/>
                        <input type="password" placeholder="Password"/>
                    </span>
                    <button type="submit">Zaloguj się</button>
                </form>
                <div className="social-media-icons-wrapper">
                    <a><FacebookOutlinedIcon fontSize="large"/></a>
                    <a><GoogleIcon fontSize="large"/></a>
                    <a><LinkedInIcon fontSize="large"/></a>
                </div>
            </div>
        </LoginPageWrapper>
    );
};