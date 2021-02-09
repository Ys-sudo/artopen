import React from 'react';


function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Filmowanie').style.display = 'none';
  document.getElementById('FilmowanieX').style.display = 'block';
  setTimeout(() => {document.getElementById('FilmowanieX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[12].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[12].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[12].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}

class FilmoWanie extends React.Component {

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
        name="Filmowanie"
        id = "filmform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      {/* Flimy */}

      <input name='Filmowanie' id='filmowanie' className='subtitle' placeholder='Filmowanie:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />
      <div className='field' style={{marginLeft:'18px'}}>

        <div className='columns'>

        <div className='column' style={{marginRight:'10px'}} >

          <label className='label'>Cel stworzenia filmu:</label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Cel stworzenia filmu' id='celfilmu' style={{minWidth:'300px'}}
          onChange={this.handleChange}
          >
          <option value="Promocja produktu lub usługi">Promocja produktu lub usługi </option>
          <option value="Promocja firmy">Promocja firmy </option>
          <option value="Relacja z wydarzenia lub imprezy"> Relacja z wydarzenia lub imprezy</option>
          <option value="Film szkoleniowy lub instruktażowy"> Film szkoleniowy lub instruktażowy</option>
          <option value="Inne"> Inne</option>


          </select>

        </div>

        <div className='column' >

          <label className='label'>Użycie drona:</label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Dron' id='dron'
          onChange={this.handleChange}
          >
          <option value="Nie">Nie</option>
          <option value="Tak">Tak</option>



          </select>

        </div>

        <div className='column' >

          <label className='label'>Scenariusz:</label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Scenariusz' id='Scenariusz'
          onChange={this.handleChange}
          >

          <option value="Do zrealizowania">Do zrealizowania</option>
          <option value="Własny">Własny</option>


          </select>

        </div>


      </div>

      <div className='columns'>

        <div className='column' >
        <label className='label'> Opis filmu: </label>
        <textarea  onChange={this.handleChange} className='textarea' type='text' rows='3'  placeholder='Opisz w kilku słowach film...' name='Opis filmu' id='opis filmu'  />
        </div>

        <div className='column' >
        <label className='label'> Przykładowe realizacje: </label>
        <textarea  onChange={this.handleChange} className='textarea' type='text' rows='3'  placeholder='Wpisz filmy które Ci się podobają...' name='Przykładowe realizacje' id='przykładowe filmy'  />


        </div>



      </div>



      <div className='columns'>

      <div className='column' style={{marginRight:'10px'}}>

      <label className='label'>Długość filmu (min):</label>
      <input className='input' onChange={this.handleChange} placeholder='45' type='number' name='Długość filmu' id='Długość filmu' />
      <br /><br />

      <label className='label'>Grupa docelowa:</label>
      <input className='input' onChange={this.handleChange} placeholder='Dorośli 30+... ' type='text' name='grupa docelowa' id='grupa docelowaIII' />
      <br /><br />
      <label className='label'>Miejsce realizacji:</label>
      <input className='input' onChange={this.handleChange} placeholder='Wrocław... ' type='text' name='Miejsce realizacji filmu' id='Miejsce realizacji filmu' />


      </div>


        <div className='column' >
          <label  className='label is-size-10'>Dodatkowa forma przekazu:</label>
          <br />

        <label htmlFor="animacje2d" className='label main' style={{fontSize:'14px'}}>Animacje 2D
          <input className='checkbox' type='checkbox' name='Animacje 2D' id='animacje2d'
          onChange={this.handleChange} />
          <span className="check"></span>
          </label>

          <label htmlFor="animacje3d" className='label main' style={{fontSize:'14px'}}>Animacje 3D
            <input className='checkbox' type='checkbox' name='Animacje 3D' id='animacje3d'
            onChange={this.handleChange} />
            <span className="check"></span>
            </label>

            <label htmlFor="lektor" className='label main' style={{fontSize:'14px'}}>Lektor
              <input className='checkbox' type='checkbox' name='Lektor' id='lektor'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>

              <label htmlFor="Dodatkowe wersje językowe" className='label main' style={{fontSize:'14px'}}>Dodatkowe wersje językowe
                <input className='checkbox' type='checkbox' name='Dodatkowe wersje językowe' id='Dodatkowe wersje językowe'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>

        </div>

        <div className='column' >

        <label  className='label is-size-10'>Dystrybucja:</label>
        <br />

      <label htmlFor="TV" className='label main' style={{fontSize:'14px'}}>Telewizja
        <input className='checkbox' type='checkbox' name='TV' id='TV'
        onChange={this.handleChange} />
        <span className="check"></span>
        </label>

        <label htmlFor="internet" className='label main' style={{fontSize:'14px'}}>Internet
          <input className='checkbox' type='checkbox' name='internet' id='internet'
          onChange={this.handleChange} />
          <span className="check"></span>
          </label>

          <label htmlFor="innea" className='label main' style={{fontSize:'14px'}}>Inne (billboard, telebim itp.)
            <input className='checkbox' type='checkbox' name='Inne' id='innea'
            onChange={this.handleChange} />
            <span className="check"></span>
            </label>


        </div>





      </div>

      <div className='columns'>


        <div className='column'>
        <label className='label'>Termin realizacji:</label>
          <input className='button-green date' type='date' name='deadline' id='deadlineVI'
          onChange={this.handleChange}
           />
           </div>


           <div className='column'>
             <div className='control'>
             <label className='label is-size-10'>Budżet:</label>
             <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="rangea" className='range' name="budżet" type="range"
             onInput={(event) => {console.log(document.getElementById('rangea').value);
             document.getElementById('rvalueida').innerText = document.getElementById('rangea').value + ' zł';
           }} onChange={this.handleChange}
             />
             <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueida" id="rvalueida">25000 zł</output>

             </div>
           </div>


      </div>






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
                id={'imię i nazwiskoII'}
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
                  id={'adres emailII'}
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
                  id={'nrtelII'}
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
                id={'wiadomośćII'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyII">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyII" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default FilmoWanie;
