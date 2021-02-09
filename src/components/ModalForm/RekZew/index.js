import React from 'react';



class RekZew extends React.Component {

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

    <input name='Reklama zewnętrzna' id='rekzew' className='subtitle' placeholder='Reklama zewnętrzna:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />
    <div className='field' style={{marginLeft:'18px'}}>



      <label className='label'>Rodzaj reklamy:</label>
      <br />
      <div className='control columns' style={{width:'100%',marginLeft:'3%'}}>

            <div className="column">

            <label htmlFor="baner" className='label main' style={{fontSize:'14px'}}>Baner
            <input className='checkbox' onChange={this.handleChange}
            type='checkbox'  name='baner' id='baner' />
            <span className="check"></span>
            </label>






            <label htmlFor="siatka mesh" className='label main' style={{fontSize:'14px'}}>Siatka mesh
            <input className='checkbox' onChange={this.handleChange} type='checkbox'
            name='Siatka mesh' id='siatka mesh' />
            <span className="check"></span>
            </label>






            <label className='label main' htmlFor="kaseton" style={{fontSize:'14px'}}>Kaseton
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Kaseton' id='kaseton'
            />
            <span className="check"></span>
            </label>

            </div>

            <div className="column">

            <label className='label main' htmlFor="tablica" style={{fontSize:'14px'}}>Tablica
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Tablica' id='tablica'
            />
            <span className="check"></span>
            </label>





            <label className='label main' htmlFor="flagi" style={{fontSize:'14px'}}>Flagi
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Flagi' id='flagi'
           />
            <span className="check"></span>
            </label>




            <label className='label main' htmlFor="Pylonreklamowy" style={{fontSize:'14px'}}>Pylon reklamowy
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Pylon reklamowy' id='Pylonreklamowy'
           />
            <span className="check"></span>
            </label>


            </div>
            <div className="column">

            <label className='label main' htmlFor="litery" style={{fontSize:'14px'}}>Litery przestrzenne
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Litery przestrzenne' id='litery'
           />
            <span className="check"></span>
            </label>


            <label className='label main' htmlFor="Oklejaniesam" style={{fontSize:'14px'}}>Oklejanie samochodów
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Oklejanie samochodów' id='Oklejaniesam'
           />
            <span className="check"></span>
            </label>




            <label className='label main' htmlFor="inneII" style={{fontSize:'14px'}}>Inne
            <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Inne' id='inneII'
            onInput={(event) => {

              if(document.getElementById('i7').style.display == 'none'){
              document.getElementById('i7').style.display = 'block';

              } else {
              document.getElementById('i7').style.display = 'none';

              }
            }} />
            <span className="check"></span>
            </label>

              <input  onChange={this.handleChange} className='input' type='text' placeholder='wpisz inne rodzaje...' name='inne' id='i7' style={{display:'none',maxWidth:'350px'}} />

            </div>
          </div>

          <div className='control columns'>

          <div className='column'>
          <label className='label'> Ilość: </label>
          <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='100' name='ilość' id='' style={{display:'block',maxWidth:'150px'}} />
          </div>

          <div className='column'>
          <label className='label'> Wymiary reklamy (m): </label>
            <div style={{display:'flex'}}>
            <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='wysokość' name='ilość' id='' style={{display:'block',maxWidth:'150px'}} />
            <label className='label'>&nbsp; x &nbsp;</label>
            <input  onChange={this.handleChange} className='input' type='number' min="1" placeholder='szerokość' name='ilość' id='' style={{display:'block',maxWidth:'150px'}} />
            </div>
          </div>

          <div className='column'>
          <label className='label'> Miejsce realizacji: </label>
          <input className='input' onChange={this.handleChange} placeholder='Wrocław... ' type='text' name='Miejsce realizacji' id='miejsce realizacji' />
          </div>





          </div>



          <div className='columns'>
            <div className='column'>
            <label className='label'> Usługa montażu: </label>
            <select
            className='button-green select-green' as='select'  name='Usługa montażu' id='podloze zadruku'
            onChange={this.handleChange}
            >
            <option value="Tak">Tak</option>
            <option value="Nie">Nie</option>


            </select>

            </div>


            <div className='column'>
            <label className='label'> Projekt graficzny: </label>
            <select
            className='button-green select-green' as='select'  name='Projekt graficzny' id='projekt graficzny'
            onChange={this.handleChange}
            >
            <option value="Tak">Własny</option>
            <option value="Nie">Do zrealizowania</option>


            </select>

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
          <label className='label'> Opis produktu: </label>
          <textarea  onChange={this.handleChange} className='textarea' type='text'  placeholder='Opisz reklamowany produkt...' name='ilość' id='opis produktu'  />
          </div>


            <div className='column'>
            <label className='label'>Przykładowe realizacje:</label>
            <textarea className='textarea' onChange={this.handleChange} placeholder='Przykłady reklam zewnętrznych... ' type='text' name='Przykładowe realizacje' id='przykładowe realizacje'></textarea>
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
                    name="attachment"
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
        </div>

          <hr />



      </>
    )
  }
}

export default RekZew;
