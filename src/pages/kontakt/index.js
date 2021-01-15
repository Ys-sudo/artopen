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
                    jeden
                  </h1>
                  <h2 className='subtitle'>
                    dwa
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <ContactForm />
        </div>
      </section>
      </Layout>
    </div>
  )
}


export default StronaKontakt
