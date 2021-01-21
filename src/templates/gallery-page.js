import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import config from '../../config'
import { HTMLContent } from '../components/Content'
import GalleryTemplate from '../components/GalleryTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'
import ModalCall from '../components/ModalCall'
import PortfolioRoll2 from '../components/PortfolioRoll2'

const GalleryPage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, meta_title, meta_description, cover, date, tags, category } } } } = props

  return (
    <Layout>
      <section className='section'>
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
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>

              <GalleryTemplate
                content={html}
                contentComponent={HTMLContent}
                cover={cover}
                meta_title={meta_title}
                meta_desc={meta_description}
                tags={tags}
                title={title}
                category={category}
                date={date}
              />
              <Share
                title={title}
                slug={slug}
                excerpt={meta_description}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />
              <hr />
              <Disqus
                title={title}
                slug={slug}
                siteUrl={config.siteUrl}
                disqusShortname={config.disqusShortname}
              />
            </div>

          </div>
          <br />
          <div style={{textAlign:'center',marginBottom:'30px'}}>
          <a className='button-green' style={{fontSize:'18px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='button-green' style={{fontSize:'18px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='button-green' style={{fontSize:'18px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          </div>
          <br />
          <br />
          <h5 className='is-title' style={{fontSize:'30px'}}> Pozostałe <b style={{color:'#00d1b2'}}>projekty</b>: </h5>
          <PortfolioRoll2 />
          <div style={{textAlign:'center',margin:'50px'}}>
          <a className='button-green' style={{fontSize:'18px'}} href='/portfolio/'> Wróć do portfolio &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          </div>
        </div>
      </section>
      <ModalCall />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default GalleryPage

export const pageQuery = graphql`
  query GalleryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "DD. MM. YYYY")
        title
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
        category
      }
    }
  }
`
