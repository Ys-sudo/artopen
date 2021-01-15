import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../../components/forms'
import Layout from '../../components/Layout'

const StronaKontakt = () => {

  return (
    <div>
      <Helmet>
        <title>meta_title</title>
        <meta name='description' content="{meta_description}" />
      </Helmet>
      <Layout>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    Kontakt
                  </h1>
                  <h2 className='subtitle'>
                    Skontaktuj się z nami!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='hero'>
      <div className='hero-body'>
        <div className='container' style={{marginLeft:'10%',marginRight:'10%'}}>
          <ContactForm />
        </div>
      </div>
      </div>
      </Layout>
    </div>
  )
}


export default StronaKontakt
