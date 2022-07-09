//We need to restart the server everytime we change this file.
// Below Function name is important

const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  const templatePath = path.resolve("src/templates/tag-template.js")

  result.data.allContentfulRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
        const tagSlug = slugify(tag, { lower: true})
      createPage({
        path: `/${tagSlug}`,
        component: templatePath,
        context: {
          tag: tag,
        },
      })
    })
  })
}