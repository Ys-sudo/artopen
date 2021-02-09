import React from 'react';



class KalKsia extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <>

      <input name='Kalendarze książkowe' id='kalendarzeksiazkowe' className='subtitle' placeholder='Kalendarze książkowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />
      <div className='field' style={{marginLeft:'18px'}}>
      <div className='control'>
      <label className='label'>Ilość:</label>

        <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' placeholder='100' name='Ilość kalendarzy' id='ilosck' />
      </div>
      <br />
          <div className='columns'>

          <div className='column'>
          <label className='label'>Format kalendarza:</label>
          <select
          className='button-green select-green' as='select'  name='Format' id='format'
          onChange={this.handleChange}
          >
          <option value="A6">A6</option>
          <option value="A5">A5</option>
          <option value="B5">B5</option>
          <option value="A4">A4</option>

          </select>
          </div>

          <div className='column'>
          <label className='label'>Rodzaj środka:</label>
          <select
          className='button-green select-green' as='select'  name='Rodzaj środka' id='rodzajsrodka'
          onChange={this.handleChange}
          >
          <option value="dzienny">dzienny</option>
          <option value="tygodniowy">tygodniowy</option>
          <option value="indywidualny">indywidualny</option>
          </select>
          </div>






      </div>

      <div className='columns'>
      <div className='column'>

      <label className='label'>Rodzaj papieru:</label>

      <select
      className='button-green select-green' as='select'  name='Rodzaj papieru' id='rodzajpapieru'
      onChange={this.handleChange}
      onInput={(event) => {
      console.log(event.target.value);
        if(event.target.value == 'standardowy'){
          document.getElementById('optionI').style.display = 'block';
          document.getElementById('optionII').style.display = 'none';

        } else {
          document.getElementById('optionI').style.display = 'none';
          document.getElementById('optionII').style.display = 'block';

        }
      }}
      >
      <option value="standardowy">standardowy</option>
      <option value="eco">eco</option>

      </select>


      </div>


      <div id='optionI' className='column'>
      <label className='label' >Kolor:</label>
      <select
      className='button-green select-green' as='select'  name='kolor papieru' id='kolorpapieru'
      onChange={this.handleChange}
      >
      <option value="eco">biały</option>
      <option value="standardowy">chamois</option>

      </select>
      </div>
      <div id='optionII' className='column' style={{display:'none'}}>
      <label className='label' id='optionII'>Papier Eko:</label>
      <select
      className='button-green select-green' as='select'  name='Eko papier' id='eko papier'
      onChange={this.handleChange}
      >
      <option value="eco">papier z trawy</option>
      <option value="standardowy">papier z kamienia</option>

      </select>
      </div>
      </div>




      <br />
      <label className='label'>Wzornik opraw:</label>
      <br />

      <div className='columns'>
      <div className='column'>
      <label className='label'>Okładzina:</label>
      <select
      className='button-green select-green' style={{width:'320px'}} as='select'  name='Okładzina' id='Okładzina'
      onChange={this.handleChange}
      onInput={(event) => {
      console.log(event.target.value);
        if(event.target.value == 'oprawa z wzornika'){
          document.getElementById('UszlachetnieniaI').style.display = 'flex';
          document.getElementById('UszlachetnieniaII').style.display = 'none';

        } else {
          document.getElementById('UszlachetnieniaI').style.display = 'none';
          document.getElementById('UszlachetnieniaII').style.display = 'flex';

        }
      }}
      >
      <option value="oprawa z wzornika">oprawa z wzornika</option>
      <option value="standardowy">oprawa papierowa z zadrukiem fullkolor</option>

      </select>
      </div>
      <div className='column'>
      <label className='label'>Tasiemka:</label>

      <select
      className='button-green select-green' as='select'  name='Uszlachetnienia' id='Uszlachetnienia'
      onChange={this.handleChange}
      >
      <option value="eco">standard</option>
      <option value="standardowy">indywidualna</option>
      </select>
      </div>
      </div>

      <label className='label'>Uszlachetnienia:</label>
      <br />



      <div className='control columns' id='UszlachetnieniaI' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
          <div className='column'>
            <label htmlFor="tloczenie" className='label main' style={{fontSize:'14px'}}>Tłoczenie
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Tłoczenie' id='tloczenie' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label htmlFor="grawerlaserowy" className='label main' style={{fontSize:'14px'}}>Grawer laserowy<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Grawer laserowy' id='grawerlaserowy' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="pattern" style={{fontSize:'14px'}}>Pattern<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Pattern' id='pattern' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="przeszycie" style={{fontSize:'14px'}}>Przeszycie artysytczne<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Przeszycie artysytczne' id='przeszycie' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="finochrom" style={{fontSize:'14px'}}>Finochrom<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Finochrom' id='finochrom' />
            <span className="check"></span>
            </label>
          </div>
      </div>

      <div className='control columns' id='UszlachetnieniaII' style={{display:'none',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
        <div className='column'>
            <label htmlFor="folia mat" className='label main' style={{fontSize:'14px'}}>Folia mat
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia mat' id='folia mat' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label htmlFor="folia blysk" className='label main' style={{fontSize:'14px'}}>Folia błysk<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia błysk' id='folia blysk' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="foliasoft" style={{fontSize:'14px'}}>Folia soft touch<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia soft touch' id='foliasoft' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="metalprint" style={{fontSize:'14px'}}>Metal print<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Metal print' id='metalprint' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="lakieruv" style={{fontSize:'14px'}}>Lakier UV<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Lakier UV' id='lakieruv' />
            <span className="check"></span>
            </label>
          </div>
      </div>









      <br /><br />
      <label className='label'>Dodatki:</label>
      <br />
      </div>
      <hr />



      </>
    )
  }
}

export default KalKsia;
