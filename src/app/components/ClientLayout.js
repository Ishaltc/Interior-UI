// components/ClientLayout.js
'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './header';

const theme = createTheme({
  // Your theme configuration
});

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
    </ThemeProvider>
  );
}