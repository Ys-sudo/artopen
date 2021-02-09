import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Opakowania').style.display = 'none';
  document.getElementById('OpakowaniaX').style.display = 'block';
  setTimeout(() => {document.getElementById('OpakowaniaX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[13].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[13].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[13].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}

class OpaKowania extends React.Component {

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
        name="Opakowania"
        id = "opakowaniaform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      {/* Opakowania */}

      <input name='Opakowania' id='opakowania' className='subtitle' placeholder='Opakowania:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

        <div className='field' style={{marginLeft:'18px'}}>




        <div className='columns'>
        <div className='column'>
        <div className='control'>
        <label className='label'>Ilość opakowań:</label>

          <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' placeholder='100' name='Ilość opakowań' id='iloscop' />
        </div>
        </div>

        <div className='column'>
        <label className='label'> Wymiary opakowania (cm): </label>
          <div style={{display:'flex'}}>
          <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='wysokość' name='wysokość(cm)' id='wysokość(cm)' style={{display:'block',maxWidth:'150px'}} />
          <label className='label'>&nbsp; x &nbsp;</label>
          <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='szerokość' name='szerokość(cm)' id='szerokość(cm)' style={{display:'block',maxWidth:'150px'}} />
          <label className='label'>&nbsp; x &nbsp;</label>
          <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='głębokość' name='głębokość(cm)' id='głębokość(cm)' style={{display:'block',maxWidth:'150px'}} />
          </div>
        </div>
        </div>


        <div className="columns">

          <div className='column'>
          <label className='label'> Rodzaj opakowania: </label>
          <select
          className='button-green select-green' as='select'  name='Rodzaj opakowania' id='Rodzaj opakowania'
          onChange={this.handleChange}
          >
          <option value="Tak">Pudełka fasonowe</option>
          <option value="Nie">Pudełka premium</option>
          <option value="Nie">Pudełka produktowe</option>


          </select>

          </div>

          <div className='column'>
          <label className='label'> Sposób znakowania: </label>
          <select
          className='button-green select-green' as='select'  name='Sposób znakowania' id='Sposób znakowania'
          onChange={this.handleChange}
          >
          <option value="Tak">Nadruk full kolor</option>
          <option value="Nie">Folia hotstampling</option>
          <option value="Nie">Banderola</option>
          <option value="Nie">Inne</option>


          </select>

          </div>


          <div className='column'>
          <label className='label'> Wykrojnik: </label>
          <select
          className='button-green select-green' as='select'  name='Wykrojnik' id='Wykrojnik'
          onChange={this.handleChange}
          >
          <option value="Własny">Własny</option>
          <option value="Nowy">Nowy</option>



          </select>

          </div>

          <div className='column'>
          <label className='label'> Projekt graficzny: </label>
          <select
          className='button-green select-green' as='select'  name='Projekt graficzny' id='Projekt graficznyOp'
          onChange={this.handleChange}
          >
          <option value="Własny">Własny</option>
          <option value="Do zrealizowania">Do zrealizowania</option>



          </select>

          </div>



        </div>


        <div className="columns">
          <div className='column'>
          <label className='label'>Termin realizacji:</label>
            <input className='button-green date' type='date' name='deadline' id='deadlineVII'
            onChange={this.handleChange}
             />
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
                    id ="fileinputVI"
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
                id={'imię i nazwiskoVI'}
                required={true}
              />
            </div>
            </div>

            <div className="field">
              <label className="label" htmlFor={'email'}>
                E-mail<sup>*</sup>:
              </label>
              <div className="control">
                <input
                  className="input"
                  type={'email'}
                  name={'adres email'}
                  onChange={this.handleChange}
                  id={'adres emailVI'}
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
                  id={'nrtelVI'}
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
                id={'wiadomośćVI'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyVI">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyVI" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default OpaKowania;
