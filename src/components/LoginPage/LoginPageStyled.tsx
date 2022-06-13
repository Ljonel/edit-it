import styled from "styled-components";
export const BackLink = styled.a`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 999;
  cursor: pointer;

  .backIcon {
    font-size: 25px;
    color: #fff;
    transition: all 0.3s;
    &:hover {
      color: #3a3476;
    }
  }
`;
export const LoginPageWrapper = styled.div`
  width: 100vw;
  background-color: white;
  height: 100vh;
  position: relative;
  display: flex;
  .helloImage {
    position: absolute;
    min-width: 500px;
    max-width: 800px;
    bottom: 100px;
    left: 200px;
    @media screen and (max-width: 1500px) {
      & {
        left: 150px;
        bottom: 50px;
        min-width: 300px;
        max-width: 600px;
      }
    }
    @media screen and (max-width: 900px) {
      & {
        left: 0;
        bottom: 50px;
        max-width: 500px;
      }
    }
    @media screen and (max-width: 600px) {
      & {
        display: none;
      }
    }
  }
  .circle-wrapper,
  .login-form-wrapper {
    height: 100vh;
  }
  .circle-wrapper {
    width: 50vw;
    clip-path: ellipse(86% 100% at 13% 11%);
    background-color: #a39cf6;
    text-align: center;
    padding: 5vh 5%;
    color: #ffffff;
    h2 {
      margin-top: 100px;
      font-size: 3rem;
      font-family: "Patrick Hand", cursive;
      margin-bottom: 5px;
    }
    p {
      letter-spacing: 0.02rem;
    }
    button {
      width: 200px;
      height: 50px;
      margin: 20px 0 5px;
      border-radius: 40px;
      background-color: transparent;
      color: #ffffff;
      border: 2px solid #ffffff;
      padding: 5px;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.03rem;
      font-family: "Open Sans", sans-serif;
    }
  }
  .login-form-wrapper {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form {
      width: 65%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      span {
        width: 100%;
        height: 60px;
        margin: 10px 5px;
        padding: 2px 20px;
        background-color: #ebebeb;
        border-radius: 50px;
        display: flex;
        align-items: center;
        .user-icon,
        .password-icon {
          width: auto;
          color: #929292;
        }
        input {
          width: 100%;
          height: 60px;
          border-radius: 0 50px 50px 0;
          padding: 5px 2px 5px 15px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          background-color: transparent;
          outline: none;
          color: #606060;
        }
      }
      button {
        width: 210px;
        height: 50px;
        margin: 10px auto 15px;
        border-radius: 50px;
        border: none;
        background-color: #a39cf6;
        font-family: "Open Sans", sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: #ffffff;
      }
    }
    .social-media-icons-wrapper {
      min-width: 120px;
      margin: 10px 2px 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      a {
        cursor: pointer;
        border: 1px solid black;
        width: 150px;
        height: 45px;
        display: flex;
        padding: 3px;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        margin: 5px;
        &:hover {
          background-color: #a39cf6;
        }
      }
    }
  }
`;
