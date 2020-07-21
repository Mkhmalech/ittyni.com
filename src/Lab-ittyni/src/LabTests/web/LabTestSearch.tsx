import * as React from 'react'
import { Labtests } from '../controller/labtests';
import { SearchIcon, SearchInput } from "../../common/Search"

const labtest = new Labtests()

export const LabTestSearch = () => {
    return (
      <div style={{ position: "relative", display : "flex" }}>
        <SearchIcon className="fa fa-search font-green"></SearchIcon>
        <SearchInput type="text"
          placeholder="Chercher Une ou Plusieurs Analyses"
          onChange={e=>labtest.labTestsSearch(e.target.value)}
        />
      </div>
    )
  }
 