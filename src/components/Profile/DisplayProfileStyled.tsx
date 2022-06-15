import styled from "styled-components";
//profile page styles
export const DisplayProfileWrapper = styled.div`
  width: 300px;
  height: calc(100vh - 80px);
  max-height: 100vh;
  min-height: 250px;
  -webkit-box-shadow: 8px 0px 14px -9px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 0px 14px -9px rgba(66, 68, 90, 1);
  box-shadow: 8px 0px 14px -9px rgba(66, 68, 90, 1);
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  button {
    border-radius: 10px;
    background-color: #a39cf6;
    border: none;
    height: 30px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #6963ac;
      color: #fff;
    }
  }
`;

//display styles
export const DisplayProfileDatas = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ul {
    padding: 0px 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    li {
    }
  }
`;

//edit disaply styles
export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 0px 15px;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .form-element {
      display: flex;
      flex-direction: column;
      height: 30px;

      input {
        background: none;
        outline: none;
        padding: 5px;
        border: none;
        border-bottom: 2px solid #a39cf6;
        &:focus {
          border-bottom: 2px solid purple;
        }
      }
    }
  }
`;
