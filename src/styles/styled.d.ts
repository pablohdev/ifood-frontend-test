import 'styled-components';

declare module 'styled-components'{

    export interface DefaultTheme{

        colors: {
          background: string,
          black: string,
          white: string,
          blue: string,
          text: string,
          lightBlue: string,
          secondary: string,
        },
        transition: string,
    }
}
