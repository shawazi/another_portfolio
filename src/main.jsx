import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1f264e',
      light: '#5167d8',
      dark: '#171731',
    },
    secondary: {
      main: '#2f8a80',
      dark: '#06231f',
    },
    text: {
      primary: '#bdbdbd',
      secondary: '#b0bec5',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
