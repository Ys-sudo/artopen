import React from 'react'
import Content from '../Content'
import ModalCall from '../ModalCall'
import PropTypes from 'prop-types'

const AboutPageTemplate = (props) => {
  const { title, content, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <div>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h1 className='title' style={{fontSize:'50px'}}>
              {title}
            </h1>
            <h2 className='subtitle'>
              Dowiedz się kim jesteśmy oraz co nas wyróżnia.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns' style={{textAlign:'center'}}>
            <div className='column'>
            <h3 style={{textAlign:'left'}}><strong style={{color:'white', fontSize:'20px'}}>Studio reklamy Art Open</strong></h3>
            </div>
            <div className='column'>
            <h3>akapit 1</h3>
            </div>
            <div className='column'>
            <h3>akapit 2</h3>
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>


      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>

                <PageContent className='content' content={content} />
              
            </div>
          </div>
        </div>
      </section>



      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
                <h5 className='has-text-weight-semibold is-size-2'>Poznaj nasz zespół:</h5>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px',marginLeft:'20px'}}>
      <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz nasze realizacje&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>



      </div>

      <br />
      <br />
      <ModalCall />
    </div>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
