import React from 'react';
import './App.css';
import Main from './components/Main';
import { ThemeProvider } from '@emotion/react';
import theme from './components/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
