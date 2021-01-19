import React from 'react'
import Layout from '../../../components/Layout'

const SuccessPage = () => {
  return (
    <Layout>
      <section className='hero is-primary is-bold is-large'>
        <div className='hero-body has-text-centered'>
        <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
          <h1 className='title'>
            Wiadomość została wysłana.
          </h1>
          <br />
          <a className='button-white' href="/"> wróć na stronę główną </a>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessPage
