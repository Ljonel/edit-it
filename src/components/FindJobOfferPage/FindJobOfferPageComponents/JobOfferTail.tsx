import React, { FC } from "react";

/* -- Components imports -- */
import { JobOfferTailWrapper } from "./JobOfferTailStyled";

interface JobOfferData{
    id: number;
    name: string;
}

export const JobOfferTail : FC<JobOfferData> = (props) => {
    return(
        <JobOfferTailWrapper>
            <p>{props.id+1}.</p>
            <p>{props.name}</p>
        </JobOfferTailWrapper>
    );
};