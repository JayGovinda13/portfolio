// src/App.js
import React from 'react';
import { ChakraProvider, CSSReset, ThemeProvider } from '@chakra-ui/react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './theme';
import Header from './components/header/Header';
import AboutMe from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const cache = createCache({ key: 'css', prepend: true });

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CacheProvider value={cache}>
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
          </CacheProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
