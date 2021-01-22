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
import ModalCall from '../components/ModalCall'

const OfferPage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, meta_title, meta_description, cover, date, tags, desc, subtitle, icon } } } } = props

  return (
    <Layout>
      <section className='full'>
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
        <div className=''>


              <OfferTemplate
                content={html}
                contentComponent={HTMLContent}
                cover={cover}
                meta_title={meta_title}
                meta_desc={meta_description}
                tags={tags}
                title={title}
                date={date}
                icon={icon}
                desc={desc}
                subtitle={subtitle}
              />

              <hr />

              <br />

              <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px',marginLeft:'20px'}}>
              <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz nasze realizacje&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className='button-green' style={{fontSize:'15px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
              </div>

              <br />
              <br />

        </div>
      </section>
      <ModalCall />
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
