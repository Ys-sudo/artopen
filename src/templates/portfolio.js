import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import GalleryCard from '../components/GalleryCard'
import Layout from '../components/Layout'

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
      <Helmet>
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


                <h1 className='title' style={{fontSize:'50px'}}>
                  Portfolio
                </h1>


          </div>
        </div>

        </div>
      </section>

      <br></br>
      <br></br>

      <div className="portfolio section" style={{padding: '0px', textAlign:'center', marginLeft:'10%',marginRight:'10%'}}>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>projekty graficzne</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>strony internetowe</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>identyfikacje wizualne</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>kalendarze książkowe</a>
      </div>


      <div className=" port-nav portfo">
        <a href="#" className='button-green'>kalendarze drukowane</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>gadżety reklamowe</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>wydruki reklamowe</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>reklamy outdoor</a>
      </div>


      <div className=" port-nav portfo">
        <a href="#" className='button-green'>fotografia marketingowa</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>systemy wystawiennicze</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>filmy reklamowe</a>
      </div>

      <div className=" port-nav portfo">
        <a href="#" className='button-green'>opakowania</a>
      </div>

      </div>
      <section className='section' style={{padding: '0px', marginLeft:'10%',marginRight:'10%'}}>
        <GalleryCard posts={group} cats={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='<' />
            <PaginationLink test={last} url={nextUrl} text='>' />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default PortfolioPage
