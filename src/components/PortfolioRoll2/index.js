import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className='portfolio'>

        {posts

          .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
          .slice(1,3)
          .map(({ node: post }) => (
            <a  href={post.fields.slug+'/'}
            className={post.frontmatter.category + ' portfo' + ' twenty1'+' i350'}
            key={post.id}
            style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
            >

              <div className='pwrapper'>
                <span className='categ'>{post.frontmatter.category}</span>
                <br /> <br />
                <h6 style={{marginLeft:'50px',color:'white'}}>
                    <b>{post.frontmatter.title}</b>
                  <br />
                  <small>&bull; {post.frontmatter.date}</small>
                </h6>
              <div style={{textAlign:'right'}}>
                <span className='pspan'>
                <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                </span>
              </div>
              </div>

            </a>
          ))}
          {posts

            .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
            .slice(0,1)
            .map(({ node: post }) => (
              <a  href={post.fields.slug+'/'}
              className={post.frontmatter.category + ' portfo'+' forty8' + ' i350'}
              key={post.id}
              style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
              >

                <div className='pwrapper'>
                  <span className='categ'>{post.frontmatter.category}</span>
                  <br /> <br />
                  <h5 style={{marginLeft:'50px',color:'white'}}>
                      <b>{post.frontmatter.title}</b>
                    <br />
                    <small>&bull; {post.frontmatter.date}</small>
                  </h5>
                <div style={{textAlign:'right'}}>
                  <span className='pspan'>
                  <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                  </span>
                </div>
                </div>


              </a>
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
      query PortfolioRoll2Query {
        allMarkdownRemark(
          limit: 3,
          sort: { order: ASC, fields: [frontmatter___date] }
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
