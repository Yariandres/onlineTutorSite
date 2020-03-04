import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Reviews from "../components/reviews";
import Main from "../components/section-main";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <Hero/>
    <Reviews/>
    <Main/>
  </Layout>
)

export default IndexPage;
