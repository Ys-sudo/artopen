import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import config from '../../config'
import { HTMLContent } from '../components/Content'
import OfferTemplate from '../components/OfferTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'

const OfferPage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, meta_title, meta_description, cover, date, tags, desc, subtitle, icon } } } } = props

  return (
    <Layout>

        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_description}
          cover={cover.publicURL}
          slug={slug}
          date={date}
          siteTitleAlt={config.siteTitleAlt}
          userName={config.userName}
          siteTitle={config.siteTitle}
          siteUrl={config.siteUrl}
          siteFBAppID={config.siteFBAppID}
          userTwitter={config.userTwitter}
          pathPrefix={config.pathPrefix}
        />


              <OfferTemplate
                content={html}
                contentComponent={HTMLContent}
                cover={cover}
                meta_title={meta_title}
                meta_desc={meta_description}
                tags={tags}
                title={title}
                desc={desc}
                subtitle={subtitle}
                icon={icon}
              />
              <Share
                title={title}
                slug={slug}
                excerpt={meta_description}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />
              <hr />
              <div style={{marginRight:'10%',marginLeft:'10%'}}>
              <Disqus
                title={title}
                slug={slug}
                siteUrl={config.siteUrl}
                disqusShortname={config.disqusShortname}
              />
              <br></br>
              </div>


    </Layout>
  )
}

OfferPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default OfferPage

export const pageQuery = graphql`
  query OfferByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "DD. MM. YYYY")
        title
        icon {
            childImageSharp {
              fluid(maxWidth: 500, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
            }
            publicURL
        }
        cover {
            childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
            publicURL
        }
        meta_title
        meta_description
        tags
        desc
        subtitle

      }
    }
  }
`
