import React from 'react';



class KalFirm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }




  render() {
    return (
      <>

      <input name='Kalendarze firmowe' id='kalfirm' className='subtitle' placeholder='Kalendarze firmowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />
      <div className='field' style={{marginLeft:'18px'}}>




      <div className='columns'>

      <div className='control column'>

      <label className='label'>Ilość:</label>

        <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' type='number' placeholder='100' name='Ilość kalendarzy' id='ilosck' />
      </div>
      <br />

      <div className='column'>
          <label className='label'>Typ kalendarza:</label>

          <select
          className='button-green select-green' as='select'  name='Typ kalendarza' id='typ'
          onChange={this.handleChange}
          onInput={(event) => {
          console.log(event.target.value);
            if((event.target.value == 'biurkowy') ||(event.target.value == 'planszowy')
            || (event.target.value == 'listkowy')){
              document.getElementById('glowka').style.display = 'none';
            } else {
              document.getElementById('glowka').style.display = 'block';
            }
          }}
          >
          <option value="jednodzielny">jednodzielny</option>
          <option value="dwudzielny">dwudzielny</option>
          <option value="trójdzielny">trójdzielny</option>
          <option value="czterodzielny">czterodzielny</option>

          <option value="biurkowy">biurkowy</option>
          <option value="planszowy">planszowy</option>
          <option value="listkowy">listkowy</option>

          </select>


          <br />
        </div>
        <div className='column' >
          <div id='glowka'>
          <label className='label'>Rodzaj główki:</label>
          <select
          className='button-green select-green' as='select'  name='Rodzaj główki' id='rodzaj głowki'
          onChange={this.handleChange}
          >
          <option value="płaska">płaska</option>
          <option value="wypukła">wypukła</option>
          <option value="eco">eco</option>


          </select>
          </div>
        </div>


        </div>



        <div className='columns'>
          <div className='column'>
            <label className='label'>Kalendarium:</label>
            <select
            className='button-green select-green' as='select'  name='Rodzaj główki' id='rodzaj głowki'
            onChange={this.handleChange}
            onInput={(event) => {
            console.log(event.target.value);
              if(event.target.value == 'indywidualne'){
                document.getElementById('kalendariumI').style.display = 'block';
              } else {
                document.getElementById('kalendariumI').style.display = 'none';
              }
            }}
            >
            <option value="standardowe">standardowe</option>
            <option value="indywidualne">indywidualne</option>
            </select>
          </div>

          <div className='column'>
            <label className='label'>Okienko:</label>
            <select
            className='button-green select-green' as='select'  name='Okienko' id='okienko'
            onChange={this.handleChange}
            >
            <option value="standardowe">standardowe</option>
            <option value="indywidualne">indywidualne</option>
            </select>


          </div>

          <div className='column'>


          <label className='label'>Projekt:</label>
          <select
          className='button-green select-green' as='select'  name='Projekt' id='proj'
          onChange={this.handleChange}
          >
          <option value="Własny">Własny</option>
          <option value="Zlecam wykonanie">Zlecam wykonanie</option>
          </select>


          </div>

        </div>


            <div id='kalendariumI' style={{display:'none'}}>
            <label className='label'>Specyfikacja dni wolnych:</label>
            <br />
            <div className='control columns' id='dniwolne' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>

                <div className='column'>
                  <label htmlFor="imieniny" className='label main' style={{fontSize:'14px'}}>Imieniny
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Imieniny' id='imieniny' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label htmlFor="swietaPL" className='label main' style={{fontSize:'14px'}}>Święta PL
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta PL' id='swietaPL' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label className='label main' htmlFor="swietaEU" style={{fontSize:'14px'}}>Święta EU
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta EU' id='swietaEU' />
                  <span className="check"></span>
                  </label>
                </div>
                <div className='column'>
                  <label className='label main' htmlFor="niestandarodwe" style={{fontSize:'14px'}}>Święta niestandardowe
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Święta niestandardowe' id='niestandarodwe' />
                  <span className="check"></span>
                  </label>
                </div>

            </div>
          </div>

        <label className='label'>Uszlachetnienia:</label>
        <br />
        <div className='control columns' id='UszlachetnieniaIII' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
          <div className='column'>
              <label htmlFor="HotstamplingII" className='label main' style={{fontSize:'14px'}}>Hotstampling
              <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Hotstampling' id='HotstamplingII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="lakieruvII" style={{fontSize:'14px'}}>Lakier UV<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Lakier UV' id='lakieruvII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label htmlFor="folia blyskII" className='label main' style={{fontSize:'14px'}}>Folia błysk<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia błysk' id='folia blyskII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label htmlFor="folia matII" className='label main' style={{fontSize:'14px'}}>Folia mat<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia mat' id='folia matII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="foliasoftII" style={{fontSize:'14px'}}>Folia soft touch<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Folia soft touch' id='foliasoftII' />
              <span className="check"></span>
              </label>
            </div>
            <div className='column'>
              <label className='label main' htmlFor="ecopapierII" style={{fontSize:'14px'}}>Eco papier<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='Eco Papier' id='ecopapierII' />
              <span className="check"></span>
              </label>
            </div>

        </div>














      </div>
          <hr />



      </>
    )
  }
}

export default KalFirm;
