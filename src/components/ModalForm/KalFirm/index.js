import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Kalendarzefirmowe').style.display = 'none';
  document.getElementById('KalendarzefirmoweX').style.display = 'block';

  setTimeout(() => {
  document.getElementById('KalendarzefirmoweX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[6].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[6].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[6].firstChild.style.filter = 'brightness(1) invert(0)';
  },1500);

}


class KalFirm extends React.Component {

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
        name="Kalendarze firmowe"
        id = "Kalfirmform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

      <input name='Kalendarze firmowe' id='kalfirm' className='subtitle' placeholder='Kalendarze firmowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />
      <div className='field' style={{marginLeft:'18px'}}>




      <div className='columns'>

      <div className='control column'>

      <label className='label'>Ilość:</label>

        <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' placeholder='100' name='Ilość kalendarzy' id='ilosckf' />
      </div>
      <br />

      <div className='column'>
          <label className='label'>Typ kalendarza:</label>

          <select selected="selected"
          className='button-green select-green' as='select'  name='Typ kalendarza' id='typ'
          onChange={this.handleChange}
          onInput={(event) => {
          console.log(event.target.value);
            if((event.target.value == 'biurkowy') ||(event.target.value == 'planszowy')
            || (event.target.value == 'listkowy')){
              document.getElementById('glowka').style.display = 'none';
            } else {
              document.getElementById('glowka').style.display = 'block';
            }
          }}
          >
          <option value="jednodzielny">jednodzielny</option>
          <option value="dwudzielny">dwudzielny</option>
          <option value="trójdzielny">trójdzielny</option>
          <option value="czterodzielny">czterodzielny</option>

          <option value="biurkowy">biurkowy</option>
          <option value="planszowy">planszowy</option>
          <option value="listkowy">listkowy</option>

          </select>


          <br />
        </div>
        <div className='column' >
          <div id='glowka'>
          <label className='label'>Rodzaj główki:</label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Rodzaj główki' id='rodzaj głowki'
          onChange={this.handleChange}
          >
          <option value="płaska">płaska</option>
          <option value="wypukła">wypukła</option>
          <option value="eco">eco</option>


          </select>
          </div>
        </div>


        </div>



        <div className='columns'>
          <div className='column'>
            <label className='label'>Kalendarium:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Kalendarium' id='Kalendarium'
            onChange={this.handleChange}
            onInput={(event) => {
            console.log(event.target.value);
              if(event.target.value == 'indywidualne'){
                document.getElementById('kalendariumI').style.display = 'block';
              } else {
                document.getElementById('kalendariumI').style.display = 'none';
              }
            }}
            >
            <option value="standardowe">standardowe</option>
            <option value="indywidualne">indywidualne</option>
            </select>
          </div>

          <div className='column'>
            <label className='label'>Okienko:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Okienko' id='okienko'
            onChange={this.handleChange}
            >
            <option value="standardowe">standardowe</option>
            <option value="indywidualne">indywidualne</option>
            </select>


          </div>

          <div className='column'>


          <label className='label'>Projekt:</label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Projekt' id='proj'
          onChange={this.handleChange}
          >
          <option value="Własny">Własny</option>
          <option value="Zlecam wykonanie">Zlecam wykonanie</option>
          </select>


          </div>

        </div>


            <div id='kalendariumI' style={{display:'none'}}>
            <label className='label'>Specyfikacja dni wolnych:</label>
            <br />
            <div className='control columns' id='dniwolne' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>

                <div className='column'>
                  <label htmlFor="imieniny" className='label main' style={{fontSize:'14px'}}>Imieniny
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Imieniny' id='imieniny' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label htmlFor="swietaPL" className='label main' style={{fontSize:'14px'}}>Święta PL
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta PL' id='swietaPL' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label className='label main' htmlFor="swietaEU" style={{fontSize:'14px'}}>Święta EU
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta EU' id='swietaEU' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label className='label main' htmlFor="niestandarodwe" style={{fontSize:'14px'}}>Święta niestandardowe
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta niestandardowe' id='niestandarodwe' />
                  <span className="check"></span>
                  </label>
                </div>

            </div>
          </div>

        <label className='label'>Uszlachetnienia:</label>
        <br />
        <div className='control columns' id='UszlachetnieniaIII' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
          <div className='column'>
              <label htmlFor="HotstamplingII" className='label main' style={{fontSize:'14px'}}>Hotstampling
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Hotstampling' id='HotstamplingII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="lakieruvII" style={{fontSize:'14px'}}>Lakier UV<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Lakier UV' id='lakieruvII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label htmlFor="folia blyskII" className='label main' style={{fontSize:'14px'}}>Folia błysk<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia błysk' id='folia blyskII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label htmlFor="folia matII" className='label main' style={{fontSize:'14px'}}>Folia mat<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia mat' id='folia matII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="foliasoftII" style={{fontSize:'14px'}}>Folia soft touch<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia soft touch' id='foliasoftII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="ecopapierII" style={{fontSize:'14px'}}>Eco papier<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Eco Papier' id='ecopapierII' />
              <span className="check"></span>
              </label>
            </div>

        </div>














      </div>
          <hr />


              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="Kalendarze firmowe" />
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
                    id={'imię i nazwiskoIV'}
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
                      id={'adres emailIV'}
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
                      id={'nrtelIV'}
                    />
                  </div>
                </div>


              </div>

              <div className="field column" style={{marginLeft:'15px'}}>
                <label className="label" htmlFor={'message'}>
                  Wiadomość<sup>*</sup>:
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    type={'text'}
                    name={'wiadomość'}
                    onChange={this.handleChange}
                    id={'wiadomośćIV'}
                    required={true}
                    rows = "7"
                  ></textarea>
                </div>



                <br />
                <div className="control">

                <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyIV">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyIV" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default KalFirm;
