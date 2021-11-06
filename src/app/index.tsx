/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { SupportPage } from './pages/Support';
import styled from 'styled-components';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

export function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Helmet titleTemplate="%s - Tiny Owl Games" defaultTitle="Tiny Owl Games">
        <meta name="description" content="" />
      </Helmet>
      <Wrapper>
        <Content>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/support'} component={SupportPage} />
        </Content>
        <Footer />
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
}

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  flex-direction: column;
  color: ${p => p.theme.text};
  display: flex;
  flex: 1;
  justify-content: space-between;
`;
