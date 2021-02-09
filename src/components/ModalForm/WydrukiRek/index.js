import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Wydrukireklamowe').style.display = 'none';
  document.getElementById('WydrukireklamoweX').style.display = 'block';

  setTimeout(() => {
  document.getElementById('WydrukireklamoweX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[8].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[8].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[8].firstChild.style.filter = 'brightness(1) invert(0)';
  },1500);

}

class WydrukiRek extends React.Component {

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
          .then(quitModal())
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
      .then(quitModal())
      .catch(error => alert(error))
  }

}

  render() {
    return (
      <>
      <form
        name="Wydruki reklamowe"
        id = "wydrukireklform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      <input name='Wydruki reklamowe' id='wydrukirek' className='subtitle' placeholder='Wydruki reklamowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />
      <div className='field' style={{marginLeft:'18px'}}>
      <label className='label'>Rodzaj wydruku:</label>
      <br />
      <div className='control columns' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>


            <div className='column'>
            <label htmlFor="wizytowkiI" className='label main ' style={{fontSize:'14px'}}>Wizytówki
            <input className='checkbox' onChange={this.handleChange}
            type='checkbox'  name='Wizytówki' id='wizytowkiI' />
            <span className="check"></span>
            </label>
            </div>




            <div className='column'>
            <label htmlFor="ulotkiI" className='label main' style={{fontSize:'14px'}}>Ulotki
            <input className='checkbox' onChange={this.handleChange} type='checkbox'
            name='Ulotki' id='ulotkiI' />
            <span className="check"></span>
            </label>
            </div>




            <div className='column'>
            <label className='label main' htmlFor="teczkiI" style={{fontSize:'14px'}}>Teczki
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Teczki' id='teczkiI'
            />
            <span className="check"></span>
            </label>
            </div>



            <div className='column'>
            <label className='label main' htmlFor="plakaty" style={{fontSize:'14px'}}>Plakaty
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Plakaty' id='plakaty'
            />
            <span className="check"></span>
            </label>
            </div>



            <div className='column'>
            <label className='label main' htmlFor="katalogiI" style={{fontSize:'14px'}}>Katalogi
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='katalogi' id='katalogiI'
           />
            <span className="check"></span>
            </label>
            </div>


            <div className='column'>
            <label className='label main' htmlFor="publikacje" style={{fontSize:'14px'}}>Publikacje
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Publikacje' id='publikacje'
           />
            <span className="check"></span>
            </label>
            </div>









          </div>

          <div className='columns' style={{marginLeft:'3%'}}>
          <div className='column' style={{maxWidth:'150px'}}>
          <label className='label main' htmlFor="inne" style={{fontSize:'14px'}}>Inne
          <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Inne' id='inne'
          onInput={(event) => {

            if(document.getElementById('i8').style.display == 'none'){
            document.getElementById('i8').style.display = 'block';

            } else {
            document.getElementById('i8').style.display = 'none';

            }
          }} />
          <span className="check"></span>
          </label>
          </div>
          <div className='column'>
            <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne rodzaje...' name='inne' id='i8' style={{display:'none',maxWidth:'350px'}} />
          </div>

        </div>




          <div className="columns">
            <div className='column'>
            <label className='label'>Projekt graficzny:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Projekt graficzny' id='Projekt graficzny wr'
            onChange={this.handleChange}
            >
            <option value="własny">Własny</option>
            <option value="do zrealizaowania">Do zrealizowania</option>


            </select>
            </div>




            <div className='column'>
            <label className='label'>Podłoże wydruku:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Podłoże wydruku' id='podloze wydruku'
            onChange={this.handleChange}
            >
            <option value="Papier kredowy">Papier kredowy</option>
            <option value="Papier ozdobny">Papier ozdobny</option>
            <option value="Papier ekologiczny">Papier ekologiczny</option>
            <option value="inne">inne</option>

            </select>
            </div>

            <div className='column'>
            <label className='label'>Rodzaj zadruku:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Rodzaj zadruku' id='rodzaj zadruku'
            onChange={this.handleChange}
            >
            <option value="CMYK">CMYK</option>
            <option value="PANTONE">PANTONE</option>
            <option value="Folia hotstampling">Folia hotstampling</option>

            </select>
            </div>

            <div className='column'>
            <label className='label'>Rodzaj uszlachetnienia:</label>
            <select 
            className='button-green select-green' as='select'  name='Rodzaj uszlachetnienia' id='rodzaj uszlachetnienia'
            onChange={this.handleChange}
            >
            <option value="Folia mat/błysk">Folia mat/błysk</option>
            <option value="Folia soft-touch">Folia soft-touch</option>
            <option value="Hotstampling">Hotstampling</option>
            <option value="Lakier UV">Lakier UV</option>

            </select>
            </div>
          </div>



          <div className='columns'>


          <div className='column'>
          <label className='label'>Ilość:</label>
            <input className='input' onChange={this.handleChange} placeholder='100' type='number' min="1" name='Ilość' id='ilośćWR' />
          </div>


            <div className='column'>
            <label className='label is-size-10'>Formaty wydruków:</label>
            <input className='input' onChange={this.handleChange} placeholder='A4, A3, A2, A5, B5... ' type='text' name='Formaty' id='formaty' />
            </div>

            <div className='column'>
            <label className='label'>Termin realizacji:</label>
              <input className='button-green date' type='date' name='deadline' id='deadlineII'
              onChange={this.handleChange}
               />
            </div>



          </div>





            <div className="columns">

            <div className='column'>
            <label className='label is-size-10'>Opis produktu:</label>
            <textarea className='textarea' onChange={this.handleChange} placeholder='opis... ' type='text' name='Opis produktu' id='opis' rows='2'></textarea>
            </div>

              <div className='column'>
              <label className='label is-size-10'>Przykładowe realizacje:</label>
              <textarea className='textarea' onChange={this.handleChange} placeholder='opis... '  type='text' name='Przykładowe realizacje' id='przykładowe realizacje' rows='2'></textarea>
              </div>



            </div>





            <div className='columns'>
              <div className='column'>
                <div className='control'>
                <label className='label is-size-10'>Budżet:</label>
                <input style={{width:'100%'}} min='500' placeholder='25000' max='50000' id="range3" className='range' name="budżet" type="range"
                onInput={(event) => {console.log(document.getElementById('range3').value);
                document.getElementById('rvalueid3').innerText = document.getElementById('range3').value + ' zł';
              }} onChange={this.handleChange}
                />
                <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid3" id="rvalueid3">25000 zł</output>

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
                      name="plik"
                      onChange={this.handleAttachment}

                      style={{height:'50px'}}
                      id ="fileinputII"
                    />
                  </label>

                  <sub align="center" style={{position:'absolute',backgroundColor:'#111111',color:'white',padding:'2px',marginLeft:'300px',fontSize:'12px'}}> Maksymalna wielkość<br></br> pliku to <b>1MB</b>. </sub>


                </div>



              </div>

            </div>
          </div>




      {/* Podgląd obrazu wrazie w.  <img onMouseOver={hideimg} style={{backgroundColor:'black',padding:'15px',postion:'fixed',top:'10px',right:'10px',maxWidth:'150px'}} src={''} alt="" id={'myimage'}/> */}
      </div>

          <hr />


                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="Kal" />
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
                          id={'imię i nazwiskoXI'}
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
                            id={'adres emailXI'}
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
                            id={'nrtelXI'}
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
                          id={'wiadomośćXI'}
                          required={true}
                          rows = "7"
                        ></textarea>
                      </div>



                      <br />
                      <div className="control">

                      <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyXI">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyXI" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default WydrukiRek;
