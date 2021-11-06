import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support</title>
        <meta name="description" content="Support pages for Tiny Owl Games" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Features />
      </PageWrapper>
    </>
  );
}
