import React from 'react'
import OffNav from '../OffNav'
import { navigate } from 'gatsby-link'


import CoVid19 from '../CoVid19'
import EkoLogia from '../EkoLogia'
import BranDing from '../BranDing'
import ProjGraf from '../ProjGraf'
import StronyW from '../StronyW'

import KalKsia from '../KalKsia'
import KalFirm from '../KalFirm'
import GadzetyRek from '../GadzetyRek'
import WydrukiRek from '../WydrukiRek'
import RekZew from '../RekZew'

import FotoProd from '../FotoProd'
import WystaWien from '../WystaWien'
import FilmoWanie from '../FilmoWanie'
import OpaKowania from '../OpaKowania'
import VirReal from '../VirReal'



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

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}


function disableEmptyInputs() {
  let form = document.getElementById('zamowienieA');
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
        name="ZamówienieA"
        id = "zamowienieA"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        style={{marginRight:'5%', marginLeft:'5%',marginBottom:'100px'}}
      >

      {/* COVID 19 */}

      <div className='columns'  id='COVID-19' style={{display:'none'}}>
      <CoVid19 />
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
          <div className='column'>
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
                id={'wiadomość'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacy">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacy" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label><br></br><br></br>

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


export { ModalForm }
