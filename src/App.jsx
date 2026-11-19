import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import FeaturedShowcase from './components/featured/FeaturedShowcase';
import EnvironmentalTesting from './components/featured/EnvironmentalTesting';
import Hangar from './components/hangar/Hangar';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import CaseStudyPage from './pages/case-study/CaseStudyPage';
import { matchCaseStudy, useLinkInterception, useRoute } from './lib/router';
import { PORTRAIT } from './components/hero/heroContent';
import portrait from './images/hero/harshil-portrait.webp';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Keep anchored sections clear of the fixed navbar */
  section[id] {
    scroll-margin-top: calc(var(--nav-offset) + var(--nav-height) + 16px);
  }

  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: var(--color-paper);
    color: var(--color-ink);
  }

  ::selection {
    background: var(--color-amber);
    color: #111111;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: rgba(17, 17, 17, 0.25);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-amber); }
`;

const HomePage = () => (
  <>
    <Hero portraitSrc={portrait} portraitAlt={PORTRAIT.alt} />
    <EnvironmentalTesting />
    <FeaturedShowcase />
    <Hangar />
    <Experience />
    <Contact />
  </>
);

const App = () => {
  const { pathname } = useRoute();
  const caseStudySlug = matchCaseStudy(pathname);
  // in-page links (/#work …) and case study links are handled client-side
  useLinkInterception();

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {caseStudySlug ? <CaseStudyPage key={caseStudySlug} slug={caseStudySlug} /> : <HomePage />}
    </>
  );
};

export default App;
