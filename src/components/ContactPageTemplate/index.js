import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import ModalCall from '../ModalCall'
import MapContainer from '../Map'



const ContactPageTemplate = (props) => {
  const { title, subtitle, meta_title, meta_description } = props

  return (
    <div>
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />


      </Helmet>



      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
        <div className='container section'>
          <div className='columns section'>
            <div>
              <h1 className='title' style={{fontSize:'50px'}}>
                {title}
              </h1>
              <h2 className='subtitle'>
                {subtitle}
              </h2>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className='columns' style={{marginLeft:'10%',marginRight:'10%',marginTop:'50px',marginBottom:'50px'}}>
        <div className='column' style={{lineHeight:'40px'}}>
          <h3 className='subtitle'><b>Biuro obsługi klienta</b></h3>
          <h4 style={{marginBottom:'30px'}}>
          <img width="20px" style={{verticalAlign:'middle', marginRight:'15px'}} alt="godziny otwarcia" src='/img/clock.svg'/>
          pon. - pt: 8:00 - 16:00</h4>

          <p>
          <img width="20px" style={{verticalAlign:'middle', marginRight:'15px'}}  alt="ulica" src='/img/map-marker-alt.svg'/>ul. Piotra Ignuta 87</p>

          <p>
          <img width="20px" style={{verticalAlign:'middle', marginRight:'15px'}}   alt="miasto" src='/img/city.svg'/>54-151 Wrocław</p>


          <br />

          <h4 style={{marginBottom:'20px'}}> Kontakt mailowy lub telefoniczny: </h4>
          <div style={{marginBottom:'20px'}}>
          <a href="mailto:biuro@artopen.pl" className='button-green' >
          <img width="20px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/><b>biuro@artopen.pl</b></a>
          </div>

          <div style={{marginBottom:'20px'}}>
          <a href="tel:+48 71 728 29 13" className='button-green' >
          <img width="20px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="numer telefonu" src='/img/phone.svg'/><b>Tel: +48 71 728 29 13</b></a>
          </div>

          <div style={{marginBottom:'20px'}}>
            <a href="tel:+48 535 000 881" className='button-green' >
            <img width="20px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="numer komórkowy" src='/img/mobile.svg'/><b>Kom: +48 535 000 881</b></a>
          </div>



        </div>
        <div className='column' style={{minWidth:'55%'}}>
          <h4 className='subtitle'><b>Formularz kontaktowy</b></h4>
          <h4 style={{marginBottom:'30px'}}>Wyślij nam wiadomość!</h4>
          <br />
          <ContactForm />
        </div>

      </div>
      <br /><br />
      <ModalCall />
      <br />
      <h5 style={{textAlign:'center'}} className='subtitle'>
      <img width="40px"  style={{verticalAlign:'middle', marginBottom:'15px'}}   alt="numer komórkowy" src='/img/map-marked.svg'/>
      <br />
      <b>Odwiedź naszą siedzibę:</b> </h5>
      <h6 style={{textAlign:'center'}}> Nasz ekspres do kawy czeka na Ciebie! </h6>
      <br />
      <MapContainer />


    </div>
  )
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
