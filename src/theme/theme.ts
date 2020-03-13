import { IThemeInterface, createGlobalStyle } from ".";

export const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }
`

export const theme : IThemeInterface= {
    defaultColor: "#ffffff",
    primaryColor: "#e9e9eb",
    secondaryColor : "#2a2c39",
    thirdColor : "#3a3f48",
    fourthColor : "#423030",
    breakpoints: {
        small: '50rem',
        medium: '85rem',
        large: '105rem',
    }    
};