import React from 'react'
import Layout from '../hoc/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import SEO from '../components/SEO'

const Tags = ({data:{allContentfulRecipes:{nodes:recipes}}}) => {
  const newTags = setupTags(recipes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map( (tag, index) => {
            const [text, value] = tag
            return <Link to={`/${text}`} key={index} className="tag">
              <h5>{text}</h5>
              <p>{value}</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags