import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class OfferRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <div>

    <div className='offert'>

      {posts

        .filter(post => post.node.frontmatter.templateKey === 'offer-page')
        .map(({ node: post }) => (
          <Link className='offer' key={post.id}
          style={{margin:'1%',textAlign:'left',marginBottom:'30px',
          border:'1px solid #23C495',borderRadius:'10px',padding:'10px'}}
          to={post.fields.slug+'/'}>
          <div>
          <div style={{textAlign:'center'}}>
          <img alt={post.frontmatter.title} src={post.frontmatter.icon.publicURL}
          style={{width:'35px',height:'35px',marginBottom:'5px'}} />
          </div>

          <div style={{textAlign:'left'}}>
              <h3 className='is-title' style={{textAlign:'center',marginBottom:'5px',fontSize:'13px',color:'#00d1b2'}} to={post.fields.slug+'/'}>
                <strong>{post.frontmatter.title}</strong>
              </h3>

              <p style={{color:'#333333',fontSize:'12px'}}>
                {post.frontmatter.desc}
              </p>
          </div>
          </div>
          </Link>
        ))}
    </div>
    </div>
  )
}
}
OfferRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query OfferRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "offer-page" } } }
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
                icon {
                  publicURL
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <OfferRoll data={data} count={count} />}
  />
)
