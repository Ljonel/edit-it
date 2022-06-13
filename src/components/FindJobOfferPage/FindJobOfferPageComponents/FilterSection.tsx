import React, { FC } from "react";

/* -- Components imports -- */
import { FilterTailWrapper } from "./FilterSectionStyled";

/* -- IMG and Icons imports -- */
import SearchIcon from "@mui/icons-material/Search";

export const FilterTail: FC = () => {
  return (
    <FilterTailWrapper>
      <span className="search-input-wrapper">
        <SearchIcon />
        <input type="text" placeholder="Szukaj" />
      </span>
      <select>
        <option>Kraków</option>
        <option>Warszawa</option>
        <option>Wrocław</option>
        <option>Sopot</option>
        <option>Gdynia</option>
      </select>
    </FilterTailWrapper>
  );
};
