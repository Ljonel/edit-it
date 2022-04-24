import styled from "styled-components";

const mainBgColor = "#9398fe";
const mainBgColorHover = "#6568a9";
const textColor = "#c0c0c0";
const textColorHover = "#878dff";
const transition = "all 0.2s ease";

export const Nav = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: relative;
  overflow: hidden;
  .wave {
    position: absolute;
    width: 100%;
    left: 0;
    height: 100px;
    z-index: -1;
  }
`;

export const Logo = styled.div`
  min-width: 150px;
  font-family: "Suez One", serif;
  font-size: 40px;
  cursor: pointer;
  transition: ${transition};
  &:hover {
    color: ${textColorHover};
  }
`;
export const Links = styled.div`
  min-width: 600px;
  height: 100%;
  display: flex;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    li {
      color: ${textColor};
      max-height: 40px;
      padding: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      transition: ${transition};
      &:nth-child(4) {
        background-color: ${mainBgColor};
        color: white;
        padding: 0px 25px 0px 15px;
        border-radius: 20px;
        display: flex;
        padding: 10px 25px 10px 10px;
        svg {
          position: absolute;
          right: 5px;
        }
        &:hover {
          background-color: ${mainBgColorHover};
          color: white;
        }
      }
      &:hover {
        color: ${textColorHover};
      }
    }
  }
`;
