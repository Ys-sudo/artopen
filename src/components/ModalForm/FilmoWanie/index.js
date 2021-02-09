import React from 'react';


class FilmoWanie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      {/* Flimy */}

      <input name='Filmowanie' id='filmowanie' className='subtitle' placeholder='Filmowanie:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />
      <div className='field' style={{marginLeft:'18px'}}>

        <div className='columns'>

        <div className='column' style={{marginRight:'10px'}} >

          <label className='label'>Cel stworzenia filmu:</label>
          <select
          className='button-green select-green' as='select'  name='Cel stworzenia filmu' id='celfilmu' style={{minWidth:'300px'}}
          onChange={this.handleChange}
          >
          <option value="Promocja produktu lub usługi">Promocja produktu lub usługi </option>
          <option value="Promocja firmy">Promocja firmy </option>
          <option value="Relacja z wydarzenia lub imprezy"> Relacja z wydarzenia lub imprezy</option>
          <option value="Film szkoleniowy lub instruktażowy"> Film szkoleniowy lub instruktażowy</option>
          <option value="Inne"> Inne</option>


          </select>

        </div>

        <div className='column' >

          <label className='label'>Użycie drona:</label>
          <select
          className='button-green select-green' as='select'  name='Dron' id='dron'
          onChange={this.handleChange}
          >
          <option value="Tak">Tak</option>
          <option value="Nie">Nie</option>


          </select>

        </div>

        <div className='column' >

          <label className='label'>Scenariusz:</label>
          <select
          className='button-green select-green' as='select'  name='Scenariusz' id='Scenariusz'
          onChange={this.handleChange}
          >
          <option value="Własny">Własny</option>
          <option value="Do zrealizowania">Do zrealizowania</option>


          </select>

        </div>


      </div>

      <div className='columns'>

        <div className='column' >
        <label className='label'> Opis filmu: </label>
        <textarea  onChange={this.handleChange} className='textarea' type='text' rows='3'  placeholder='Opisz w kilku słowach film...' name='Opis filmu' id='opis filmu'  />
        </div>

        <div className='column' >
        <label className='label'> Przykładowe realizacje: </label>
        <textarea  onChange={this.handleChange} className='textarea' type='text' rows='3'  placeholder='Wpisz filmy które Ci się podobają...' name='Przykładowe realizacje' id='przykładowe filmy'  />


        </div>



      </div>



      <div className='columns'>

      <div className='column' style={{marginRight:'10px'}}>

      <label className='label'>Długość filmu (min):</label>
      <input className='input' onChange={this.handleChange} placeholder='45' type='number' name='Długość filmu' id='Długość filmu' />
      <br /><br />

      <label className='label'>Grupa docelowa:</label>
      <input className='input' onChange={this.handleChange} placeholder='Dorośli 30+... ' type='text' name='grupa docelowa' id='grupa docelowaIII' />
      <br /><br />
      <label className='label'>Miejsce realizacji:</label>
      <input className='input' onChange={this.handleChange} placeholder='Wrocław... ' type='text' name='Miejsce realizacji filmu' id='Miejsce realizacji filmu' />


      </div>


        <div className='column' >
          <label  className='label is-size-10'>Dodatkowa forma przekazu:</label>
          <br />

        <label htmlFor="animacje2d" className='label main' style={{fontSize:'14px'}}>Animacje 2D
          <input className='checkbox' type='checkbox' name='Animacje 2D' id='animacje2d'
          onChange={this.handleChange} />
          <span className="check"></span>
          </label>

          <label htmlFor="animacje3d" className='label main' style={{fontSize:'14px'}}>Animacje 3D
            <input className='checkbox' type='checkbox' name='Animacje 3D' id='animacje3d'
            onChange={this.handleChange} />
            <span className="check"></span>
            </label>

            <label htmlFor="lektor" className='label main' style={{fontSize:'14px'}}>Lektor
              <input className='checkbox' type='checkbox' name='Lektor' id='lektor'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>

              <label htmlFor="Dodatkowe wersje językowe" className='label main' style={{fontSize:'14px'}}>Dodatkowe wersje językowe
                <input className='checkbox' type='checkbox' name='Dodatkowe wersje językowe' id='Dodatkowe wersje językowe'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>

        </div>

        <div className='column' >

        <label  className='label is-size-10'>Dystrybucja:</label>
        <br />

      <label htmlFor="TV" className='label main' style={{fontSize:'14px'}}>Telewizja
        <input className='checkbox' type='checkbox' name='TV' id='TV'
        onChange={this.handleChange} />
        <span className="check"></span>
        </label>

        <label htmlFor="internet" className='label main' style={{fontSize:'14px'}}>Internet
          <input className='checkbox' type='checkbox' name='internet' id='internet'
          onChange={this.handleChange} />
          <span className="check"></span>
          </label>

          <label htmlFor="innea" className='label main' style={{fontSize:'14px'}}>Inne (billboard, telebim itp.)
            <input className='checkbox' type='checkbox' name='Inne' id='innea'
            onChange={this.handleChange} />
            <span className="check"></span>
            </label>


        </div>





      </div>

      <div className='columns'>


        <div className='column'>
        <label className='label'>Termin realizacji:</label>
          <input className='button-green date' type='date' name='deadline' id='deadlineVI'
          onChange={this.handleChange}
           />
           </div>


           <div className='column'>
             <div className='control'>
             <label className='label is-size-10'>Budżet:</label>
             <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="rangea" className='range' name="budżet" type="range"
             onInput={(event) => {console.log(document.getElementById('rangea').value);
             document.getElementById('rvalueida').innerText = document.getElementById('rangea').value + ' zł';
           }} onChange={this.handleChange}
             />
             <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueida" id="rvalueida">25000 zł</output>

             </div>
           </div>


      </div>






      </div>
      <hr />





      </>
    )
  }
}

export default FilmoWanie;
