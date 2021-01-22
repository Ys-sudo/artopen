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
  const { title, meta_title, meta_description } = props

  return (
    <div>
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
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


      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              TODO: Covid banner
            </div>
          </div>
        </div>
      </section>


      <div style={{marginLeft:'10%',marginRight:'10%',textAlign:'center'}}>
      <br /><br />
      <h4 className='title'> Poznaj naszą ofertę: </h4>
      <h5 className='subtitle'> Zobacz co możemy dla Ciebie zrobić. </h5>
      <br></br>
      </div>

      <OfferRoll />
      <br />
      <br />
      <br />
      <ModalCall />


      <div style={{marginLeft:'0%',marginRight:'0%',marginTop:'50px'}}>
        <h4 className='title' style={{marginTop:'100px',textAlign:'center'}}> Portfolio </h4>
        <h5 className='subtitle' style={{marginBottom:'20px',textAlign:'center'}}> Zapoznaj się z naszymi realizacjami. </h5>

        <PortfolioRoll />
        < br/>
        <div style={{textAlign:'center'}}>
          <a className="button-green" style={{fontSize:'18px'}} href="/portfolio/"> Zobacz nasze projekty <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>
      </div>
      <div style={{marginTop:'5%',marginLeft:'5%',marginRight:'5%',marginBottom:'5%',textAlign:'center'}}>
      <h4 className='title' style={{marginTop:'100px'}}> Blog </h4>
      <h5 className='subtitle'> Zapraszamy do lektury. </h5>
      <br />
      <BlogRoll />

      < br/>

          <a className="button-green" style={{fontSize:'18px'}} href="/blog/"> Zobacz wszystkie wpisy <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>

      </div>

      <section className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'center'}}>O nas:</h5>
            <div className='columns'>
              TODO: Nasz zespół 
            </div>
          </div>
        </div>
      </section>




      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>

              <div className='column' style={{textAlign:'center'}}>
              <p>Lat na rynku</p>
              <h5 className='is-size-2'>
              12
              </h5>
              </div>

              <div className='column' style={{textAlign:'center'}}>
              <p>Stałych klientów</p>
              <h5 className='is-size-2'>
              250
              </h5>
              </div>

              <div className='column' style={{textAlign:'center'}}>
              <p>Projektów graficznych</p>
              <h5 className='is-size-2'>
              5000
              </h5>
              </div>

              <div className='column' style={{textAlign:'center'}}>
              <p>Wykonanych zamówień</p>
              <h5 className='is-size-2'>
              12500
              </h5>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'left'}}>Kreator kalnedarzy</h5>
            <div className='columns' style={{marginLeft:'50px'}}>
              TODO: Kreator
            </div>
          </div>
        </div>
      </section>


      <section className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'center'}}>Ekologiczne produkty:</h5>
            <div className='columns'>
              TODO: co nas wyróżnia
            </div>
          </div>
        </div>
      </section>







      <div style={{marginTop:'5%',marginLeft:'10%',marginRight:'10%',marginBottom:'5%'}}>
      <h5 className='has-text-weight-semibold is-size-2'>Co mówią o nas klienci?</h5>
      <br /><br />
      <div className="columns" style={{border:'1px solid lightgray',padding:'20px 20px 20px 20px',borderRadius:'25px',width:'100%'}}>

        <div style={{width:'50px',margin:'auto'}}>
          <div onClick={changeTestminus} className="button-green-no-zoom" style={{marginRight:'20px'}} >
            <img width="20px" alt="opinie" src='/img/angle-left.svg'/>
          </div>
        </div>

        <div style={{width:'90%',padding:'20px',textAlign:'center'}}>

        <img width="120px"  style={{verticalAlign:'middle'}}   alt="rating" src='/img/rating-5.svg'/>
        <br /><br />
        <p id='txtchange' style={{textAlign:'left'}}>
        Firma z pomysłem, kreatywni graficy, nietuzinkowe projekty, ekologiczne produkty, kalendarze z papierem z kamienia, wodoodporne, biodegradowalne. Gadżety z pszenicy, bambusa, słomy, kawy, interesujący design, przyjemny kontakt, szybkie działanie, dobre terminy realizacji. Firma godna polecenia.
        </p>
        <br />
        <p id='autor' style={{color:'#00d1b2'}}>
        Marek Banach | KRAUSE Sp. z o.o.
        </p>

        <br />
        <br />
          <a className="button-green" target="_blank"
          href="https://www.google.com/search?q=artopen+wroc%C5%82aw&oq=artopen+wroc%C5%82aw&aqs=chrome..69i57j0i22i30.2687j0j7&sourceid=chrome&ie=UTF-8#lrd=0x470fc21b332a9cd3:0x6f99075edfe8676,1,,,">
           Zobacz wszystkie opinie &nbsp;&nbsp; <img width="10px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>

         <div style={{width:'50px',margin:'auto'}}>
           <div onClick={changeTestplus} className="button-green-no-zoom" style={{marginLeft:'20px'}}>
             <img width="20px" alt="opinie" src='/img/angle-right.svg'/>
           </div>
         </div>
      </div>

      </div>

      <section className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'center'}}>Zaufali nam:</h5>
            <div className='columns'>
              TODO: klienci logotypy
              {/*https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c*/}
            </div>
          </div>
        </div>
      </section>

      <ContactCall />

    </div>
  )
}


const authors = ['Marek Banach | KRAUSE Sp. z o.o.',
'Aleksandra Cukier | TOZ Schronisko Wrocław',
'Łukasz Maślanka | TBS Wrocław Sp. z o.o.',]
const texts = ['Firma z pomysłem, kreatywni graficy, nietuzinkowe projekty, ekologiczne produkty, kalendarze z papierem z kamienia, wodoodporne, biodegradowalne. Gadżety z pszenicy, bambusa, słomy, kawy, interesujący design, przyjemny kontakt, szybkie działanie, dobre terminy realizacji. Firma godna polecenia.',
'Zdecydowanie polecam korzystanie z usług firmy Art Open :) Profesjonalny projekt przygotowany zgodnie z wytycznymi, szybka realizacja, a do tego bardzo przyjemny kontakt z Pracownikami na etapie realizacji. Polecam zatem wszystkim, którzy cenią sobie wysoką jakość!',
'Cenię sobie współpracę z firmą Art Open - pracują w niej profesjonaliści, zlecenia wykonują terminowo, a w trakcie realizacji zleconych prac wykazują się zaangażowaniem i pomysłowością. Polecam!']


let i=0;

function changeTestplus() {
    if (i < 2){
    i++;
  } else {
    i = 0;
  }
  document.getElementById('txtchange').innerHTML = texts[i];
  document.getElementById('autor').innerHTML = authors[i];

}

function changeTestminus() {
    if (i > 0){
    i--;
  } else {
    i = 2;
  }
  document.getElementById('txtchange').innerHTML = texts[i];
  document.getElementById('autor').innerHTML = authors[i];

}




HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string

}


export default HomePageTemplate
