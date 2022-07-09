import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import TagsList from './TagsList'
import RecipesList from './RecipesList'

const query = graphql`
  {
    recipes: allContentfulRecipes(sort: {fields: title, order: ASC}) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.recipes.nodes
  return (
    <section className='recipes-container'>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
