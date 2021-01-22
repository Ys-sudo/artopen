import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
  <section className='hero is-primary is-bold is-large'>
    <div className='hero-body has-text-centered'>
    <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="404 error" src='/img/exclamation-triangle.svg'/>
    <h1 className='title'>
      404: Strony nie znaleziono
    </h1>
    <h2 className='subtitle'>
      Wygląda na to, że to czego szukasz nie istnieje.
    </h2>
    <br />
    <a className='button-white' href="/"> wróć na stronę główną </a>

    </div>
  </section>

  </Layout>
)

export default NotFoundPage
