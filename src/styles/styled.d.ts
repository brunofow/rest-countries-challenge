import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      input: string;
      elements: string;

      background: string;
      text: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }

  export interface CustomTheme {
    title: string;
    colors: {
      elements: string;

      background: string;
      text: string;
    }
  }
}
