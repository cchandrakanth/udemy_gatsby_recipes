import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return <div className="recipes-list">
    {recipes.map((recipe, index) => {
      const {id, title, image, prepTime, cookTime} = recipe
      const pathToImage = getImage(image) //This is to avoid the no image or undefined. 
      //More details can be found in gatsby docs.
      const slugUrl = slugify(title, {lower: true}) //change the url from "Banana%20Pancakes" to "banana-pancakes"

      return <Link to={`/${slugUrl}`} className="recipe" key={index}>
        <GatsbyImage image={pathToImage} className="recipe-img" alt={title} />
        <h5>{title}</h5>
        <p>Prep: {prepTime}min | Cook: {cookTime}min</p>
      </Link>
    })

    }
  </div>
}

export default RecipesList
