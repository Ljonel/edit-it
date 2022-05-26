import React, { FC } from "react";

/* -- Components imports -- */
import { JobOfferListWrapper } from "./JobOfferListAndMapStyled";
import { JobOfferTail } from './JobOfferTail';

/*Tymczasowa tablica obiektów zamiast bazy danych - BEGIN*/

let offers = [
    {id: 0, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 1, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 2, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 3, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 4, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 5, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 6, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 7, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 8, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 9, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 10, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 11, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"},
    {id: 12, text: "TU BEDZIE OFERTA ALE DZISIAJ NIE ZDĄŻE TEGO ZROBIĆ BO SPANKO MAM XD"}
];

/*Tymczasowa tablica obiektów zamiast bazy danych - END*/

export const JobOfferList : FC = () => {
    return(
        <JobOfferListWrapper>
            <div className="list-of-job-offers">
                {offers.map(data => <JobOfferTail id={data.id} name={data.text} key={data.id}/>)}
            </div>
            <iframe width="100%" height="500" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Chrzan%C3%B3w+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </JobOfferListWrapper>
    );
};