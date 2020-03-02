import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Reviews from "../components/reviews"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <Hero/>
    <Reviews/>
  </Layout>
)

export default IndexPage
