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
import NewsCall from '../components/NewsCall'

const GalleryPage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, meta_title, meta_description, cover, date, tags, category, keywords } } } } = props

  return (
    <Layout>
      <section className=''>
        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_description}
          keywords={keywords}
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
        <div style={{marginLeft:'0px',padding:'0px'}}>


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
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
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
          <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
          <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='button-green' style={{fontSize:'15px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
          </div>
          <br />
          <br />



        </div>
      </section>
      <NewsCall />
      <br /><br />

      <h5 className='is-title' style={{fontSize:'30px',margin:'50px'}}> Pozostałe <b style={{color:'#00d1b2'}}>projekty</b>: </h5>
      <div style={{textAlign:'center',margin:'50px'}}>

        <PortfolioRoll2 />
        <br />
        <br />
        <a className='button-green' style={{fontSize:'18px'}} href='/portfolio/'> Wróć do portfolio &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        <br />
      </div>
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
        keywords
      }
    }
  }
`
