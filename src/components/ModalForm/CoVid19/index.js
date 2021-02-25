import React from 'react';



function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}


function quitModal(){
  document.getElementById('COVID-19').style.display = 'none';
  document.getElementById('COVID-19X').style.display = 'block';
  setTimeout(() => {document.getElementById('COVID-19X').style.display = 'none';
  document.getElementsByClassName('ofnav1')[0].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[0].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[0].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}



class CoVid19 extends React.Component {

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
        name="Covid-19"
        id = "covid"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

      <input name='Covid-19' id='covid-19' className='subtitle' placeholder='Covid-19:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />
      <br />
      <div className='field' style={{marginLeft:'18px'}}>
      <div className='columns'>

        <div className='column cv1'>
          <label className='label main' htmlFor="maseczkawu" style={{fontSize:'14px'}}>
          <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Maseczka z logo' id='maseczkawu'
          onInput={(event) => {

            if(document.getElementById('i13').style.display == 'none'){
            document.getElementById('i13').style.display = 'block';

            } else {
            document.getElementById('i13').style.display = 'none';

            }
          }} />
          <img className='obrazek' src="/img/covid-form/maseczka.png" width='100px' />
          <br />
          Maseczka wielokrotnego<br />
          użytku z logo
          </label>
          <div id='i13' style={{display:'none'}}>
            <label className="label">Ilość:</label>
            <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość maseczek z logo' id='iml' style={{maxWidth:'350px',marginBottom:'20px'}} />
            <label className='label'>Rodzaj materiału:</label>
            <select selected="selected"
            className='button-green select-green' as='select'  name='Rodzaj materiału:' id='materiał'
            onChange={this.handleChange} style={{marginBottom:'20px'}}
            >
            <option value="Bawełna">Bawełna</option>
            <option value="Elastyna">Elastyna</option>

            </select>


            <div className='control'>
            <label className='label is-size-10'>Załącz logo:</label>
            {/*załącz logo*/}


              <div className="file">
                <label className="file-label" style={{width:'100%',cursor:'pointer'}}>
                {/*onInput ={(o) => handleInput(o)}*/}
                  <input
                    className="custom-file-input"
                    type="file"
                    name="plik"
                    style={{cursor:'pointer'}}
                    onChange={this.handleAttachment}
                    id ="fileinput"
                  />
                </label>

              </div>
              <br />
              <p style={{textAlign:'center',backgroundColor:'#111111',color:'white',padding:'2px',fontSize:'12px'}}> Maksymalna wielkość pliku to <b>1MB</b>. </p>

            </div>
          </div>



          </div>



          <div className='column'>
            <label className='label main' htmlFor="maseczka1" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Maseczka jednorazowa' id='maseczka1'
            onInput={(event) => {

              if(document.getElementById('ib').style.display == 'none'){
              document.getElementById('ib').style.display = 'block';

              } else {
              document.getElementById('ib').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/maseczka-jednorazowa.png" width='100px' />
            <br />
            Maseczka <br/> jednorazowa
            </label>
              <div id='ib' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' id='il1' name='ilość maseczek' />
              </div>






            </div>


            <div className='column'>
            <label className='label main' htmlFor="rękawiczki" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Rękawiczki' id='rękawiczki'
            onInput={(event) => {

              if(document.getElementById('i19').style.display == 'none'){
              document.getElementById('i19').style.display = 'block';

              } else {
              document.getElementById('i19').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/rekawiczki.png" width='100px' />
            <br />
            Rękawiczki <br /><br />
            </label>
            <div id='i19' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość rękawiczek' id='il2'  />
            </div>
            </div>



            <div className='column'>
              <label className='label main' htmlFor="płynydez" style={{fontSize:'14px'}}>
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Płyny dezynfekujące' id='płynydez'
              onInput={(event) => {

                if(document.getElementById('i15').style.display == 'none'){
                document.getElementById('i15').style.display = 'block';

                } else {
                document.getElementById('i15').style.display = 'none';

                }
              }} />
              <img className='obrazek' src="/img/covid-form/bacler.png" width='100px' />
              <br />
              Płyny <br /> dezynfekujące
              </label>
                <div id="i15" style={{display:'none'}}>

                <label className='label main' htmlFor="płynydez50" style={{fontSize:'14px'}}>50 ml
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='50 ml' id='płynydez50'
                onInput={(event) => {

                  if(document.getElementById('i16').style.display == 'none'){
                  document.getElementById('i16').style.display = 'block';

                  } else {
                  document.getElementById('i16').style.display = 'none';

                  }
                }} />
                <span className="check"></span>
                </label>
                <div id='i16' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
                <label className="label">Ilość:</label>
                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 50ml' id='il3' />
                </div>

                <label className='label main' htmlFor="płynydez500" style={{fontSize:'14px'}}>500 ml
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='500 ml' id='płynydez500'
                onInput={(event) => {

                  if(document.getElementById('i17').style.display == 'none'){
                  document.getElementById('i17').style.display = 'block';

                  } else {
                  document.getElementById('i17').style.display = 'none';

                  }
                }} />
                <span className="check"></span>
                </label>
                <div id='i17' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
                <label className="label">Ilość:</label>
                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 500ml' id='il4' />
                </div>
                <label className='label main' htmlFor="płynydez1000" style={{fontSize:'14px'}}>1000 ml
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='1000 ml' id='płynydez1000'
                onInput={(event) => {

                  if(document.getElementById('i18').style.display == 'none'){
                  document.getElementById('i18').style.display = 'block';

                  } else {
                  document.getElementById('i18').style.display = 'none';

                  }
                }} />
                <span className="check"></span>
                </label>
                <div id='i18' style={{display:'none',maxWidth:'350px'}}>
                <label className="label">Ilość:</label>
                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 1000 ml' id='il5' />
                </div>


                </div>
              </div>


        </div>


      </div>

      <br />

      <div className='field' style={{marginLeft:'18px'}}>
        <div className='columns'>

          <div className='column'>
            <label className='label main' htmlFor="notouchit" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Notouchit' id='notouchit'
            onInput={(event) => {

              if(document.getElementById('ib1').style.display == 'none'){
              document.getElementById('ib1').style.display = 'block';

              } else {
              document.getElementById('ib1').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/notouchit.png" width='100px' />
            <br />
            Uchwyt<br/> NoTouchIt
            </label>
            <div id='ib1' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość notouchit' id='il6' />
            </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="Neilo clean" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Neilo clean' id='Neilo clean'
            onInput={(event) => {

              if(document.getElementById('ib2').style.display == 'none'){
              document.getElementById('ib2').style.display = 'block';

              } else {
              document.getElementById('ib2').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/dlugopis-neilo-clean.png" width='100px' />
            <br />
            Długopis<br/> Neilo Clean
            </label>
            <div id='ib2' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość neilo clean' id='il7' />
            </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="Rio clean" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Rio clean' id='Rio clean'
            onInput={(event) => {

              if(document.getElementById('ib3').style.display == 'none'){
              document.getElementById('ib3').style.display = 'block';

              } else {
              document.getElementById('ib3').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/dlugopis-rio-clean.png" width='100px' />
            <br />
            Długopis<br/> Rio Clean
            </label>
            <div id='ib3' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość rio clean' id='il8' />
            </div>
          </div>

          <div className='column'>
            <label className='label main' htmlFor="Rio spray" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Rio spray' id='Rio spray'
            onInput={(event) => {

              if(document.getElementById('ib4').style.display == 'none'){
              document.getElementById('ib4').style.display = 'block';

              } else {
              document.getElementById('ib4').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/covid-form/dlugopis-rio-spray.png" width='100px' />
            <br />
            Długopis<br/> Rio Spray
            </label>
              <div id='ib4' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}}>
              <label className="label">Ilość:</label>
              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość rio spray' id='il9' />
              </div>
          </div>

        </div>
      </div>

      <hr />



          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="Covid-19" />
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
                id={'imię i nazwisko'}
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
                  id={'adres email'}
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
                  id={'nrtel'}
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
                id={'wiadomość'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacy">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacy" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>

            </div>

            <div className="field" style={{textAlign:'right'}}>


              <button className="button is-primary" type="submit" onSubmit={this.handleSubmit} onClick={showFileSize}>
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

function showFileSize() {
let fileinput = document.getElementById('fileinput');

let file = fileinput.files[0];

if (file !== undefined){
console.log(file.size);
}

}

export default CoVid19;
