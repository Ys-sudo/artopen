import React from 'react'
import Content from '../Content'
import ContactCall from '../ContactCall'
import PropTypes from 'prop-types'

const PolicyPageTemplate = (props) => {
  const { title, content, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <>
    <section className='hero is-primary is-bold' style={{minHeight:'75%',backgroundImage:'url(/img/polityka.svg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'bottom center',backgroundAttachment: `fixed`}}>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h1 className='title' style={{fontSize:'50px',marginTop:'50px'}}>
              {title}
            </h1>
            <h2 className='subtitle'>
            Podstawy prawne przetwarzania Państwa danych.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
        <a className='button-green' style={{fontSize:'18px'}} href='/'> Wróć na stronę główną&nbsp;&nbsp; <img width="15px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>
      </section>

      <br />
      <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
      <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/o-nas/'> Poznaj nas bliżej&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      </div>


      <br />

      <ContactCall />


    </>
  )
}

PolicyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PolicyPageTemplate
