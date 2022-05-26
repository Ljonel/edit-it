import styled from "styled-components";

export const FilterTailWrapper = styled.div`
    width: 90vw;
    padding: 0.5rem 4rem;
    display: flex;
    background-color: #ffffff;
    margin: 15px auto 0;
    border-radius: 10px; 
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);

    .search-input-wrapper{
        width: 25%;
        margin-right: 20px;
        background-color: #e9e9e9;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        input{
            width: 80%;
            height: 35px;
            padding-left: 5px;
            outline: none;
            border: none;
            background-color: #e9e9e9;
        }
    }

    select{
        width: 18%;
        height: 35px;
        border: 1px solid #bcbcbc;
        padding: 0 5px;
        outline: none;
        border-radius: 20px;
        margin-right: 20px;
    }
`;