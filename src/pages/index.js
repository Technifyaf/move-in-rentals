import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/home/banner';
import Clients from 'sections/home/clients';
import FeaturedSpace from 'sections/home/featured-space';
import OurCustomer from 'sections/home/lanldord_value_prop';
import Gallery from 'sections/home/gallery';
import Pricing from 'sections/home/pricing';
import Blog from 'sections/home/blog';
import Subscription from 'sections/home/subscription';
import OurLandlord from 'sections/home/lanldord_value_prop';
import OurTenant from 'sections/home/tenant_value_prop';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Movein rentals" />
        <Banner />
        <OurLandlord/>
        <FeaturedSpace/>
        <OurTenant/>
      </Layout>
    </ThemeProvider>
  );
}

///  <Pricing />
// <Gallery />
///    <FeaturedSpace />      
//<OurCustomer />
//<Subscription />