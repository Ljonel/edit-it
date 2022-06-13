import styled from "styled-components";

export const UsersList = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .searchUser {
    margin-top: 10px;
    width: 800px;
    height: 150px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;

    input,
    button {
      padding: 10px;
      background: none;
      outline: none;
      border: none;
    }
    input {
      width: 250px;
      border-bottom: 2px solid #9671d6;
    }
    button {
      width: 100px;
      background: #9671d6;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background: #3a3476;
      }
    }
  }
  ul {
    width: 750px;
    min-width: 300px;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 10px 10px;
    height: 100%;
    overflow-y: scroll;
    max-height: calc(100vh - 250px);
    .user {
      background-color: #dedede;
      min-width: 300px;
      width: 100%;
      height: 80px;
      border-radius: 10px;
      display: flex;
      margin-top: 15px;
      align-items: center;

      p {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h3 {
        max-width: 250px;
      }
    }
  }
`;
