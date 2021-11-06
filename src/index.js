import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthProvider from './contexts/authContext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(167, 98%, 19%)',
    },
    secondary: {
      main: 'hsl(23, 100%, 50%)',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
        <ToastContainer closeButton={true} position="top-center" />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

