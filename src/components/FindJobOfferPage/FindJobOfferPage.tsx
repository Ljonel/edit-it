import React, { FC } from "react";

/* -- Components imports -- */
import { FindJobOfferPageWrapper } from "./FindJobOfferPageStyled";
import { FilterTail } from "./FindJobOfferPageComponents/FilterSection";
import { JobOfferList } from "./FindJobOfferPageComponents/JobOfferListAndMap";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const FindJobOfferPage: FC = ({ profile }: any) => {
  return (
    <FindJobOfferPageWrapper>
      <FilterTail />
      <JobOfferList />
    </FindJobOfferPageWrapper>
  );
};
