import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import GalleryCard from '../components/GalleryCard'
import Layout from '../components/Layout'
import ContactCall from '../components/ContactCall'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/portfolio/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

const PortfolioPage = (props) => {
  const { pageContext: { first, group, index, last } } = props
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString() + '/'

  const websiteSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
  }

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
        <title>Portfolio | ArtOpen</title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
        <div className='container section'>
          <div className='columns section'>
            <div>
              <h1 className='title' style={{fontSize:'50px'}}>
                Portfolio
              </h1>
              <h2 className='subtitle'>
                Zapraszamy do zapoznania się z naszymi realizacjami
              </h2>
            </div>
          </div>


        </div>

        </div>
      </section>

      <br></br>
      <br></br>

      <div style={{padding: '0px', marginLeft:'10%',marginRight:'10%',marginBottom:'50px'}}>
        <h3 className='title'> Poznaj szczegóły naszej pracy: </h3>

        <h4 className='subtitle'> Wybrane realizacje według kategori: </h4>
      </div>



      <section className='section' style={{padding: '0px', marginTop:'5%',marginLeft:'5%',marginRight:'3%'}}>
        <GalleryCard posts={group} cats={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='<' />
            <PaginationLink test={last} url={nextUrl} text='>' />
          </div>
        </section>

      </section>
      <ContactCall/>
    </Layout>
  )
}

export default PortfolioPage
