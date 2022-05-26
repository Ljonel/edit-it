import React, { FC } from "react";

/* -- Components imports -- */
import { NavbarOptionsWrapper } from "./NavbarOptionsStyled";

export const NavList : FC = () => {
    return(
        <NavbarOptionsWrapper>
            <ul>
                <li>Oferty</li>
                <li>Użytkownicy</li>
                <li>Firmy</li>
            </ul>
            <div className="navbar-access-btns-wrapper">
                <button>Login</button>
                <button>Register</button>
            </div>
        </NavbarOptionsWrapper>
    );
};