import React from 'react'
import { Link } from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import OfferRoll from '../components/OfferRoll'
import Layout from '../components/Layout'
import ContactCall from '../components/ContactCall'



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
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
        <title>Oferta 🌱 Art Open Sp. z o.o. | Agencja reklamowa </title>
        {/* Schema.org tags */}
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
        <meta name='keywords' content="Agencja reklamowa, ekologia, Art Open," />
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

      <div style={{textAlign:'center',marginRight:'15px',marginLeft:'15px',marginTop:'50px'}}>
      <br></br>

      <img id='rotate' src="/img/logo-square.svg" width="120px" />
      <br />

      <h2 className='title'>
       Zakres naszych <b>działań</b>:
      </h2>
      <h3 className='subtitle'>Zapraszamy do zapoznania się z oferowanymi przez nas usługami.</h3>

      </div>
      <section className='section' style={{padding: '0px', margin:'0px',marginTop:'50px'}}>
        <OfferRoll />
        <br />
        <div className="section" style={{marginLeft:'5%',marginRight:'5%',textAlign:'left',padding:'5%'}}>
        <p className="title">Zapewniamy kompleksową obsługę Państwa firmy, projektu czy marki oferując powyższe usługi.</p>
        <br />
        <p className="subtitle" style={{paddingLeft:'10px',borderLeft:'10px solid #23C495'}}>Nasza działalność jednak nie kończy się tylko na nich, jako agencja reklamowa angażujemy się w różnego rodzaju akcje charytatywne,
        zbiórki funduszy, pomoc społeczną, pomoc dla zwierząt, dbamy o środowisko organizując akcje sprzątania miesjc publicznych i dużo dużo więcej. Zapraszamy do szczegółowego zapoznania się z prowadzonymi przez nas działalnośćiami. Więcej informacji możecie znaleźć Państwo na blogu, w zakładce <i>O nas</i> lub przeglądając portfolio.
        </p>
        </div>
        <br />
        <br />
        <div className='bottomUi' style={{textAlign:'center',marginBottom:'60px'}}>
        <Link className='button-green' style={{fontSize:'15px'}} to='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='button-green' style={{fontSize:'15px'}} to='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='button-green' style={{fontSize:'15px'}} to='/o-nas/'> Poznaj nas bliżej&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        </div>

        <ContactCall/>
      </section>
    </Layout>
  )
}

export default OfertaPage
