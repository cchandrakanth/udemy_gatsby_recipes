import React from "react"
import Layout from "../hoc/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <h1>recipes page</h1>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
