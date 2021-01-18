import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='container columns'>
        {posts &&
          posts.slice(0,2)
          .filter(post => post.node.frontmatter.templateKey === 'article-page')
          .map(({ node: post }) => (
            <div
              className='content'
              style={{marginBottom:'3%',margin:'10px', border:'2px solid #f5f5f5', borderRadius:'15px', padding: '2em 4em' }}
              key={post.id}
            >
            <img src={post.frontmatter.cover.publicURL}  style={{width:'70%',marginRight:'5%',borderRadius:'20px',border:'solid 1px #00d1b2'}} />
            <div>
              <p>
                <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                  {post.frontmatter.title}
                </Link>
                <br />
                <span> &bull; </span>
                <small><b>{post.frontmatter.date}</b></small>
                <br />

                <br />
                {post.excerpt}
              </p>
              <p style={{textAlign:'right'}}>
                <br />
                <Link className='button-green' to={post.fields.slug+'/'}>
                  Przeczytaj więcej →
                </Link>
              </p>
            </div>
            </div>
          ))}
      </div>
  )
}
}
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "article-page" } } }
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
                cover {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
