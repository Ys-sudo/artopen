import React from 'react';

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

  render() {
    return (
      <>

      <input name='Covid-19' id='covid-19' className='subtitle' placeholder='Covid-19:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />
      <br />
      <div className='field' style={{marginLeft:'18px'}}>
      <div className='columns'>

        <div className='column' style={{minWidth:'350px'}}>
          <label className='label main' htmlFor="maseczkawu" style={{fontSize:'14px'}}>Maseczka wielokrotnego użytku z logo
          <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Maseczka z logo' id='maseczkawu'
          onInput={(event) => {

            if(document.getElementById('i13').style.display == 'none'){
            document.getElementById('i13').style.display = 'block';

            } else {
            document.getElementById('i13').style.display = 'none';

            }
          }} />
          <span className="check"></span>
          </label>
          <div id='i13' style={{display:'none'}}>
            <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość maseczek z logo' id='iml' style={{maxWidth:'350px',marginBottom:'20px'}} />
            <label className='label'>Rodzaj materiału:</label>
            <select
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
                <label className="file-label">
                {/*onInput ={(o) => handleInput(o)}*/}
                  <input
                    className="button is-primary"
                    type="file"
                    name="plik"
                    onChange={this.handleAttachment}

                    style={{height:'50px'}}
                    id ="fileinput"
                  />
                </label>

                <sub align="center" style={{position:'absolute',backgroundColor:'#111111',color:'white',padding:'2px',marginLeft:'300px',fontSize:'12px'}}> Maksymalna wielkość<br></br> pliku to <b>1MB</b>. </sub>
                <br />

              </div>


            <br></br>
            </div>
          </div>



          </div>



          <div className='column'>
            <label className='label main' htmlFor="maseczka1" style={{fontSize:'14px'}}>Maseczka jednorazowa
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Maseczka jednorazowa' id='maseczka1'
            onInput={(event) => {

              if(document.getElementById('ib').style.display == 'none'){
              document.getElementById('ib').style.display = 'block';

              } else {
              document.getElementById('ib').style.display = 'none';

              }
            }} />
            <span className="check"></span>
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość maseczek' id='ib' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />







            </div>


            <div className='column'>
            <label className='label main' htmlFor="rękawiczki" style={{fontSize:'14px'}}>Rękawiczki
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Rękawiczki' id='rękawiczki'
            onInput={(event) => {

              if(document.getElementById('i19').style.display == 'none'){
              document.getElementById('i19').style.display = 'block';

              } else {
              document.getElementById('i19').style.display = 'none';

              }
            }} />
            <span className="check"></span>
            </label>

              <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość rękawiczek' id='i19' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />

            </div>



            <div className='column'>
              <label className='label main' htmlFor="płynydez" style={{fontSize:'14px'}}>Płyny dezynfekujące
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Płyny dezynfekujące' id='płynydez'
              onInput={(event) => {

                if(document.getElementById('i15').style.display == 'none'){
                document.getElementById('i15').style.display = 'block';

                } else {
                document.getElementById('i15').style.display = 'none';

                }
              }} />
              <span className="check"></span>
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

                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 50ml' id='i16' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />


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

                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 500ml' id='i17' style={{display:'none',maxWidth:'350px',marginBottom:'20px'}} />

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

                <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='Ilość 1000 ml' id='i18' style={{display:'none',maxWidth:'350px'}} />



                </div>
              </div>







        </div>

        {/*<div className="columns">
          <div className='column'>
          <label className='label main' htmlFor="gadzetyanty" style={{fontSize:'14px'}}>Gadżety z powierzchnią antybakteryjną
          <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Gadżety z powierzchnią antybakteryjną' id='gadzetyanty'
           />
          <span className="check"></span>
          </label>

          </div>
        </div>
        */}
      </div>
          <hr />



      </>
    )
  }
}

export default CoVid19;
