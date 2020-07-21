import styled from "../../../theme/styled-components";

export const SearchIcon = styled.i`
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
export const SearchInput = styled.input`
  padding-right: 33px;
  padding-left: 12px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;

  @media (max-width: 768px) {
      width : 100% !important;
  }
`;