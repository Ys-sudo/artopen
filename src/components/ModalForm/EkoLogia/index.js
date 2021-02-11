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
