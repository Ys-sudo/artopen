import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import OfferCard from '../components/OfferCard'
import Layout from '../components/Layout'

const OfertaPage = (props) => {
  const { pageContext: { first, group, index, last } } = props

  const websiteSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
  }

  return (
    <Layout>
      <Helmet>
        <title>Oferta | ArtOpen</title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
      </Helmet>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns' style={{height:'200px',alignItems:'center'}}>
            <h1 className='title'>
              Oferta - Studio ArtOpen
            </h1>
            </div>
          </div>

        </div>
      </section>
      <div style={{marginLeft:'10%',marginRight:'10%', textAlign:'center'}}>
        <br></br>
        <br></br>
        <h2 className='subtitle'>
          Zakres naszych <b>działań</b>:
        </h2>
        <br></br>
      </div>



      <section className='section' style={{padding: '0px', margin:'0px'}}>
        <OfferCard posts={group} />
      </section>
    </Layout>
  )
}

export default OfertaPage
