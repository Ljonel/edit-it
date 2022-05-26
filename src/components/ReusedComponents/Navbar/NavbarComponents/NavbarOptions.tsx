import React, { FC } from "react";

/* -- Components imports -- */
import { NavbarOptionsWrapper } from "./NavbarOptionsStyled";

/* -- IMG and Icons imports -- */
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const NavList : FC = () => {
    return(
        <NavbarOptionsWrapper>
            <ul>
                <li>Oferty</li>
                <li>Użytkownicy</li>
                <li>Firmy</li>
            </ul>
            <div className="navbar-access-btns-wrapper">
                <button>Logowanie<ArrowDropDownIcon/></button>
                <button>Rejestracja<ArrowDropDownIcon/></button>
            </div>
        </NavbarOptionsWrapper>
    );
};