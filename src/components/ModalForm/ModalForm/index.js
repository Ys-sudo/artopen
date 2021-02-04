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

{/* funkcje do podglądu obrazu.
function hideimg(){
  const imgTag = document.getElementById("myimage");
  imgTag.src = ' ';
}

const handleInput = (e) => {
  const file  =  e.currentTarget.files[0];
  const reader = new FileReader();
  const imgTag = document.getElementById("myimage");
  if (file.name !== undefined){
  imgTag.title = file.name;
  reader.onload = function(event) {
    imgTag.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
};
*/}
function disableEmptyInputs() {
  let form = document.getElementById('zamowienie');
  let controls = form.elements;
  let iLen = controls.length
  for (var i=0; i<iLen; i++) {
    controls[i].disabled = controls[i].value == '';
  }
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

  resetRange = (e) => {
  document.getElementById('range').value = 8250;
  document.getElementById('rvalueid').innerText = document.getElementById('range').value + ' zł';
  }

  handleSubmit = e => {


    let fileinput = document.getElementById('fileinput');
    let file = fileinput.files[0];
    disableEmptyInputs();
    console.log('test');
    if (file !== undefined){
        if (file.size < 1048576){
        e.preventDefault()
        const form = e.target;

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
        alert('Plik jest zbyt duży. Maksymalna wielkość to 1MB, spróbuj ponownie z mniejszym plikiem');
        }
    } else {
    e.preventDefault()
    const form = e.target;

    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/kontakt/sukces'))
      .catch(error => alert(error))
  }

}
  render() {
    return (
      <>
      <OffNav />

      <form
        name="Zamówienie"
        id = "zamowienie"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        style={{marginRight:'5%', marginLeft:'5%',marginBottom:'100px'}}
      >

      {/* COVID 19 */}

      <div  id='COVID-19' style={{display:'none',padding:'0px'}}>
      <input name='covid-19' id='covid-19' className='subtitle' placeholder='COVID-19:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />

      <div className='columns' style={{ marginLeft:'15px'}}>
          <div className='field column' >

            <label className='label'>Maseczki:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='maski' id='maski' />
            </div>

          </div>

          <div className='field column' >
            <label className='label'>Przyłbice:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='przyłbice' id='przylbice' />
            </div>

          </div>

          <div className='field column' >
            <label className='label'>Płyn do dezynfekcji:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='dezynfekcja' id='dezynfekcja' />
            </div>

          </div>
        </div>
          <hr />

        </div>








      {/* Strony internetowe */}

      <div className='columns' id='Stronyinternetowe' style={{display:'none'}}>
      <input name='strona internetowa' id='strona internetowa' className='subtitle' placeholder='Strony internetowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

      <div className='field' style={{marginLeft:'18px'}}>
        <label className='label'>Główny cel stworzenia strony:</label>
        <div className='control'>

          <select
          className='button-green select-green' as='select'  name='cel' id='cel'
          onChange={this.handleChange}
          onInput={(event) => {
          console.log(event.target.value);
            if(event.target.value == 'sklep internetowy'){
              document.getElementById('sklep').style.display = 'block';
              document.getElementById('sklep1').style.display = 'block';
            } else {
              document.getElementById('sklep').style.display = 'none';
              document.getElementById('sklep1').style.display = 'none';
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
      <br />



      <div className='field' style={{marginLeft:'15px'}}>
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

      <div className='field columns' style={{marginLeft:'15px'}}>
          <div className='column'>

          <h6> Dodatkowa specyfikacja: </h6>
          <br />
          <div id='sklep1' style={{display:'none'}}>
          <label className='label is-size-10'>Ilość produktów:</label>
          <input className='input' onChange={this.handleChange} type='number' placeholder='100' name='ilość produktów' id='ilość produktów' />
          <br /><br />
          </div>


          <label className='label'>Termin realizacji:</label>
            <input className='button-green date' type='date' name='deadline' id='deadline'
            onChange={this.handleChange}
             />






          </div>

          <div className='field' id='sklep' style={{display:'none',marginLeft:'3%'}}>
              <div className='control'>


                  <div className='column'  style={{display:'block',width:'100%',marginLeft:'3%'}}>




                  <label htmlFor="baza xml" className='label main' style={{fontSize:'14px'}}>Baza XML
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='baza xml' id='baza xml' />
                  <span className="check"></span>
                  </label>



                  <label htmlFor="fotografie produktów" className='label main' style={{fontSize:'14px'}}>Zdjęcia<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='fotografie produktów' id='fotografie produktów' />
                  <span className="check"></span>
                  </label>



                  <label className='label main' htmlFor="opisy produktów" style={{fontSize:'14px'}}>Opisy<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='opisy produktów' id='opisy produktów' />
                  <span className="check"></span>
                  </label>

                  <label className='label main' htmlFor="integracje api" style={{fontSize:'14px'}}>Integracje<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='integracje api' id='integracje api' />
                  <span className="check"></span>
                  </label>

                  </div>
                </div>

          </div>


          <br />
            <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>

            <label htmlFor="CMS" className='label main' style={{fontSize:'14px'}}>System CMS
              <input className='checkbox' type='checkbox' name='CMS' id='CMS'
              onChange={this.handleChange} />

              <span className="check"></span>
              </label>
              <label htmlFor="SEO" className='label main' style={{fontSize:'14px'}}>SEO
              <input className='checkbox' type='checkbox' name='SEO' id='SEO'
                onChange={this.handleChange}/>

                <span className="check"></span>
                </label>
                <label htmlFor="teksty" className='label main' style={{fontSize:'14px'}}>Treści tekstowe
                  <input className='checkbox' type='checkbox' name='teksty' id='teksty'
                  onChange={this.handleChange}/>

                  <span className="check"></span>
                  </label>
                  <label htmlFor="grafika" className='label main' style={{fontSize:'14px'}}>Materiały graficzne
                    <input className='checkbox' type='checkbox' name='grafika' id='grafika'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>


            </div>


          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
            <label htmlFor="blog" className='label main' style={{fontSize:'14px'}}>Blog
              &nbsp;<input className='checkbox' type='checkbox' name='blog' id='blog'
              onChange={this.handleChange} />
              &nbsp;&nbsp;
              <span className="check"></span>
              </label>
              <label htmlFor="tłumaczenia" className='label main' style={{fontSize:'14px'}}>Tłumaczenia
                &nbsp;<input className='checkbox' type='checkbox' name='tłumaczenia' id='tłumaczenia'
                onChange={this.handleChange} />
                &nbsp;&nbsp;
                <span className="check"></span>
                </label>
                <label htmlFor="serwer" className='label main' style={{fontSize:'14px'}}>Serwer
                  &nbsp;<input className='checkbox' type='checkbox' name='serwer' id='serwer'
                  onChange={this.handleChange} />
                  &nbsp;&nbsp;
                  <span className="check"></span>
                  </label>
                  <label htmlFor="domena" className='label main' style={{fontSize:'14px'}}>Domena
                    &nbsp;<input className='checkbox' type='checkbox' name='domena' id='domena'
                    onChange={this.handleChange} />
                    &nbsp;&nbsp;
                    <span className="check"></span>
                    </label>

            </div>


            <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>

              <label htmlFor="opieka techniczna" className='label main' style={{fontSize:'14px'}}>Wsparcie techniczne
                <input
                onChange={this.handleChange}
                 className='checkbox' type='checkbox' name='opieka techniczna' id='opieka techniczna' />
                 <span className="check"></span>
                 </label>

                <label htmlFor="prowadzenie bloga" className='label main' style={{fontSize:'14px'}}>Prowadzenie bloga
                  &nbsp;<input
                  onChange={this.handleChange}
                   className='checkbox' type='checkbox' name='prowadzenie bloga' id='prowadzenie bloga' />
                   <span className="check"></span>
                  &nbsp;&nbsp;
                  </label>
                  <label htmlFor="analiza" className='label main' style={{fontSize:'14px'}}>Analiza statystyk
                    &nbsp;<input
                    onChange={this.handleChange}
                     className='checkbox' type='checkbox' name='analiza statysyk' id='analiza' />
                     <span className="check"></span>
                     </label>
                     <label htmlFor="newsletters" className='label main' style={{fontSize:'14px'}}>Newsletter
                       &nbsp;<input
                       onChange={this.handleChange}
                        className='checkbox' type='checkbox' name='newsletter' id='newsletters' />
                        <span className="check"></span>
                        </label>


            </div>




        </div>



            <br />

          <div className='field' style={{marginLeft:'15px'}}>
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


            <div className='field' style={{marginLeft:'15px'}}>
                <div className='control'>
                  <div className='columns'>

                    <div className='column'>
                    <label className='label is-size-10'>Informacje odnośnie identyfikacji graficznej firmy:</label>
                    <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='Kolorystyka, opis, logo...' type='text' name='branding' id='branding' ></textarea>
                    </div>

                    <div className='column'>
                    <label className='label is-size-10'>Strony internetowe, które mogą być wzorem:</label>
                    <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='https://netflix.com' type='text' name='wzorce' id='wzorce' ></textarea>
                    </div>

                  </div>
                </div>
                </div>



                <br />





                <div className='field' style={{marginLeft:'15px'}}>

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
                    <label className='label is-size-10'>Załącz plik:</label>
                    {/*message*/}


                      <div className="file">
                        <label className="file-label">
                        {/*onInput ={(o) => handleInput(o)}*/}
                          <input
                            className="button is-primary"
                            type="file"
                            name="attachment"
                            onChange={this.handleAttachment}

                            style={{height:'50px'}}
                            id ="fileinput"
                          />
                        </label>

                        <sub align="center" style={{position:'absolute',backgroundColor:'#111111',color:'white',padding:'2px',marginLeft:'300px',fontSize:'12px'}}> Maksymalna wielkość<br></br> pliku to <b>1MB</b>. </sub>
                        <br />

                      </div>


                    <br></br>
                    </div>

                  </div>

                  </div>
                </div>
                <br />

              {/* Podgląd obrazu wrazie w.  <img onMouseOver={hideimg} style={{backgroundColor:'black',padding:'15px',postion:'fixed',top:'10px',right:'10px',maxWidth:'150px'}} src={''} alt="" id={'myimage'}/> */}



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

          <label style={{fontSize: '12px'}} className='main'  htmlFor="privacy">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacy" name="privacy" defaultChecked="true" value="none"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label><br></br><br></br>

          </div>

          <div className="field" style={{textAlign:'right'}}>

          <button className="button"  type="reset" onClick={this.resetRange} >
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

if (file != undefined){
console.log(file.size);
}

}


export { ModalForm }
