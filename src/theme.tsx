import baseStyled, { ThemedStyledInterface } from "styled-components";

//default theme
const themeList = {
  mainColor: "#F8EFBA",
  secondColor: "#55E6C1",
  alternativeColor: "#FEA47F"
};

export type DefaultTheme = typeof themeList;

//set the function "Themestyling" which has basix styled + type declaration(type of themeList)
//everything I makes by styled-component like "const somethng = Themestyling.button`` "  also has type declaration of props.
export const Themestyling = baseStyled as ThemedStyledInterface<DefaultTheme>;

export default themeList;
