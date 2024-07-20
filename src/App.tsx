import React from 'react';
import './App.css';
import Main from './components/Main';
import { ThemeProvider } from '@emotion/react';
import { useAuthState } from 'react-firebase-hooks/auth'
import theme from './components/Theme';
import { auth } from './firebase';
import SignIn from './components/todo/SignIn';

function App() {
  const [user] = useAuthState(auth);
  return (
    <ThemeProvider theme={theme}>
      {user ? <Main /> : <SignIn />}
    </ThemeProvider>
  );
}

export default App;
