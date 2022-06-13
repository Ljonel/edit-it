import styled from "styled-components";
export const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 500px;
    height: 600px;
    border: 1px solid black;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    justify-content: space-evenly;
    align-items: center;

    input {
      padding: 10px;
      border-radius: 5px;
      outline: none;
      border: 1px solid lightgrey;
      width: 80%;
    }
    textarea {
      min-width: 80%;
      max-width: 80%;
      min-height: 100px;
      height: 100px;
      max-height: 100px;
      overflow-y: scroll;
    }
    button {
      padding: 10px;
      background: none;
      outline: none;
      width: 150px;
      border: 1px solid #a39cf6;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        background-color: #a39cf6;
      }
    }
  }
`;
