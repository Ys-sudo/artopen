import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import PostCard from '../components/PostCard'
import ContactCall from '../components/ContactCall'
import Layout from '../components/Layout'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className='button is-rounded'>
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

const BlogPage = (props) => {
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
        <title>Blog | ArtOpen</title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
        <meta name='keywords' content="Agencja reklamowa, ekologia, Art Open," />
      </Helmet>
      <section className='hero is-primary is-bold' style={{minHeight:'75%',backgroundImage:'url(/img/blog.svg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'top',backgroundAttachment: `fixed`}}>
        <div className='hero-body'>
        <div className='container section'>
          <div className='columns section'>
            <div>
              <h1 className='title' style={{fontSize:'50px',marginTop:'50px'}}>
                Blog
              </h1>
              <h2 className='subtitle'>
                Zapraszamy do lektury.
              </h2>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div style={{textAlign:'center',marginTop:'50px'}}>
      <h2 className='title'> Witaj na blogu studia Art Open.</h2>
      <h3 className='subtitle'> Piszemy tutaj artykuły z zakresu aktualności, eventów oraz innowacji.</h3>

      </div>

      <section className='section' style={{marginLeft:'auto',marginRight:'auto'}}>
        <PostCard posts={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink test={first} url={previousUrl} text='<' />
            <PaginationLink test={last} url={nextUrl} text='>' />
          </div>
        </section>
        <br />
        <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
        <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='button-green' style={{fontSize:'15px'}} href='/o-nas/'> Poznaj nas bliżej&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>
      </section>
      <ContactCall/>
    </Layout>
  )
}

export default BlogPage
