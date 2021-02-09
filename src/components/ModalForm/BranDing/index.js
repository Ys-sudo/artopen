import React from 'react';


function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Branding').style.display = 'none';
  document.getElementById('BrandingX').style.display = 'block';

  setTimeout(() => {
  document.getElementById('BrandingX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[2].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[2].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[2].firstChild.style.filter = 'brightness(1) invert(0)';
  },1500);

}


class BranDing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {

    e.preventDefault()
    const form = e.target;

    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(quitModal())
      .catch(error => alert(error))

  }




  render() {
    return (
      <>
      <form
        name="Branding"
        id = "brandingform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      {/* Branding */}

      <input name='branding' id='branding' className='subtitle' placeholder='Branding:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

      <div className='field' style={{marginLeft:'18px'}}>
        <label className='label'>Informacje o firmie:</label>
        <div className='control'>

          <textarea
          className='textarea' as='textarea' placeholder="Rodzaj działalności, charakterystyka firmy, oferta..."  name='informacje o firmie...' id='info'
          onChange={this.handleChange}
          rows="3"
          ></textarea>
        </div>

      </div>
      <br />



      <div className='field' style={{marginLeft:'15px'}}>
          <div className='control'>
            <div className='columns'>
              <div className='column'>
              <label className='label is-size-10'>Charakterystyka produktów i marki:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='3' placeholder='Cechy, pozycja na rynku, rodzaje, odmiany, czym się produkt wyróżnia, gdzie i kiedy się sprzedaje...' type='text' name='produkty i marka' id='produkty i marka'></textarea>
              </div>

              <div className='column'>
              <label className='label is-size-10'>Opis rynku i konkurencji:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='3' placeholder='Charakterystyka, trendy na rynku, główni gracze, działania konkurencji...' type='text' name='Opis rynku i konkurencji' id='opis rynku i konkurencji' ></textarea>
              </div>




            </div>
          </div>
      </div>

          <br />

      <div className='field columns' style={{marginLeft:'15px'}}>

          <br />



          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
            <label htmlFor="logotyp" className='label main' style={{fontSize:'14px'}}>Logotyp
              <input className='checkbox' type='checkbox' name='Logotyp' id='logotyp'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>

              <label htmlFor="Identyfikacja wizualna" className='label main' style={{fontSize:'14px'}}>Identyfikacja wizualna
                <input className='checkbox' type='checkbox' name='Identyfikacja wizualna znaku' id='Identyfikacja wizualna'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>

                <label htmlFor="Nazwa firmy" className='label main' style={{fontSize:'14px'}}>Nazwa firmy
                  <input className='checkbox' type='checkbox' name='Nazwa firmy' id='Nazwa firmy'
                  onChange={this.handleChange} />
                  <span className="check"></span>
                  </label>

                  <label htmlFor="Slogany" className='label main' style={{fontSize:'14px'}}>Slogany
                    <input className='checkbox' type='checkbox' name='Slogany firmowy' id='Slogany'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>

                    <label htmlFor="Opracowywanie tekstów" className='label main' style={{fontSize:'14px'}}>Opracowywanie tekstów
                      <input className='checkbox' type='checkbox' name='Opracowywanie tekstów' id='Opracowywanie tekstów'
                      onChange={this.handleChange} />
                      <span className="check"></span>
                      </label>

          </div>

          <div className='column'>


          <label className='label is-size-10'>Inne projekty:</label>
          <input className='input' onChange={this.handleChange} placeholder='video, programowanie, wirtualna rzeczywistość...' type='text' name='Inne projekty' id='inne projekty' />
          <br /><br />

          <label className='label is-size-10'>Grupa docelowa:</label>
          <input className='input' onChange={this.handleChange} placeholder='Dorośli 30+... ' type='text' name='grupa docelowa' id='grupa docelowa' />
          <br /><br />




          </div>


        </div>






                <div className='field' style={{marginLeft:'15px'}}>



                <div className='columns'>






                   <div className='column'>
                     <div className='control'>
                     <label className='label is-size-10'>Budżet:</label>
                     <input style={{width:'100%'}} min='1500' placeholder='5000' max='10000' id="range" className='range' name="budżet" type="range"
                     onInput={(event) => {console.log(document.getElementById('range').value);
                     document.getElementById('rvalueid').innerText = document.getElementById('range').value + ' zł';
                   }} onChange={this.handleChange}
                     />
                     <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid" id="rvalueid">5000 zł</output>

                     </div>
                   </div>



                  </div>

                </div>
                {/* file input fields */}

                <hr />

                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="Branding" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field"
                        onChange={this.handleChange}
                        />
                      </label>
                    </div>

                    <div className="columns">
                    <div className='column' style={{marginLeft:'15px'}}>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Imię i Nazwisko<sup>*</sup>:
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'imię i nazwisko'}
                          onChange={this.handleChange}
                          id={'imię i nazwiskoI'}
                          required={true}
                        />
                      </div>
                      </div>

                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Adres E-mail<sup>*</sup>:
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'adres email'}
                            onChange={this.handleChange}
                            id={'adres emailI'}
                            required={true}
                          />
                        </div>
                      </div>

                      <div className="field ">
                        <label className="label" htmlFor={'phone'}>
                          Numer telefonu:
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'number'}
                            name={'numer telefonu'}
                            onChange={this.handleChange}
                            id={'nrtelI'}
                          />
                        </div>
                      </div>


                    </div>

                    <div className="field column">
                      <label className="label" htmlFor={'message'}>
                        Wiadomość<sup>*</sup>:
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          type={'text'}
                          name={'wiadomość'}
                          onChange={this.handleChange}
                          id={'wiadomośćI'}
                          required={true}
                          rows = "7"
                        ></textarea>
                      </div>



                      <br />
                      <div className="control">

                      <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyI">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyI" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>

                      </div>

                      <div className="field" style={{textAlign:'right'}}>


                        <button className="button is-primary" type="submit" onSubmit={this.handleSubmit}>
                          Wyślij
                        </button>



                      </div>


                    </div>



                    </div>

                </form>











      </>
    )
  }
}

export default BranDing;
