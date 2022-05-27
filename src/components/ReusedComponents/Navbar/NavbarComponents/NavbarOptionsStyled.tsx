import styled from "styled-components";

export const NavbarOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    li {
      padding: 0.1rem 1rem;
      margin: 2px 0.8rem;
      list-style-type: none;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
        color: #594076;
      }
    }
  }

  .navbar-access-btns-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-access-btns-wrapper > button {
    height: 35px;
    background-color: #9671d6;
    box-sizing: border-box;
    margin: 2px 10px;
    padding: 8px 0.5rem 8px 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    outline: none;
    border: none;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
