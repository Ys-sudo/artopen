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
        <title>Portfolio 🌱 Art Open Sp. z o.o. | Agencja reklamowa </title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
        <meta name='keywords' content="Agencja reklamowa, ekologia, Art Open," />
      </Helmet>
      <section className='hero is-primary is-bold' style={{minHeight:'75%',backgroundImage:'url(/img/portfolio.svg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'top center',backgroundAttachment: `fixed`}}>
        <div className='hero-body'>
        <div className='container section'>
          <div className='columns section'>
            <div>
              <h1 className='title' style={{fontSize:'50px',marginTop:'50px'}}>
                Portfolio
              </h1>
              <h2 className='subtitle'>
                Zapraszamy do zapoznania się z naszymi realizacjami.
              </h2>
            </div>
          </div>
        </div>
        </div>
      </section>

      <br></br>
      <br></br>

      <div style={{padding: '0px',marginBottom:'0px',textAlign:'center'}}>
        <h3 className='title'> Poznaj szczegóły naszej pracy, </h3>

        <h4 className='subtitle'> wybrane realizacje według kategori. </h4>
      </div>



      <section className='section' style={{padding: '0px', marginTop:'2%',marginLeft:'5%',marginRight:'3%'}}>
        <GalleryCard posts={group} cats={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='<' />
            <PaginationLink test={last} url={nextUrl} text='>' />
          </div>
        </section>

      </section>
      <br />
      <div className='bottomUi' style={{textAlign:'center',marginBottom:'60px'}}>
      <Link className='button-green' style={{fontSize:'15px'}} to='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='button-green' style={{fontSize:'15px'}} to='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link className='button-green' style={{fontSize:'15px'}} to='/o-nas/'> Poznaj nas bliżej&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
      </div>

      <ContactCall/>
    </Layout>
  )
}

export default PortfolioPage
