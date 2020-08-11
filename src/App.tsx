import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Routes from './routes';

import AppProvider from './providers';

const App: React.FC = () => {
  return (

    <Router>
        <ThemeProvider theme={dark}>
            <AppProvider>
              <Routes />
            </AppProvider>

            <GlobalStyle />
        </ThemeProvider>
    </Router>

  );
}

export default App;
