import * as React from 'react';
import { SearchIcon, SearchInput } from "../../common/Search"

export const LaboSearch = () => {

    return (
        <div style={{ position: "relative", display: "flex" }}>
            <SearchIcon className="fa fa-search font-green"></SearchIcon>
            <SearchInput type="text"
                placeholder="Chercher Une ou Plusieurs Laboratoires"
                // onChange={e => labtest.labTestsSearch(e.target.value)}
            />
        </div>
    )
}