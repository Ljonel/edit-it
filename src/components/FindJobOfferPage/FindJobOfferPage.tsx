import React, { FC } from "react";

/* -- Components imports -- */
import { FindJobOfferPageWrapper } from "./FindJobOfferPageStyled";
import { FilterTail } from './FindJobOfferPageComponents/FilterSection';
import { JobOfferList } from "./FindJobOfferPageComponents/JobOfferListAndMap";

export const FindJobOfferPage : FC = () =>{
    return(
        <FindJobOfferPageWrapper>
            <FilterTail/>
            <JobOfferList/>
        </FindJobOfferPageWrapper>
    );
};