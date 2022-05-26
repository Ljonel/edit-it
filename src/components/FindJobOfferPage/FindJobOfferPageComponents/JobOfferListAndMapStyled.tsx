import styled from "styled-components";

export const JobOfferListWrapper = styled.div`
    width: 95vw;
    height: 75vh;
    margin: 2vh auto;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;

    iframe{
        width: 50%;
        height: 100%;
        border: none;
    }

    .list-of-job-offers{
        width: 50%;
        height: 100%;
        padding: 10px;
        overflow-y: scroll;
    }
`;