import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Support</title>
        <meta name="description" content="Support pages for Tiny Owl Games" />
      </Helmet>
      <PageWrapper>
        <Features />
      </PageWrapper>
    </>
  );
}
