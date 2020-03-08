import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Reviews from "../components/section-reviews";
import Main from "../components/section-main";
import Benefits from "../components/section-benefits";
import Features from "../components/section-features";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <Hero/>
    <Reviews/>
    <Main/>
    <Benefits/>
    <Features/>
  </Layout>
)

export default IndexPage;
