import styled from "../../../theme/styled-components";

export const Container = styled.div`
  margin-right: 10px;
`;

export const Header = styled.table`
  display: flex;
  background-color: white;
  border: 0.5px solid #3823a8;
  padding: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
`;
export const THead = styled.thead`
  display: flex;
  flex: 1;
  padding-right: 10px;
`;
export const HeaderRow = styled.tr`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;

  input {
    width: 100%;
    border: none;

    ::placeholder {
      color: #000000;
      font-weight: 700;
    }
  }
`;

export const Content = styled.table`
  width: 100%;
`;
export const TBody = styled.tbody`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 650px;
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{display : none}
`;
export const ContentRow = styled.tr`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid #000000;

  :nth-of-type(even) td {
    background: #e6c9c9;
  }

  td {
    padding: 3px 0;

    a {
      text-decoration: none;
      color: #000000;
      margin: 0 5px;
    }
  }
`;
