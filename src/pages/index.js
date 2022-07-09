import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../hoc/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from '../components/SEO'

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" description="This is Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simple recipes</h1>
              <h3>no fluff, just recipes</h3>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
