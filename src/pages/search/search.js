import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';


export default function SearchPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Search" />
     
      </Layout>
    </ThemeProvider>
  );
}
