import React from 'react'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'
import { siteFBAppID, userTwitter } from '../../../config.js'

const Onas = () => {

  return (
    <Layout>

    <Helmet>
      {/* General tags */}
      <title>Tytuł meta</title>
      <meta name='description' content="opis meta" />
      <meta name='image' content="url img" />

      {/* OpenGraph tags */}
      <meta property='og:url' content={window.location.href} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content="tytuł" />
      <meta property='og:description' content="opis" />
      <meta property='og:image' content="obraz" />
      <meta
        property='fb:app_id'
        content={siteFBAppID || ''}
      />
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={userTwitter || ''}
      />
      <meta name='twitter:title' content="tytuł" />
      <meta name='twitter:description' content="opis" />
      <meta name='twitter:image' content="obraz" />
    </Helmet>

    <div>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    Co nas wyróżnia?
                  </h1>
                </div>
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

              <h2 className='title'>
                O nas
              </h2>
              <br></br>
              <h3 className='title'> Lorem Ipsum dolorum sit amet </h3>
              <br></br>
              <h4 className='title is-bold is-medium'> Nasz zespół </h4>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  )
}


export default Onas
