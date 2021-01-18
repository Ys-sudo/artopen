import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='portfolio section'>
        {posts &&
          posts.slice(0,8)
          .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
          .map(({ node: post }) => (
            <div
              className={post.frontmatter.category + ' portfo'}
              style={{ margin:'20px', width:'25%'  }}
              key={post.id}
            >
            <Link className='has-text-primary' to={post.fields.slug+'/'}>
            <img src={post.frontmatter.cover.publicURL} width='100%' style={{borderRadius:'10px'}} />
              <p>

                  {post.frontmatter.title}

                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <h6>{post.frontmatter.category}</h6>
              <p>
                <br />
                <br />

              </p>
              </Link>
            </div>
          ))}
      </div>
  )
}
}
PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "gallery-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "DD. MM. YYYY")
                desc
                category
                cover {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
)
