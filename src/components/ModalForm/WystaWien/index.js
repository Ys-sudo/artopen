import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Wystawiennictwo').style.display = 'none';
  document.getElementById('WystawiennictwoX').style.display = 'block';
  setTimeout(() => {document.getElementById('WystawiennictwoX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[11].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[11].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[11].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}


class WystaWien extends React.Component {

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
      //disableEmptyInputs();

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
        name="Wystawiennictwo"
        id = "Wystawiennictwoform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      {/* Wystawiennictwo */}

      <input name='Wystawiennictwo' id='Wystawiennictwo' className='subtitle' placeholder='Wystawiennictwo:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />
        <div className='field' style={{marginLeft:'18px'}}>
        <div className="columns">

        <div className='control column' style={{width:'100%',marginLeft:'3%'}}>
        <label className='label'>Forma wydarzenia:</label>
        <br />




              <label className='label main' htmlFor="targi" style={{fontSize:'14px'}}>Targi
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='targi' id='targi'
              />
              <span className="check"></span>
              </label>





              <label className='label main' htmlFor="Konferencja" style={{fontSize:'14px'}}>Konferencja
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Konferencja' id='Konferencja'
             />
              <span className="check"></span>
              </label>




              <label className='label main' htmlFor="Event" style={{fontSize:'14px'}}>Event
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Event' id='Event'
             />
              <span className="check"></span>
              </label>





              <label className='label main' htmlFor="inneIIII" style={{fontSize:'14px'}}>Inne
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Inne' id='inneIIII'
              onInput={(event) => {

                if(document.getElementById('i10').style.display == 'none'){
                document.getElementById('i10').style.display = 'block';

                } else {
                document.getElementById('i10').style.display = 'none';

                }
              }} />
              <span className="check"></span>
              </label>

                <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne rodzaje...' name='inne' id='i10' style={{display:'none',maxWidth:'350px'}} />




        </div>





        <div className='control column' style={{display:'block', width:'100%',marginLeft:'3%'}}>
        <label className='label'>Rodzaj stoiska:</label>
        <br />




              <label className='label main' htmlFor="rollup" style={{fontSize:'14px'}}>Rollup
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Rollup' id='rollup'
              />
              <span className="check"></span>
              </label>





              <label className='label main' htmlFor="scianka" style={{fontSize:'14px'}}>Ścianka reklamowa
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Ścianka reklamowa' id='scianka'
             />
              <span className="check"></span>
              </label>



              <label className='label main' htmlFor="Stoisko" style={{fontSize:'14px'}}>Zabudowane stoisko
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Zabudowane stoisko' id='Stoisko'
             />
              <span className="check"></span>
              </label>




              <label className='label main' htmlFor="inneV" style={{fontSize:'14px'}}>Inne
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Inne' id='inneV'
              onInput={(event) => {

                if(document.getElementById('i11').style.display == 'none'){
                document.getElementById('i11').style.display = 'block';

                } else {
                document.getElementById('i11').style.display = 'none';

                }
              }} />
              <span className="check"></span>
              </label>

                <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne rodzaje...' name='inne' id='i11' style={{display:'none',maxWidth:'350px'}} />




        </div>

        <div className='control column' style={{width:'100%',marginLeft:'3%'}}>
        <label className='label'>Wyposażenie:</label>
        <br />





              <label className='label main' htmlFor="Multimedia" style={{fontSize:'14px'}}>Multimedia
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Multimedia' id='Multimedia'
              onInput={(event) => {

                if(document.getElementById('i13a').style.display == 'none'){
                document.getElementById('i13a').style.display = 'block';

                } else {
                document.getElementById('i13a').style.display = 'none';

                }
              }}
              />
              <span className="check"></span>
              </label>
                <input  onChange={this.handleChange} className='input' type='text' placeholder='Jakie...' name='inne' id='i13a' style={{display:'none',maxWidth:'350px',marginBottom:'15px'}} />




              <label className='label main' htmlFor="Meble" style={{fontSize:'14px'}}>Meble
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Meble' id='Meble'
              onInput={(event) => {

                if(document.getElementById('i14').style.display == 'none'){
                document.getElementById('i14').style.display = 'block';

                } else {
                document.getElementById('i14').style.display = 'none';

                }
              }}
             />
              <span className="check"></span>
              </label>
                <input  onChange={this.handleChange} className='input' type='text' placeholder='Jakie...' name='inne' id='i14' style={{display:'none',maxWidth:'350px',marginBottom:'15px'}} />




                  <label className='label main' htmlFor="inneVI" style={{fontSize:'14px'}}>Wyposażenie dodatkowe
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Wyposażenie dodatkowe' id='inneVI'
                  onInput={(event) => {

                    if(document.getElementById('i12').style.display == 'none'){
                    document.getElementById('i12').style.display = 'block';

                    } else {
                    document.getElementById('i12').style.display = 'none';

                    }
                  }} />
                  <span className="check"></span>
                  </label>

                    <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne wyposażenie...' name='inne' id='i12' style={{display:'none',maxWidth:'350px',marginBottom:'15px'}} />



            </div>
          </div>
        <div className='columns'>
          <div className='column'>
          <label className='label'> Wymiary stoiska (m): </label>
            <div style={{display:'flex'}}>
            <input  onChange={this.handleChange} className='input' type='number' min="0" placeholder='wysokość' name='wysokość(m)' id='wysokośćI(m)' style={{display:'block',maxWidth:'150px'}} />
            <label className='label'>&nbsp; x &nbsp;</label>
            <input  onChange={this.handleChange} className='input' type='number' min="0" placeholder='szerokość' name='szerokość(m)' id='szerokośćI(m)' style={{display:'block',maxWidth:'150px'}} />
            <label className='label'>&nbsp; x &nbsp;</label>
            <input  onChange={this.handleChange} className='input' type='number' min="0" placeholder='długość' name='długość(m)' id='długośćI(m)' style={{display:'block',maxWidth:'150px'}} />
            </div>
          </div>
          <div className='column'>
          <label className='label'> Powierzchnia (m<sup>2</sup>): </label>
            <div style={{display:'flex'}}>
            <input  onChange={this.handleChange} className='input' type='number' min="0" placeholder='powierzchnia' name='powierzchnia(m)' id='powierzchnia(m)' style={{display:'block',maxWidth:'150px'}} />
            </div>
          </div>



        </div>

        <div className='columns'>

        <div className='column'>
          <label className='label'> Rodzaj zabudowy: </label>
          <select
          className='button-green select-green' as='select'  name='Rodzaj zabudowy' id='Rodzaj zabudowy'
          onChange={this.handleChange}
          >
          <option value="Szeregowa">Szeregowa</option>
          <option value="Narożna">Narożna</option>
          <option value="Wyspowa">Wyspowa</option>
          <option value="Powierzchnia">Powierzchnia</option>

          </select>
        </div>
        <div className='column'>

          <label className='label'> Oprawa graficzna: </label>
          <select selected="selected"
          className='button-green select-green' as='select'  name='Oprawa graficzna' id='Oprawa graficzna'
          onChange={this.handleChange}
          >
          <option value="Do realizacji">Do realizacji</option>
          <option value="Własna">Własna</option>



          </select>
          </div>
          <div className='column'>

          <label className='label'>Termin realizacji:</label>
            <input className='button-green date' type='date' name='deadline' id='deadlineV'
            onChange={this.handleChange}
             />

        </div>















        </div>

        <div className="columns">

          <div className='column'>
            <div className='control'>
            <label className='label is-size-10'>Budżet:</label>
            <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="range6" className='range' name="budżet" type="range"
            onInput={(event) => {console.log(document.getElementById('range6').value);
            document.getElementById('rvalueid6').innerText = document.getElementById('range6').value + ' zł';
          }} onChange={this.handleChange}
            />
            <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid6" id="rvalueid6">25000 zł</output>

            </div>
        <br />

      {/* Podgląd obrazu wrazie w.  <img onMouseOver={hideimg} style={{backgroundColor:'black',padding:'15px',postion:'fixed',top:'10px',right:'10px',maxWidth:'150px'}} src={''} alt="" id={'myimage'}/> */}


          </div>

          <div className='column'>
          <div className='control'>
          <label className='label is-size-10'>Załącz plik:</label>
          {/*załącz logo*/}


            <div className="file">
              <label className="file-label" style={{width:'100%',cursor:'pointer'}}>
              {/*onInput ={(o) => handleInput(o)}*/}
                <input
                  className="custom-file-input"
                  type="file"
                  name="plik"
                  style={{width:'100%',cursor:'pointer'}}
                  onChange={this.handleAttachment}
                  id ="fileinputV"
                />
              </label>

            </div>
            <br />
            <p align="center" style={{backgroundColor:'#111111',color:'white',padding:'2px',fontSize:'12px'}}> Maksymalna wielkość pliku to <b>1MB</b>. </p>

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
                id={'imię i nazwiskoXII'}
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
                  id={'adres emailXII'}
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
                  id={'nrtelXII'}
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
                id={'wiadomośćXII'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyXII">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyXII" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default WystaWien;
