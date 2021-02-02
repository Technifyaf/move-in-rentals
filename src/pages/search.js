import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Searchresults from 'sections/search/results';


export default function SearchPage() {
  return (
    <ThemeProvider theme={theme}>
     
        <SEO title="Search results" />
        <Searchresults/>
     
  
    </ThemeProvider>
  );
}
