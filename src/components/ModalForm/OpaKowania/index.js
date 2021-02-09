import React from 'react';


class OpaKowania extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <>
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





      </>
    )
  }
}

export default OpaKowania;
