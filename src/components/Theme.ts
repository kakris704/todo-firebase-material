import { createTheme, useMediaQuery } from '@mui/material'
import '../index.css';
import React from 'react'

const fontFamily = [
  'Noto Sans JP'
].join(',');

const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    mode: 'light'
  }
});

export default theme