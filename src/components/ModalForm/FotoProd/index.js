import React from 'react';

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Fotografiaproduktowa').style.display = 'none';
  document.getElementById('FotografiaproduktowaX').style.display = 'block';
  setTimeout(() => {document.getElementById('FotografiaproduktowaX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[10].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[10].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[10].firstChild.style.filter = 'brightness(1) invert(0)';

  },1500);
}


class FotoProd extends React.Component {

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
        name="Fotografia"
        id = "fotografiaform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
      <input name='Fotografia produktowa' id='fotoprod' className='subtitle' placeholder='Fotografia Produktowa:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />
        <div className='field' style={{marginLeft:'18px'}}>




          <label className='label'>Rodzaj sesji:</label>
          <br />
          <div className='control columns' style={{width:'100%',marginLeft:'3%'}}>



                <div className="column">

                <label className='label main' htmlFor="fotprod" style={{fontSize:'14px'}}>Fotografie produktowe
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Fotografie produktowe' id='fotprod'
                />
                <span className="check"></span>
                </label>





                <label className='label main' htmlFor="Ludzie" style={{fontSize:'14px'}}>Ludzie
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Ludzie' id='Ludzie'
               />
                <span className="check"></span>
                </label>




                <label className='label main' htmlFor="budynki" style={{fontSize:'14px'}}>Budynki
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Budynki' id='budynki'
               />
                <span className="check"></span>
                </label>


                </div>
                <div className="column">

                <label className='label main' htmlFor="aran" style={{fontSize:'14px'}}>Aranżacje
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Aranżacje' id='aran'
               />
                <span className="check"></span>
                </label>


                <label className='label main' htmlFor="z360" style={{fontSize:'14px'}}>Zdjęcia 360
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Zdjęcia 360' id='z360'
               />
                <span className="check"></span>
                </label>




                <label className='label main' htmlFor="inneIII" style={{fontSize:'14px'}}>Inne
                <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Inne' id='inneIII'
                onInput={(event) => {

                  if(document.getElementById('i9').style.display == 'none'){
                  document.getElementById('i9').style.display = 'block';

                  } else {
                  document.getElementById('i9').style.display = 'none';

                  }
                }} />
                <span className="check"></span>
                </label>

                  <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne rodzaje...' name='inne' id='i9' style={{display:'none',maxWidth:'350px'}} />

                </div>
              </div>


              <div className="columns">

              <div className='column'>
              <label className='label'> Opis sesji: </label>
              <textarea  onChange={this.handleChange} className='textarea' type='text' rows='2'  placeholder='Opisz w kilku słowach sesję...' name='Opis sesji' id='opis sesji'  />
              </div>


                <div className='column'>
                <label className='label'>Opis fotografowanego obiektu:</label>
                <textarea className='textarea' onChange={this.handleChange} placeholder='Opisz obiekt w paru słowach... ' rows='2' type='text' name='Opis produktu' id='opis produktu'></textarea>
                </div>



              </div>
              <div className="columns">



                <div className='column'>
                <label className='label'>Miejsce sesji:</label>
                <select
                className='button-green select-green' as='select'  name='Miejsce sesji' id='miejsce'
                onChange={this.handleChange}
                >
                <option value="Wykonywane u klienta">Wykonywane u Klienta</option>
                <option value="Wykonywane w Studio">Wykonywane w Studio</option>
                <option value="Inne">Inne</option>


                </select>
                </div>

                <div className='column'>
                <label className='label'>Obróbka zdjęć:</label>
                <select
                className='button-green select-green' as='select'  name='Obróbka zdjęć' id='obróbka'
                onChange={this.handleChange}
                >
                <option value="Tak">Tak</option>
                <option value="Nie">Nie</option>



                </select>
                </div>

                <div className='column'>

                <div className='control'>
                <label className='label'>Szacowana ilość zdjęć:</label>

                  <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' placeholder='100' name='Ilość zdjęć' id='ilosczdj' />
                </div>
                </div>

                <div className="column">
                <label className='label is-size-10'>Grupa docelowa:</label>
                <input className='input' onChange={this.handleChange} placeholder='Dorośli 30+... ' type='text' name='grupa docelowa' id='grupa docelowaII' />
                <br /><br />
                </div>

              </div>

              <div className="columns">

                <div className='column'>
                <label className='label'>Termin realizacji:</label>
                  <input className='button-green date' type='date' name='deadline' id='deadlineIV'
                  onChange={this.handleChange}
                   />
                </div>

                <div className='column'>
                <label className='label'>Przykładowe realizacje:</label>
                <textarea className='textarea' onChange={this.handleChange} placeholder='Sesje fotograficzne które Ci się podobają... ' type='text' name='Przykładowe sesje' id='przykładowe sesje'></textarea>
                </div>




              </div>



              <div className="columns">

                <div className='column'>
                  <div className='control'>
                  <label className='label is-size-10'>Budżet:</label>
                  <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="range5" className='range' name="budżet" type="range"
                  onInput={(event) => {console.log(document.getElementById('range5').value);
                  document.getElementById('rvalueid5').innerText = document.getElementById('range5').value + ' zł';
                }} onChange={this.handleChange}
                  />
                  <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid5" id="rvalueid5">25000 zł</output>

                  </div>
              <br />

            {/* Podgląd obrazu wrazie w.  <img onMouseOver={hideimg} style={{backgroundColor:'black',padding:'15px',postion:'fixed',top:'10px',right:'10px',maxWidth:'150px'}} src={''} alt="" id={'myimage'}/> */}


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
                          id ="fileinputIV"
                        />
                      </label>

                      <sub align="center" style={{position:'absolute',backgroundColor:'#111111',color:'white',padding:'2px',marginLeft:'300px',fontSize:'12px'}}> Maksymalna wielkość<br></br> pliku to <b>1MB</b>. </sub>
                      <br />

                    </div>


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
                id={'imię i nazwiskoIII'}
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
                  id={'adres emailIII'}
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
                  id={'nrtelIII'}
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
                id={'wiadomośćIII'}
                required={true}
                rows = "7"
              ></textarea>
            </div>



            <br />
            <div className="control">

            <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyIII">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyIII" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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

export default FotoProd;
