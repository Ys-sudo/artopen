import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const TagRoute = (props) => {
  const { data: { allMarkdownRemark: { edges: posts, totalCount }, site: { siteMetadata: { title } } }, pageContext: { tag } } = props

  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug+'/'}>
        <p className='button-green' style={{fontSize:'20px'}}>{post.node.frontmatter.title}</p>
      </Link>
    </li>
  ))

  const tagHeader = `${totalCount} wpis${
    totalCount === 1 ? '' : 'ów'
  } zawieraj${
    totalCount === 1 ? 'ący' : 'ących'
  } tag: “${tag}”`

  return (
    <Layout>
      <section className='section'>
        <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }} title={`${tag} | ${title}`} />
        <div className='container content'>
          <div className='columns'>
            <div
              className='column is-10 is-offset-1'
              style={{ marginBottom: '6rem' }}
            >

              <h1 className='title is-size-3 is-bold-light'>{tagHeader}</h1>
              
              <br />
              <ul className='taglist'>{postLinks}</ul>
              <p>
                <Link className='button-green' to='/tagi/'>Przejrzyj wszystkie tagi</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
