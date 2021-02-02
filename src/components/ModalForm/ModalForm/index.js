import React from 'react'
import OffNav from '../OffNav'
//import validationSchema from './validationSchema'
import { navigate } from 'gatsby-link'


function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

class ModalForm extends React.Component {
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


    let fileinput = document.getElementById('fileinput');
    let file = fileinput.files[0];

    if (file.size<300000){
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/kontakt/sukces'))
      .catch(error => alert(error))
  } else {
    alert('Plik jest zbyt duży. Maksymalna wielkość to 300kb, spróbuj ponownie z mniejszym plikiem');

  }
}
  render() {
    return (
      <>
      <OffNav />

      <form
        name="Zamówienie"
        method="post"
        action="/ModalForm/ModalForm"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        style={{marginRight:'10%', marginLeft:'10%',marginBottom:'100px'}}
      >

      {/* Strony internetowe */}

      <div className='columns' id='Stronyinternetowe' style={{display:'none'}}>
      <input name='strona internetowa' id='strona internetowa' onChange={this.handleChange} className='subtitle' placeholder='Strony internetowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

      <div className='field' style={{marginLeft:'15px',width:'45%'}}>
        <label className='label'>Główny cel stworzenia strony:</label>
        <div className='control'>

          <select
          className='button-green select-green' as='select'  name='cel' id='cel'
          onChange={this.handleChange}
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
          </select>

        </div>

      </div>

      <div className='field' id='sklep' style={{display:'none',marginLeft:'15px',width:'95%',marginRight:'5%'}}>
          <div className='control'>
            <div className='columns'>
              <div className='column'>
              <label className='label is-size-10'>Ilość produktów:</label>
              <input className='input' onChange={this.handleChange} type='number' placeholder='100' name='ilość produktów' id='ilość produktów' />
              </div>

              <div className='column' style={{display:'flex'}}>
              <label className='label' style={{fontSize:'14px'}}>Baza xml z produktami:</label>&nbsp;&nbsp;
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='baza xml' id='baza xml' />
              </div>

              <div className='column' style={{display:'flex'}}>
              <label className='label' style={{fontSize:'14px'}}>Fotografie produktów:</label>&nbsp;&nbsp;
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='fotografie produktów' id='fotografie produktów' />
              </div>

              <div className='column' style={{display:'flex'}}>
              <label className='label' style={{fontSize:'14px'}}>Opisy produktów:</label>&nbsp;&nbsp;
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='opisy produktów' id='opisy produktów' />
              </div>

            </div>
          </div>
      </div>



      <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
          <div className='control'>
            <div className='columns'>
              <div className='column'>
              <label className='label is-size-10'>Krótki opis strony:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='Strona xyz.com ma prezentować nowe produkty naszej firmy...' type='text' name='krótki opis' id='opis'></textarea>
              </div>

              <div className='column'>
              <label className='label is-size-10'>Podstrony i struktura:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='home, o nas, oferta...' type='text' name='struktura' id='struktura' ></textarea>
              </div>

            </div>
          </div>
      </div>

          <br />

      <div className='field' style={{marginLeft:'15px',width:'100%',marginRight:'5%'}}>
          <h6> Dodatkowa specyfikacja: </h6>
            <div className='control' style={{display:'flex',flexWrap:'wrap'}}>
            <label className='label' style={{fontSize:'14px'}}>System zarządzania treścią (CMS)</label>
              &nbsp;<input className='checkbox' type='checkbox' name='CMS' id='CMS'
              onChange={this.handleChange} />
              &nbsp;&nbsp;
              <label className='label' style={{fontSize:'14px'}}>Pozycjonowanie (SEO)</label>
                &nbsp;<input className='checkbox' type='checkbox' name='SEO' id='SEO'
                onChange={this.handleChange}/>
                &nbsp;&nbsp;
                <label className='label' style={{fontSize:'14px'}}>Treści tekstowe</label>
                  &nbsp;<input className='checkbox' type='checkbox' name='teksty' id='teksty'
                  onChange={this.handleChange}/>
                  &nbsp;&nbsp;
                  <label className='label' style={{fontSize:'14px'}}>Materiały graficzne</label>
                    &nbsp;<input className='checkbox' type='checkbox' name='grafika' id='grafika'
                    onChange={this.handleChange} />
                    &nbsp;&nbsp;
                    <label className='label' style={{fontSize:'14px'}}>Blog</label>
                      &nbsp;<input className='checkbox' type='checkbox' name='blog' id='blog'
                      onChange={this.handleChange} />
                      &nbsp;&nbsp;
                      <label className='label' style={{fontSize:'14px'}}>Tłumaczenia</label>
                        &nbsp;<input className='checkbox' type='checkbox' name='tłumaczenia' id='tłumaczenia'
                        onChange={this.handleChange} />
                        &nbsp;&nbsp;
                        <label className='label' style={{fontSize:'14px'}}>Serwer</label>
                          &nbsp;<input className='checkbox' type='checkbox' name='serwer' id='serwer'
                          onChange={this.handleChange} />
                          &nbsp;&nbsp;
                          <label className='label' style={{fontSize:'14px'}}>Domena</label>
                            &nbsp;<input className='checkbox' type='checkbox' name='domena' id='domena'
                            onChange={this.handleChange} />
                            &nbsp;&nbsp;

            </div>
        </div>

            <br />

          <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
              <div className='control'>
                <div className='columns'>
                  <div className='column'>
                  <label className='label is-size-10'>Wersje językowe:</label>
                  <input style={{width:'50%'}} onChange={this.handleChange} className='input' placeholder='1' type='number' name='języki' id='języki' />
                  </div>

                  <div className='column'>
                  <label className='label is-size-10'>Jakie języki:</label>
                  <input className='input' onChange={this.handleChange} placeholder='angielski, niemiecki...' type='text' name='jakie języki' id='jakie języki' />
                  </div>

                </div>
              </div>
            </div>


            <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
                <div className='control'>
                  <div className='columns'>

                    <div className='column'>
                    <label className='label is-size-10'>Informacje odnośnie identyfikacji graficznej firmy:</label>
                    <input className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='Kolorystyka, opis, logo...' type='text' name='branding' id='branding' />
                    </div>

                    <div className='column'>
                    <label className='label is-size-10'>Strony internetowe, które mogą być wzorem:</label>
                    <input className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='https://netflix.com' type='text' name='wzorce' id='wzorce' />
                    </div>

                  </div>
                </div>
                </div>



                <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>

                <div className='columns'>
                  <div className='column'>
                    <div className='control'>
                    <label className='label is-size-10'>Budżet:</label>
                    <input style={{width:'100%'}} min='1500' placeholder='5000' max='15000' id="range" className='range' name="budżet" type="range"
                    onInput={(event) => {console.log(document.getElementById('range').value);
                    document.getElementById('rvalueid').innerText = document.getElementById('range').value + ' zł';
                  }} onChange={this.handleChange}
                    />
                    <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid" id="rvalueid">5000 zł</output>

                    </div>
                  </div>

                  <div className='column'>
                    <div className='control'>
                    <label className='label is-size-10'>Załącz pliki graficzne, tekstowe:</label>
                    {/*message*/}


                      <div className="file">
                        <label className="file-label">
                          <input
                            className="button is-primary"
                            type="file"
                            name="attachment"
                            onChange={this.handleAttachment}
                            style={{height:'50px'}}
                            id ="fileinput"
                          />
                        </label>

                        <sub align="center" style={{position:'absolute',backgroundColor:'#111111',color:'white',padding:'2px',marginLeft:'300px',fontSize:'12px'}}> Maksymalna wielkość<br></br> pliku to <b>300kb</b>. </sub>
                      </div>

                    <br></br>
                    </div>
                  </div>

                  </div>
                </div>


                <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%',display:'flex'}}>
                <label className='label' style={{fontSize:'14px'}}>Opieka techniczna nad stroną</label>
                  &nbsp;<input
                  onChange={this.handleChange}
                   className='checkbox' type='checkbox' name='opieka techniczna' id='opieka techniczna' />
                  &nbsp;&nbsp;
                  <label className='label' style={{fontSize:'14px'}}>Prowadzenie bloga</label>
                    &nbsp;<input
                    onChange={this.handleChange}
                     className='checkbox' type='checkbox' name='prowadzenie bloga' id='prowadzenie bloga' />
                    &nbsp;&nbsp;
                    <label className='label' style={{fontSize:'14px'}}>Analiza statystyk</label>
                      &nbsp;<input
                      onChange={this.handleChange}
                       className='checkbox' type='checkbox' name='analiza statysyk' id='analiza' />

                </div>

                <div className='field' style={{marginLeft:'15px',width:'95%',marginRight:'5%'}}>
                <label className='label'>Termin realizacji:</label>
                  <input className='button-green date' type='date' name='deadline' id='deadline'
                  onChange={this.handleChange}
                   />
                </div>


                <hr />

            </div>





















      {/* file input fields */}



          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="zamowienie" />
          <div hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field"
              onChange={this.handleChange}
              />
            </label>
          </div>

          <div className="columns">

          <div className="field column">
            <label className="label" htmlFor={'name'}>
              Imię i Nazwisko<sup>*</sup>:
            </label>
            <div className="control">
              <input
                className="input"
                type={'text'}
                name={'imię i nazwisko'}
                onChange={this.handleChange}
                id={'imię i nazwisko'}
                required={true}
              />
            </div>
          </div>


          <div className="field column">
            <label className="label" htmlFor={'email'}>
              Adres E-mail<sup>*</sup>:
            </label>
            <div className="control">
              <input
                className="input"
                type={'email'}
                name={'adres email'}
                onChange={this.handleChange}
                id={'adres email'}
                required={true}
              />
            </div>
          </div>

          </div>


          <div className="field">
            <label className="label" htmlFor={'phone'}>
              Numer telefonu:
            </label>
            <div className="control">
              <input
                className="input"
                type={'number'}
                name={'numer telefonu'}
                onChange={this.handleChange}
                id={'nrtel'}
                required={true}
              />
            </div>
          </div>


          <div className="field">
            <label className="label" htmlFor={'message'}>
              Wiadomość<sup>*</sup>:
            </label>
            <div className="control">
              <textarea
                className="textarea"
                type={'text'}
                name={'wiadomość'}
                onChange={this.handleChange}
                id={'wiadomość'}
                required={true}
                rows = "4"
              ></textarea>
            </div>
          </div>


          <div className="control">
          <input required={true} onChange={this.handleChange} type="checkbox" id="privacy" name="privacy" defaultChecked="true" value="none"/>&nbsp;&nbsp;
          <label style={{fontSize: '12px'}}  htmlFor="privacy"> Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.</label><br></br><br></br>

          </div>

          <div className="field" style={{textAlign:'right'}}>

          <button className="button" type="reset" >
            Wyczyść
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button className="button is-primary" type="submit" onClick={showFileSize}>
              Wyślij
            </button>



          </div>







      </form>
      </>
    )
  }
}
function showFileSize() {
let fileinput = document.getElementById('fileinput');
let file = fileinput.files[0];

if (file !== undefined){
console.log(file.size);
}

}


export { ModalForm }
