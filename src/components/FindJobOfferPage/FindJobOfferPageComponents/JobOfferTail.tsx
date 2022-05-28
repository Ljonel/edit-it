import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

/* -- Components imports -- */
import { JobOfferTailWrapper } from "./JobOfferTailStyled";

/* -- IMG and Icons imports -- */
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddLocationIcon from '@mui/icons-material/AddLocation';

interface JobOfferData{
    logoIMG: StaticImageData;
    jobPosition: string;
    companyName: string;
    location: string;
    salary: number;
}

export const JobOfferTail : FC <JobOfferData> = (props) => {
    return(
        <JobOfferTailWrapper>
            <Image src={props.logoIMG} alt="Logo firmy"/>
            <div className="base-company-info-wrapper">
                <p className="job-position">{props.jobPosition}</p>
                <p className="company-data">
                    <ApartmentIcon fontSize="small"/>{props.companyName} 
                    <AddLocationIcon className="location-icon" fontSize="small"/>{props.location}</p>
            </div>
            <p className="salary-data">{props.salary} PLN</p>
        </JobOfferTailWrapper>
    );
};