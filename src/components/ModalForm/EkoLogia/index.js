import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Ekologia').style.display = 'none';
  document.getElementById('EkologiaX').style.display = 'block';
  setTimeout(() => {document.getElementById('EkologiaX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[1].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[1].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[1].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}

class EkoLogia extends React.Component {

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
        name="Ekologia"
        id = "Ecoform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      <input name='Ekologia' id='ekologia' className='subtitle' placeholder='Ekologia:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />



      <div className='field' style={{marginLeft:'18px'}}>
        <div className='columns'>

          <div className='column'>
            <label className='label main' htmlFor="notes bambus" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='notes bambus' id='notes bambus'
            onInput={(event) => {

              if(document.getElementById('ic1').style.display == 'none'){
              document.getElementById('ic1').style.display = 'block';

              } else {
              document.getElementById('ic1').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/notes-bambus.png" width='100px' />
            <br />
            Notes<br/> Bambus
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość notes bambus' id='ic1' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="lad indukc" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='ładowarka indukcyjna' id='lad indukc'
            onInput={(event) => {

              if(document.getElementById('ic2').style.display == 'none'){
              document.getElementById('ic2').style.display = 'block';

              } else {
              document.getElementById('ic2').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/ladowarka-indukcyjna.png" width='100px' />
            <br />
            Ładowarka<br/> indukcyjna
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość ładowarka indukcyjna' id='ic2' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="stonebook" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='stonebook' id='stonebook'
            onInput={(event) => {

              if(document.getElementById('ic3').style.display == 'none'){
              document.getElementById('ic3').style.display = 'block';

              } else {
              document.getElementById('ic3').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/stonebook.png" width='100px' />
            <br />
            Stonebook<br/> z papieru z kamienia
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość stonebook' id='ic3' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="powerbank" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='powerbank' id='powerbank'
            onInput={(event) => {

              if(document.getElementById('ic4').style.display == 'none'){
              document.getElementById('ic4').style.display = 'block';

              } else {
              document.getElementById('ic4').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/powerbank-sloma-pszeniczna.png" width='100px' />
            <br />
            Powerbank<br/> ze słomy pszenicznej
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość powerbank' id='ic4' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="pendrive" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='pendrive' id='pendrive'
            onInput={(event) => {

              if(document.getElementById('ic5').style.display == 'none'){
              document.getElementById('ic5').style.display = 'block';

              } else {
              document.getElementById('ic5').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/pendrive.png" width='100px' />
            <br />
            Pendrive<br/> z bambusa
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość pendrive' id='ic5' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

        </div>
        <br />
        <div className='columns'>

          <div className='column'>
            <label className='label main' htmlFor="notes duo" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='notes duo' id='notes duo'
            onInput={(event) => {

              if(document.getElementById('id1').style.display == 'none'){
              document.getElementById('id1').style.display = 'block';

              } else {
              document.getElementById('id1').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/duo-wlokna-trawy.png" width='100px' />
            <br />
            Notes Duo<br/> z włókien trawy
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość notes duo' id='id1' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek kuku" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='kubek z kukurydzy' id='kubek kuku'
            onInput={(event) => {

              if(document.getElementById('id2').style.display == 'none'){
              document.getElementById('id2').style.display = 'block';

              } else {
              document.getElementById('id2').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-kuku.png" width='100px' />
            <br />
            Kubek<br/> z kukurydzianego PLA
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość kubek z kukurydzy' id='id2' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek kawa" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Kubek z łusek kawy' id='kubek kawa'
            onInput={(event) => {

              if(document.getElementById('id3').style.display == 'none'){
              document.getElementById('id3').style.display = 'block';

              } else {
              document.getElementById('id3').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-luski-kawy.png" width='100px' />
            <br />
            Kubek<br/> z łusek kawy
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość kubek z łusek kawy' id='id3' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="kubek szklo" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Kubek szklany' id='kubek szklo'
            onInput={(event) => {

              if(document.getElementById('id4').style.display == 'none'){
              document.getElementById('id4').style.display = 'block';

              } else {
              document.getElementById('id4').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/kubek-szklo.png" width='100px' />
            <br />
            Kubek<br/> szklany
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość kubek szklany' id='id4' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

          <div className='column'>
            <label className='label main' htmlFor="glosnik" style={{fontSize:'14px'}}>
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Głośnik z bambusa' id='glosnik'
            onInput={(event) => {

              if(document.getElementById('id5').style.display == 'none'){
              document.getElementById('id5').style.display = 'block';

              } else {
              document.getElementById('id5').style.display = 'none';

              }
            }} />
            <img className='obrazek' src="/img/eco-form/glosnik.png" width='100px' />
            <br />
            Głośnik<br/> z bambusa
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość głośnik z bambusa' id='id5' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />
          </div>

        </div>





      </div>



          <hr />


            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="Ekologia" />
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
                  id={'imię i nazwiskoXb'}
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
                    id={'adres emailXb'}
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
                    id={'nrtelXb'}
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
                  id={'wiadomośćXb'}
                  required={true}
                  rows = "7"
                ></textarea>
              </div>



              <br />
              <div className="control">

              <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyXb">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyXb" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default EkoLogia;
