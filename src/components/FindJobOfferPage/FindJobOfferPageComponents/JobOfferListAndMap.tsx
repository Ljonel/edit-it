import React, { FC } from "react";

/* -- Components imports -- */
import { JobOfferListWrapper } from "./JobOfferListAndMapStyled";
import { JobOfferTail } from './JobOfferTail';

/* -- IMG and Icons imports -- */
import Logo1 from "../../../imgs/ExampleLogos/Logo1.png"
import Logo2 from "../../../imgs/ExampleLogos/Logo2.png"
import Logo3 from "../../../imgs/ExampleLogos/Logo3.png"

/*Tymczasowa tablica obiektów zamiast bazy danych - BEGIN*/

let offers = [
    {id: 0, logoIMG: Logo1, jobPosition: "Operator kamery", companyName: "Film S.A", location: "Kraków", salary: 3500},
    {id: 1, logoIMG: Logo3, jobPosition: "Montażysta filmowy", companyName: "CArt", location: "Wrocław", salary: 4000},
    {id: 2, logoIMG: Logo3, jobPosition: "Grafik komputerowy", companyName: "CArt", location: "Kraków", salary: 3800},
    {id: 3, logoIMG: Logo2, jobPosition: "Reżyser", companyName: "Vision", location: "Kraków", salary: 3700},
    {id: 4, logoIMG: Logo1, jobPosition: "Operator kamery", companyName: "Film S.A", location: "Kraków", salary: 3600},
    {id: 5, logoIMG: Logo2, jobPosition: "Operator kamery", companyName: "Vision", location: "Warszawa", salary: 6700},
    {id: 6, logoIMG: Logo2, jobPosition: "Scenażysta", companyName: "Vision", location: "Warszawa", salary: 5500},
    {id: 7, logoIMG: Logo1, jobPosition: "Operator kamery", companyName: "Film S.A", location: "Warszawa", salary: 3400},
    {id: 8, logoIMG: Logo3, jobPosition: "Montażysta filmowy", companyName: "CArt", location: "Kraków", salary: 3400},
    {id: 9, logoIMG: Logo1, jobPosition: "Operator kamery", companyName: "Film S.A", location: "Gdańsk", salary: 3500},
    {id: 10, logoIMG: Logo3, jobPosition: "Montażysta filmowy", companyName: "CArt", location: "Kraków", salary: 3200},
    {id: 11, logoIMG: Logo2, jobPosition: "Operator kamery", companyName: "Vision", location: "Łódź", salary: 3500},
    {id: 12, logoIMG: Logo1, jobPosition: "Operator kamery", companyName: "Film S.A", location: "Kraków", salary: 3700}
];

/*Tymczasowa tablica obiektów zamiast bazy danych - END*/

export const JobOfferList : FC = () => {
    return(
        <JobOfferListWrapper>
            <div className="list-of-job-offers-wrapper">
                <div className="list-of-job-offers">
                    {offers.map(data => 
                    <JobOfferTail 
                        key={data.id} 
                        logoIMG={data.logoIMG} 
                        jobPosition={data.jobPosition} 
                        companyName={data.companyName} 
                        location={data.location} 
                        salary={data.salary}/>
                    )}
                </div>
            </div>
            <iframe width="100%" height="500" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Chrzan%C3%B3w+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </JobOfferListWrapper>
    );
};