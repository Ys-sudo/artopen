import React from 'react';


class VirReal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <>
      {/* VR */}

      <input name='Wirtualna rzeczywistość' id='Wirtualna rzeczywistość' className='subtitle' placeholder='Wirtualna rzeczywistość:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',minWidht:'100%'}} />

      <div className='field' style={{marginLeft:'18px'}}>




        <label className='label'>Zakres projektu:</label>
        <br />
        <div className='control columns' style={{width:'100%',marginLeft:'3%'}}>



              <div className="column">

              <label className='label main' htmlFor="vr" style={{fontSize:'14px'}}>Virtual Reality (VR)
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='VR' id='vr'
              />
              <span className="check"></span>
              </label>





              <label className='label main' htmlFor="ar" style={{fontSize:'14px'}}>Augumented Reality (AR)
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='AR' id='ar'
             />
              <span className="check"></span>
              </label>




              <label className='label main' htmlFor="produkty3d" style={{fontSize:'14px'}}>Produkty 3D
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Produkty 3D' id='produkty3d'
             />
              <span className="check"></span>
              </label>


              </div>
              <div className="column">

              <label className='label main' htmlFor="vrspacer" style={{fontSize:'14px'}}>Wirtualne spacery
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Wirtualne spacery' id='vrspacer'
             />
              <span className="check"></span>
              </label>


              <label className='label main' htmlFor="z360vr" style={{fontSize:'14px'}}>Zdjęcia 360
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Zdjęcia 360' id='z360vr'
             />
              <span className="check"></span>
              </label>




              <label className='label main' htmlFor="webvr" style={{fontSize:'14px'}}>Web VR
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Web VR' id='webvr'
               />
              <span className="check"></span>
              </label>
              </div>



            </div>


            <div className="columns">

            <div className='column'>
            <label className='label'> Opis projektu: </label>
            <textarea  onChange={this.handleChange} className='textarea' type='text' rows='2'  placeholder='Opisz w kilku słowach projekt...' name='Opis projektu' id='opis projektu'  />
            </div>


              <div className='column'>
              <label className='label'>Przykładowe realizacje:</label>
              <textarea className='textarea' onChange={this.handleChange} placeholder='Podaj przykładowe projekty... ' rows='2' type='text' name='Opis produktu' id='opis produktu'></textarea>
              </div>



            </div>
            <div className="columns">





              <div className='column'>
              <label className='label'>Materiały graficzne:</label>
              <select
              className='button-green select-green' as='select'  name='Miejsce sesji:' id='miejsce'
              onChange={this.handleChange}
              >
              <option value="Nie">Nie</option>
              <option value="Tak">Tak</option>




              </select>
              </div>

              <div className='column'>

              <div className='control'>
              <label className='label'>Ilość wersji językowych:</label>

                <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' min="1" placeholder='2' name='Ilość zdjęć' id='iloscz' />
              </div>
              </div>

              <div className="column">
              <label className='label is-size-10'>Jakie języki:</label>
              <input className='input' onChange={this.handleChange} placeholder='Polski, angielski... ' type='text' name='grupa docelowa' id='grupa docelowa' />
              <br /><br />
              </div>

              <div className="column">
              <label className='label is-size-10'>Grupa docelowa:</label>
              <input className='input' onChange={this.handleChange} placeholder='Dzieci i młodzież... ' type='text' name='grupa docelowa' id='grupa docelowa' />
              <br /><br />
              </div>

              <div className='column'>
              <label className='label'>Termin realizacji:</label>
                <input className='button-green date' type='date' name='deadline' id='deadline'
                onChange={this.handleChange}
                 />
              </div>



            </div>





            <div className="columns">

              <div className='column'>
                <div className='control'>
                <label className='label is-size-10'>Budżet:</label>
                <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="range" className='range' name="budżet" type="range"
                onInput={(event) => {console.log(document.getElementById('range').value);
                document.getElementById('rvalueid').innerText = document.getElementById('range').value + ' zł';
              }} onChange={this.handleChange}
                />
                <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid" id="rvalueid">25000 zł</output>

                </div>
            <br />




              </div>


              </div>


      </div>


      <hr />





      </>
    )
  }
}

export default VirReal;
