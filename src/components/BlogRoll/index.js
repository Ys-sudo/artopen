import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
      <div className='container columns' style={{margin:'auto'}}>
      {posts &&
        posts.slice(0,2)
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='article-wrapper'
            style={{marginRight:'1%',textAlign:'left'}}
            key={post.id}
          >
          <Link  to={post.fields.slug+'/'}>
          <img src={post.frontmatter.cover.publicURL} alt={post.frontmatter.title}  className='fimg' />
          </Link>
          <div className='blogpostroll' >
            <div className='tagline3'>
            <a className="categblog" style={{fontSize:'12px'}} href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(0,1)} </a>
            &nbsp;&nbsp;
            <a className="categblog" style={{fontSize:'12px'}} href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(1,2)} </a>
            </div>

            <p>
              <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>
              <br />
              <span> &bull; </span>
              <small><b>{post.frontmatter.date}</b></small>
              <br />

              <br />
              {post.excerpt.slice(0,150)+' ...'}
            </p>
            <p style={{textAlign:'right',marginBottom:'20px'}}>
              <br />
              <Link className='button-green' to={post.fields.slug+'/'}>
                Przeczytaj więcej &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/>
              </Link>

            </p>
          </div>


          </div>
        ))}
          </div>

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
          limit: 2,
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
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
