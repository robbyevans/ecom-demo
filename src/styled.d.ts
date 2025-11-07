import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bg: string;
    text: string;
    cardBg: string;
    border: string;
    buttonBg: string;
    buttonText: string;
  }
}
