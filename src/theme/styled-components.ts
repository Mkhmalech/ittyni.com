import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = (styledComponents as any) as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  defaultColor: string,
  primaryColor: string,
  secondaryColor : string,
  thirdColor : string,
  fourthColor : string,
  breakpoints: {
    small: string,
    medium: string,
    large: string,
  }
}

export default styled;

export { 
  css, 
  createGlobalStyle, 
  keyframes, 
  ThemeProvider 
};