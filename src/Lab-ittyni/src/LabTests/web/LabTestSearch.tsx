import * as React from 'react'
import styled from "../../../../theme/styled-components";
import { Labtests } from '../controller/labtests';

const labtest = new Labtests('token')

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
  const SearchIcon = styled.i`
  left: auto;
  right: 15px;
  float: right;
  position: absolute;
  margin: 7px 2px 4px 10px;
  z-index: 3;
  width: 16px;
  font-size: 25px;
  text-align: center;
`;
const SearchInput = styled.input`
    padding-right: 33px;
    padding-left: 12px;
    padding-bottom: 10px;
    padding-top: 10px;
    width: 100%;

    @media (max-width: 768px) {
        width : 100% !important;
    }
`;