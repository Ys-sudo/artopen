import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby-link'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
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
        name='kontakt'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
      <div className='columns'>
          <div className='field column' style={{marginRight:'20px'}}>
            <label className='label'>Imię:<sup>*</sup></label>
            <div className='control'>
              <Field className='input' type='text' placeholder='Imię' name='imię' id='imię' />
            </div>
            {touched.imię && errors.imię && <small className='has-text-danger'>{errors.imię}</small>}
          </div>

          <div className='field column'>
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
      </form>)}
    </Formik>
  )
}

export { ContactForm }
