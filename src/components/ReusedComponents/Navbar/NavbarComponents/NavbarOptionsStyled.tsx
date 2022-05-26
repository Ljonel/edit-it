import styled from "styled-components";

export const NavbarOptionsWrapper = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-content: center;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li{
        padding: 0.1rem 1rem;
        margin: 2px 0.8rem;
        list-style-type: none;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
    }
    li:hover{
        transform: scale(1.05);
        color: #594076;
        font-weight: 600;
    }

    .navbar-access-btns-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navbar-access-btns-wrapper> button{
        width: 90px;
        height: 35px;
        background-color: #ce43ff;
        box-sizing: border-box;
        margin: 2px 10px;
        padding: 8px 10px;
        border-radius: 20px;
        font-size: 0.9rem;
        outline: none;
        border: none;
        color: #ffffff;
    }
`;