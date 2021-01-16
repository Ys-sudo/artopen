import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import OfferCard from '../components/OfferCard'
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

const OfertaPage = (props) => {
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
      <Helmet>
        <title>Oferta | ArtOpen</title>
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
                Oferta
              </h1>
              <h2 className='subtitle'>
                Poznaj nasze kwalifikacje.
              </h2>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div style={{textAlign:'center',marginTop:'50px'}}>
      <br></br>

      <h2 className='title'>
       Zakres naszych <b>działań</b>:
      </h2>
      <h3 className='subtitle'>Zapraszamy do zapoznania się z oferowanymi przez nas usługami.</h3>

      </div>
      <section className='section' style={{padding: '0px', margin:'0px',marginTop:'50px'}}>
        <OfferCard posts={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='<' />
            <PaginationLink test={last} url={nextUrl} text='>' />
          </div>
        </section>
        <ContactCall/>
      </section>
    </Layout>
  )
}

export default OfertaPage
