import React from 'react'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'


const HomePage = () => {

  return (
    <Layout>
    <Helmet>
      <title>Tytuł</title>
      <meta name='description' content="opis meta" />
    </Helmet>
    <div>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    Strona główna
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
                ArtOpen - otwarty na ekologię
              </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  )
}


export default HomePage
