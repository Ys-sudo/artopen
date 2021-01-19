import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import ContactCall from '../ContactCall'
import ModalCall from '../ModalCall'

import OfferRoll from '../OfferRoll'
import BlogRoll from '../BlogRoll'
import PortfolioRoll from '../PortfolioRoll'

import PropTypes from 'prop-types'

const HomePageTemplate = (props) => {
  const { title, heading, description, offerings, meta_title, meta_description, testimonials  } = props
  const { group } = props

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title' style={{fontSize:'50px'}}>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
      <div style={{marginLeft:'10%',marginRight:'10%',textAlign:'center'}}>
      <h4 className='title'> Poznaj naszą ofertę: </h4>
      <h5 className='subtitle'> Zobacz co możemy dla Ciebie zrobić. </h5>
      <br></br>
      </div>
      <OfferRoll />
      <br />
      <br />
      <br />
      <ModalCall />
      <div style={{marginLeft:'10%',marginRight:'10%',textAlign:'center',marginTop:'50px'}}>
      <h4 className='title' style={{marginTop:'100px'}}> Portfolio </h4>
      <h5 className='subtitle' style={{marginBottom:'-20px'}}> Zapoznaj się z naszymi realizacjami. </h5>
      <PortfolioRoll />
      <br></br>
      <br></br>
      <h4 className='title' style={{marginTop:'100px'}}> Blog </h4>
      <h5 className='subtitle'> Zapraszamy do lektury. </h5>
      <BlogRoll />
      </div>

      <div style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',marginBottom:'5%'}}>
      <h2 className='has-text-weight-semibold is-size-2'>Co mówią o nas klienci?</h2>
      <Testimonials testimonials={testimonials} />
      </div>

      <ContactCall />

    </div>
  )
}
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
}

export default HomePageTemplate
