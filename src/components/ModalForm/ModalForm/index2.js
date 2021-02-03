import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import FileUpload from '../../FileUpload'
import validationSchema from './validationSchema'
import OffNav from '../OffNav'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ModalForm2 = () => {
  return (


    <Formik
      initialValues={{ imię: '', email: '', telefon:'',  wiadomosc: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {                                 //eslint-disable-line
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'zamówienie',
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


      <OffNav />

      <div style={{marginLeft:'5%',marginRight:'5%',marginBottom:'200px'}}>

      {/* COVID 19 */}

      <div  id='COVID-19' style={{display:'none'}}>
      <input name='covid-19' id='covid-19' className='subtitle' placeholder='COVID-19:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />

      <div className='columns'>
          <div className='field column' >

            <label className='label'>Maseczki:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='maski' id='maski' />
            </div>

          </div>

          <div className='field column' >
            <label className='label'>Przyłbice:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='przyłbice' id='przylbice' />
            </div>

          </div>

          <div className='field column' >
            <label className='label'>Płyn do dezynfekcji:</label>
            <div className='control'>
              <Field className='input' type='number' placeholder='100' name='dezynfekcja' id='dezynfekcja' />
            </div>

          </div>
        </div>
          <hr />

        </div>








        {/* Strony internetowe */}

        <div className='columns' id='Stronyinternetowe' style={{display:'none'}}>
        <input name='strona internetowa' id='strona internetowa' className='subtitle' placeholder='Strony internetowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

        <div className='field' style={{marginLeft:'15px',width:'45%'}}>
          <label className='label'>Główny cel stworzenia strony:</label>
          <div className='control'>

            <Field
            className='button-green select-green' as='select'  name='cel' id='cel'

            onInput={(event) => {
            console.log(event.target.value);
              if(event.target.value == 'sklep internetowy'){
                document.getElementById('sklep').style.display = 'block';
              } else {
                document.getElementById('sklep').style.display = 'none';
              }
            }}
            >
            <option value="strona wizerunkowa">strona wizerunkowa</option>
            <option value="sklep internetowy">sklep internetowy</option>
            <option value="serwis informacyjny">serwis informacyjny</option>
            <option value="strona dedykowana">strona dedykowana</option>
            <option value="aplikacja webowa">aplikacja webowa</option>
            </Field>

          </div>

        </div>

        <div className='field' id='sklep' style={{display:'none',marginLeft:'15px',width:'95%',marginRight:'5%'}}>
            <div className='control'>
              <div className='columns'>
                <div className='column'>
                <label className='label is-size-10'>Ilość produktów:</label>
                <Field className='input' type='number' placeholder='100' name='ilość produktów' id='ilość produktów' />
                </div>

                <div className='column' style={{display:'flex'}}>
                <label className='label' style={{fontSize:'14px'}}>Baza xml z produktami:</label>&nbsp;&nbsp;
                <Field className='checkbox' type='checkbox'  name='baza xml' id='baza xml' />
                </div>

                <div className='column' style={{display:'flex'}}>
                <label className='label' style={{fontSize:'14px'}}>Fotografie produktów:</label>&nbsp;&nbsp;
                <Field className='checkbox' type='checkbox'  name='fotografie produktów' id='fotografie produktów' />
                </div>

                <div className='column' style={{display:'flex'}}>
                <label className='label' style={{fontSize:'14px'}}>Opisy produktów:</label>&nbsp;&nbsp;
                <Field className='checkbox' type='checkbox'  name='opisy produktów' id='opisy produktów' />
                </div>

              </div>
            </div>
        </div>



        <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
            <div className='control'>
              <div className='columns'>
                <div className='column'>
                <label className='label is-size-10'>Krótki opis strony:</label>
                <Field className='textarea' component='textarea' rows='4' placeholder='Strona xyz.com ma prezentować nowe produkty naszej firmy...' type='text' name='krótki opis' id='opis' />
                </div>

                <div className='column'>
                <label className='label is-size-10'>Podstrony i struktura:</label>
                <Field className='textarea' component='textarea' rows='4' placeholder='home, o nas, oferta...' type='text' name='struktura' id='struktura' />
                </div>

              </div>
            </div>
        </div>

            <br />

        <div className='field' style={{marginLeft:'15px',width:'100%',marginRight:'5%'}}>
            <h6> Dodatkowa specyfikacja: </h6>
              <div className='control' style={{display:'flex',flexWrap:'wrap'}}>
              <label className='label' style={{fontSize:'14px'}}>System zarządzania treścią (CMS)</label>
                &nbsp;<Field className='checkbox' type='checkbox' name='CMS' id='CMS' />
                &nbsp;&nbsp;
                <label className='label' style={{fontSize:'14px'}}>Pozycjonowanie (SEO)</label>
                  &nbsp;<Field className='checkbox' type='checkbox' name='SEO' id='SEO' />
                  &nbsp;&nbsp;
                  <label className='label' style={{fontSize:'14px'}}>Treści tekstowe</label>
                    &nbsp;<Field className='checkbox' type='checkbox' name='teksty' id='teksty' />
                    &nbsp;&nbsp;
                    <label className='label' style={{fontSize:'14px'}}>Materiały graficzne</label>
                      &nbsp;<Field className='checkbox' type='checkbox' name='grafika' id='grafika' />
                      &nbsp;&nbsp;
                      <label className='label' style={{fontSize:'14px'}}>Blog</label>
                        &nbsp;<Field className='checkbox' type='checkbox' name='blog' id='blog' />
                        &nbsp;&nbsp;
                        <label className='label' style={{fontSize:'14px'}}>Tłumaczenia</label>
                          &nbsp;<Field className='checkbox' type='checkbox' name='tłumaczenia' id='tłumaczenia' />
                          &nbsp;&nbsp;
                          <label className='label' style={{fontSize:'14px'}}>Serwer</label>
                            &nbsp;<Field className='checkbox' type='checkbox' name='serwer' id='serwer' />
                            &nbsp;&nbsp;
                            <label className='label' style={{fontSize:'14px'}}>Domena</label>
                              &nbsp;<Field className='checkbox' type='checkbox' name='domena' id='domena' />
                              &nbsp;&nbsp;

              </div>
          </div>

              <br />

            <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
                <div className='control'>
                  <div className='columns'>
                    <div className='column'>
                    <label className='label is-size-10'>Wersje językowe:</label>
                    <Field style={{width:'50%'}} className='input' placeholder='1' type='number' name='języki' id='języki' />
                    </div>

                    <div className='column'>
                    <label className='label is-size-10'>Jakie języki:</label>
                    <Field className='input' placeholder='angielski, niemiecki...' type='text' name='jakie języki' id='jakie języki' />
                    </div>

                  </div>
                </div>
              </div>


              <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
                  <div className='control'>
                    <div className='columns'>

                      <div className='column'>
                      <label className='label is-size-10'>Informacje odnośnie identyfikacji graficznej firmy:</label>
                      <Field className='textarea' component='textarea' rows='4' placeholder='Kolorystyka, opis, logo...' type='text' name='branding' id='branding' />
                      </div>

                      <div className='column'>
                      <label className='label is-size-10'>Strony internetowe, które mogą być wzorem:</label>
                      <Field className='textarea' component='textarea' rows='4' placeholder='https://netflix.com' type='text' name='wzorce' id='wzorce' />
                      </div>

                    </div>
                  </div>
                  </div>



                  <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>

                  <div className='columns'>
                    <div className='column'>
                      <div className='control'>
                      <label className='label is-size-10'>Budżet:</label>
                      <Field style={{width:'100%'}} min='1500' placeholder='5000' max='15000' id="range" className='range' name="budżet" type="range"
                      onInput={(event) => {console.log(document.getElementById('range').value);
                      document.getElementById('rvalueid').innerText = document.getElementById('range').value + ' zł';
                    }}
                      />
                      <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid" id="rvalueid">5000 zł</output>

                      </div>
                    </div>

                    <div className='column'>
                      <div className='control'>
                      <label className='label is-size-10'>Załącz pliki graficzne, tekstowe:</label>
                      <Field id='plik'  name="plik" component={FileUpload}
                      />
                      </div>
                    </div>

                    </div>
                  </div>


                  <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%',display:'flex'}}>
                  <label className='label' style={{fontSize:'14px'}}>Opieka techniczna nad stroną</label>
                    &nbsp;<Field className='checkbox' type='checkbox' name='opieka techniczna' id='opieka techniczna' />
                    &nbsp;&nbsp;
                    <label className='label' style={{fontSize:'14px'}}>Prowadzenie bloga</label>
                      &nbsp;<Field className='checkbox' type='checkbox' name='prowadzenie bloga' id='prowadzenie bloga' />
                      &nbsp;&nbsp;
                      <label className='label' style={{fontSize:'14px'}}>Analiza statystyk</label>
                        &nbsp;<Field className='checkbox' type='checkbox' name='analiza statysyk' id='analiza' />

                  </div>

                  <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
                  <label className='label'>Termin realizacji:</label>
                    <Field className='button-green date' type='date' name='deadline' id='deadline' />
                  </div>


                  <hr />

              </div>






      <div className='columns'>
          <div className='field' style={{marginLeft:'15px',width:'45%',marginRight:'5%'}}>
            <label className='label'>Imię:<sup>*</sup></label>
            <div className='control'>
              <Field className='input' type='text' placeholder='Imię' name='imię' id='imię' />
            </div>
            {touched.imię && errors.imię && <small className='has-text-danger'>{errors.imię}</small>}
          </div>

          <div className='field' style={{marginLeft:'15px',width:'46.5%'}}>
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








export { ModalForm2 }