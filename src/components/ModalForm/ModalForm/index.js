import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ModalForm = () => {
  return (

    <Formik
      initialValues={{ imię: '', email: '', telefon:'',  wiadomosc: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {                                 //eslint-disable-line
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'kontakt',
            ...values,
          }),
        })
          .then(() => {
            navigate('/kontakt/sukces')
            setSubmitting(false)
          })
          .catch(error => {
            console.log(error)
            alert("Błąd: proszę spróbować ponownie!");                            //eslint-disable-line
            setSubmitting(false)
          })
      }}>
      {({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (<form
        name='zamówienie'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >


      <div  style={{textAlign:'center',marginTop:'-50px'}}>
        <img width="200px" src='/img/ArtOpen.svg' alt="ArtOpen studio reklamy" />
        <br></br>
      </div>



      <br />
      <div className='modalnav' style={{display:'flex',flexWrap:'wrap',marginLeft:'5%'}}>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="covid-19" src='/img/viruses.svg'/>
      <br />
        COVID-19
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="ekologia" src='/img/leaf.svg'/>
      <br />
        Ekologia
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="branding" src='/img/pencil-ruler.svg'/>
      <br />
        Branding
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="branding" src='/img/pencil-alt.svg'/>
      <br />
        Projektowanie graficzne
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="strony internetowe" src='/img/code.svg'/>
      <br />
        Strony internetowe
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="kalendarze książkowe" src='/img/book.svg'/>
      <br />
        Kalendarze książkowe
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
      <br />
        Kalendarze firmowe
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="gadżety" src='/img/lightbulb.svg'/>
      <br />
        Gadżety reklamowe 
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="wydruki" src='/img/map.svg'/>
      <br />
        Wydruki reklamowe
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
      <br />
        Reklama zewnętrzna
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}}  alt="fotografia" src='/img/camera-retro.svg'/>
      <br />
        Fotografia produktowa
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="wystawiennictwo" src='/img/cubes.svg'/>
      <br />
        Wystawiennictwo
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="filmowanie" src='/img/film.svg'/>
      <br />
      Filmowanie
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="opakowania" src='/img/box-open.svg'/>
      <br />
      Opakowania
      </a>

      <a onClick={selectOffer} className='ofnav1' >
      <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="VR" src='/img/vr-cardboard.svg'/>
      <br />
      VR
      </a>

      </div>

      <br />
      <br />
      <br />

      <div style={{marginLeft:'5%',marginRight:'5%',marginBottom:'200px'}}>

      {/* COVID 19 */}

      <div className='columns' id='COVID-19' style={{display:'none'}}>

          <div className='field' style={{marginLeft:'15px',width:'45%',marginRight:'5%'}}>
          <h5 className='subtitle' style={{color:'gray'}}> Covid-19 </h5>
            <label className='label'>Maseczki:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='maski' id='maski' />
            </div>
            {touched.imię && errors.imię && <small className='has-text-danger'>{errors.imię}</small>}
          </div>

          <div className='field' style={{marginLeft:'15px',width:'45%'}}>
            <label className='label'>Przyłbice:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='przyłbice' id='przylbice' />
            </div>
            {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
          </div>

          <div className='field' style={{marginLeft:'15px',width:'45%'}}>
            <label className='label'>Płyn do dezynfekcji:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='dezynfekcja' id='dezynfekcja' />
            </div>
            {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
          </div>

          <hr />

        </div>

        {/* Strony internetowe */}

        <div className='columns' id='Stronyinternetowe' style={{display:'none'}}>
            <div className='field' style={{marginLeft:'15px',width:'45%',marginRight:'5%'}}>
              <label className='label'>Maseczki:<sup>*</sup></label>
              <div className='control'>
                <Field className='input' type='text' placeholder='Imię' name='imię' id='imię' />
              </div>
              {touched.imię && errors.imię && <small className='has-text-danger'>{errors.imię}</small>}
            </div>

            <div className='field' style={{marginLeft:'15px',width:'45%'}}>
              <label className='label'>Przyłbice:<sup>*</sup></label>
              <div className='control'>
                <Field className='input' type='email' placeholder='Email' name='email' id='email' />
              </div>
              {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
            </div>
            <br />
          </div>



      <div className='columns'>
          <div className='field' style={{marginLeft:'15px',width:'45%',marginRight:'5%'}}>
            <label className='label'>Imię:<sup>*</sup></label>
            <div className='control'>
              <Field className='input' type='text' placeholder='Imię' name='imię' id='imię' />
            </div>
            {touched.imię && errors.imię && <small className='has-text-danger'>{errors.imię}</small>}
          </div>

          <div className='field' style={{marginLeft:'15px',width:'45%'}}>
            <label className='label'>Email:<sup>*</sup></label>
            <div className='control'>
              <Field className='input' type='email' placeholder='Email' name='email' id='email' />
            </div>
            {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
          </div>
        </div>

        <div className='field'>
          <label className='label'>Telefon:<sup>*</sup></label>
          <div className='control'>
            <Field className='input' type='tel' placeholder='Numer telefonu' name='telefon' id='telefon' />
          </div>
          {touched.telefon && errors.telefon && <small className='has-text-danger'>{errors.telefon}</small>}
        </div>

        <div className='field'>
          <label className='label'>Wiadomość:<sup>*</sup></label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='Wiadomość...' name='wiadomość' id='wiadomość' rows='6' />
          </div>
          {touched.wiadomość && errors.wiadomość && <small className='has-text-danger'>{errors.wiadomość}</small>}
        </div>

        <div className='field is-grouped is-pulled-right'>
          <div className='control'>
            <button className='button' type='reset'>Wyczyść</button>
          </div>
          <div className='control'>
            <button className='button is-primary' type='submit' disabled={isSubmitting}>Wyślij</button>
          </div>
        </div>
        </div>
      </form>)}
    </Formik>
  )
}


function selectOffer(event){

  if (event.target.style.backgroundColor == 'rgb(0, 209, 178)'){
    if (event.target.firstChild !== null){
      event.target.style.backgroundColor = 'white';
      event.target.style.color = '#00d1b2';
      event.target.firstChild.style.filter = 'brightness(1) invert(0)';
    }
  } else {
    if (event.target.firstChild !== null){
    event.target.style.backgroundColor = '#00d1b2';
    event.target.style.color = 'white';
    event.target.firstChild.style.filter = 'brightness(0) invert(1)';
    }
  }

  let name = event.target.innerText;
  name =  name.replace(/\s/g, '');
  console.log(name);

  console.log(document.getElementById(name));
  if (document.getElementById(name) !== null){
    if (document.getElementById(name).style.display=='none'){
      document.getElementById(name).style.display = 'block';
    } else {
      document.getElementById(name).style.display = 'none';
    }
  }

}






export { ModalForm }
