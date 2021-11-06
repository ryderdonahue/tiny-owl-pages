/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { SupportPage } from './pages/Support';
import styled from 'styled-components';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Tiny Owl Games"
        defaultTitle="Tiny Owl Games"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="" />
      </Helmet>
      <Wrapper>
        <Content>
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={HomePage}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/support'}
              component={SupportPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer>Copyright 2021 - Ryder Donahue</Footer>
      </Wrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}

const Footer = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.text};
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

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
