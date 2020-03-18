import * as React from 'react';
import { store } from '..';
import styled from '../theme/styled-components';
import { device } from '../theme';



interface HeaderProps {
  isAuthPage?: Boolean
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ isAuthPage, children }) => {
  return (
    <>
      <Logo className="ittyniLogo">i<span style={{ color: 'red' }}>TT</span>yni</Logo>
      <SearchBox >
        <Search />
      </SearchBox>
      <UserNav>
        {/* <LoginIcon/> */}
        {children}
      </UserNav>
    </>
  );
};

export default Header;


// header container style


const UserNav = styled.div`
  display : flex;
  flex: 3;
  padding: 20px 50px 0 0px;
  text-align: right;

  ${device.mobile`
    display : none;
  `}
`;
const Logo = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const SearchBox = styled.div.attrs({className : "searchBox"})`
  flex : 5;
  padding : 15px 0 0;
`;
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
const Search = () => {
  return (
    <div style={{ position: "relative", display : "flex" }}>
      <SearchIcon className="fa fa-search font-green"></SearchIcon>
      <SearchInput type="text"
        placeholder="Chercher Une ou Plusieurs Analyses"
        onChange={e=> store.dispatch({type : "LABTEST_SEARCH_FRENCH_NAME_MNEMONIC", query : e.target.value})}
      />
    </div>
  )
}

const LoginIcon = styled((props : { className? : string}) => (
  <svg
      className={props.className}
      version="1.1"
      viewBox="0 0 475.2 475.2"
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      height='20px'
      width='20px'
  >
      <path  
        d="M256,0c-76.544,0.094-138.573,62.122-138.667,138.667V224c0,5.891,4.776,10.667,10.667,10.667h42.667
	         c5.891,0,10.667-4.776,10.667-10.667v-85.333C181.333,97.429,214.763,64,256,64s74.667,33.429,74.667,74.667V224
	         c0,5.891,4.776,10.667,10.667,10.667H384c5.891,0,10.667-4.776,10.667-10.667v-85.333C394.573,62.122,332.544,0.094,256,0z"/>
      <path  
        d="M128,213.333h256c29.455,0,53.333,23.878,53.333,53.333v192C437.333,488.122,413.455,512,384,512H128
	         c-29.455,0-53.333-23.878-53.333-53.333v-192C74.667,237.211,98.545,213.333,128,213.333z"/>
      <path style={{fill : "#ffffff"}}
        d="M309.333,330.667c0.124-29.455-23.653-53.434-53.108-53.558
	         c-29.455-0.124-53.434,23.653-53.558,53.108c-0.086,20.36,11.427,38.992,29.674,48.023l-8.235,57.6
	         c-0.825,5.833,3.235,11.23,9.068,12.055c0.494,0.07,0.993,0.105,1.492,0.105h42.667c5.891,0.06,10.715-4.667,10.774-10.558
	         c0.005-0.543-0.03-1.086-0.108-1.623l-8.235-57.6C297.788,369.199,309.216,350.82,309.333,330.667z"/>
  </svg>
))
.attrs({className : 'login-icon'})`
  padding : 0 5px;
  width : 25px;
  height : 25px;
  path {
      fill : ${({theme}) => theme.color.fourthColor}
  }
`