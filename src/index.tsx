import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Index from './components/app/Index';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Register from './components/register/Register'
import Login from './components/login/Login';
import Product from './components/auction/Auction';
import AddProduct from './components/addProduct/addProduct';
import { CssBaseline } from '@mui/material';
import Pago from "./components/pago/Pago";
import MyAuctions from './components/auction/MyAuctions';
import MyAuction from './components/auction/MyAuction';
import MyPujas from './components/auction/MyPujas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export function useTitle(title: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  })
}

// Incrementales de 4
const theme = createTheme({
  palette: {
    primary: {
      main: "#880E0D",
    },
    secondary: {
      main: "#000000"
    },
    background: {
      default: "#F7F7F7"
    }
  },
  typography: {
    allVariants: {
      color: "black",
      letterSpacing: 1
    },
    fontFamily: [
      'Roboto'
    ].join(','),
    h1: {
      fontWeight: "bold",
      fontSize: 32,
    },
    h2: {
      fontWeight: "bold",
      fontSize: 24,
    },
    h3: {
      fontWeight: "bold",
      fontSize: 20,
    },
    body1: {
      fontSize: 16
    },
    body2: { // LINKS
      fontSize: 12,
      fontStyle: "italic",
      textDecoration: "none"
    },
    button: {
      fontWeight: "bold",
      fontSize: 20,
      textTransform: "none"
    }
  }
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iniciarSesion" element={<Login />} />
          <Route path="/registrar" element={<Register />} />
          <Route path="/crearProducto" element={<AddProduct />} />
          <Route path="/misSubastas" element={<MyAuctions />} />
          <Route path="/misPujas" element={<MyPujas />} />
          <Route path="/producto" element={<Product />} />
          <Route path="/miProducto" element={<MyAuction />} />
          <Route path="/pago" element={<Pago />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
