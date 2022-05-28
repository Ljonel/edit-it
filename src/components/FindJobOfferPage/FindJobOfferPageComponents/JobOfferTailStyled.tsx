import styled from "styled-components";

export const JobOfferTailWrapper = styled.div`
    width: 95%;
    height: 10vh;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 10px auto;
    font-size: 12px;
    position: relative;

    .base-company-info-wrapper{
        min-width: 20%;
        height: 90%;
        margin: 0 10px;
    }
    .base-company-info-wrapper > p{
        margin: 0 0 10px;
    }
    .job-position{
        font-size: 1.25rem;
        font-weight: 500;
    }
    .company-data{
        font-size: 0.85rem;
        color: #787878;
        display: flex;
        align-items: center;
    }
    .location-icon{
        margin-left: 15px;
    }

    .salary-data{
        position: absolute;
        right: 20px;
        font-size: 1.2rem;
        color: #57d573;
        font-weight: 600;
    }
`;