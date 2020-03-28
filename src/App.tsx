import React, { Component } from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  css,
  ThemeProvider
} from "styled-components";
import themeList, { Themestyling } from "./theme";

//const name = createGlobalStyle`` = what I want to set entirely which is like body
const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

interface ButtonType {
  danger?: {};
}

/* const Button = ({ danger }: ButtonType) => {
  return (
    <button
      className={danger ? "button button-danger" : "button button-success"}
    >
      Hello
    </button>
  );
};
 */
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeList}>
        <Container>
          <GlobalStyle />
          <Button>Good job</Button>
          <Button danger>There is gonna be danger</Button>
          <Anchor href="https://www.dailycardinal.com/article/2020/03/report-jesus-definitely-did-cocaine">
            Jesus
          </Anchor>
          <Input />

          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}
const Basic = styled.div`
  background-color: white;
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

//styled.button`` = create "button" element with style inside ``
//& = it is like, if the component has class nmae "E", &active means ".E:active" in CSS
//all components in react has props naturally. I can utilize it.
const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  border: none;
  &:active,
  &:focus {
    outline: 0;
  }

  background-color: ${({ danger }: ButtonType) =>
    danger ? "#e74c3c" : "#2ecc71"};

  ${({ danger }: ButtonType) => {
    if (danger) {
      return css`
        animation: ${rotationAni} 2s linear infinite;
      `;
    }
  }}
`;

//withComponent("") = what I want to make attching something inside the bracket
// the code below ask for the button with HTML reference
// extend`` = on top of Button CSS, I would like to add something more
const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

//mixin = I can reuse the basic default CSS like interface
const recycleCSS = css`
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  min-width: 120px;
  font-weight: 600;
`;

//attrs({ what I want to change about attributes  })`CSS things`
const Input = styled.input.attrs({
  autoFocus: true,
  placeholder: "fill in the blank",
  required: true
})`
  border-radius: 5px;
  ${recycleCSS};
`;

//How to utilize theme (arrangement of specific CSS)

const ThemeButton = Themestyling.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.mainColor};
`;

//div with white color, ThemeButton inside div
const Form = () => (
  <Basic>
    <ThemeButton>color in space</ThemeButton>
  </Basic>
);

//set the keyframe animation
const rotationAni = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to{
    transform: rotate(360deg);
  }
`;

export default App;
