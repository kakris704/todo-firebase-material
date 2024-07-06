import { createTheme, useMediaQuery } from '@mui/material'
import '../index.css';
import React from 'react'

// FontFamilyの設定
const fontFamily = [
  'Noto Sans JP'
].join(',');

// テーマの作成　
const theme = createTheme({
  typography: {
    fontFamily: fontFamily,
  },
  palette: {
    mode: 'light' // ライトテーマ
  }
});

export default theme