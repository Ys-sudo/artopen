import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ContactCall from '../ContactCall'

const KreatorPageTemplate = (props) => {
  const { title, content, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <div>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h1 className='title'>
              {title}
            </h1>
            <h2 className='subtitle'>
              Zaprojektuj sam swój wyjątkowy kalendarz.
            </h2>
            <h3>Sprawdź naszą ofertę: </h3>
            <br />
            <br />
            <div className='columns' style={{marginLeft:'20px'}}>
            <div>
            <a className='button-white' href="/kalendarze-firmowe/">
            <img width="12px"  style={{verticalAlign:'middle', marginRight:'15px'}}   alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
            kalendarze firmowe
            </a>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
            <a className='button-white' href="/kalendarze-ksiazkowe/">
            <img width="12px"  style={{verticalAlign:'middle', marginRight:'15px'}}   alt="kalendarze książkowe" src='/img/book.svg'/>
            kalendarze książkowe
            </a>
            </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
    <iframe style={{width: '100%!important', height: '865px', overflow: 'visible'}} src="https://generator.ass3.hostingasp.pl/" width="100%" height="150"></iframe>



      <section className='section section--gradient'>

      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <div className='section'>
            <PageContent className='content' content={content} />
          </div>
        </div>
      </div>

      <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
      <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      </div>


      </section>
      <ContactCall />

    </div>
  )
}

KreatorPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default KreatorPageTemplate
