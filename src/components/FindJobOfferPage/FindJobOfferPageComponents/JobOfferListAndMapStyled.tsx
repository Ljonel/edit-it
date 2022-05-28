import styled from "styled-components";

export const JobOfferListWrapper = styled.div`
    width: 95vw;
    height: 75vh;
    margin: 2vh auto;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    iframe{
        width: 50%;
        height: 100%;
        border: none;
    }

    .list-of-job-offers-wrapper{
        width: 50%;
        min-width: 450px;
        height: 100%;
        padding: 15px 5px 15px 0;
    }
    .list-of-job-offers{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        
        ::-webkit-scrollbar {
            width: 15px;
        }
        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px #f5f5f5; 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            background: #c1c1c1; 
            border-radius: 10px;
        }
    }
`;