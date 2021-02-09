import React from 'react';




class StronyW extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      {/* Strony internetowe */}

      <input name='strona internetowa' id='strona internetowa' className='subtitle' placeholder='Strony internetowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

      <div className='field' style={{marginLeft:'18px'}}>
        <label className='label'>Główny cel stworzenia strony:</label>
        <div className='control'>

          <select
          className='button-green select-green' as='select'  name='cel' id='cel'
          onChange={this.handleChange}
          onInput={(event) => {
          console.log(event.target.value);
            if(event.target.value == 'sklep internetowy'){
              document.getElementById('sklep').style.display = 'block';
              document.getElementById('sklep1').style.display = 'block';
            } else {
              document.getElementById('sklep').style.display = 'none';
              document.getElementById('sklep1').style.display = 'none';
            }
          }}
          >
          <option value="strona wizerunkowa">strona wizerunkowa</option>
          <option value="sklep internetowy">sklep internetowy</option>
          <option value="serwis informacyjny">serwis informacyjny</option>
          <option value="strona dedykowana">strona dedykowana</option>
          <option value="aplikacja webowa">aplikacja WEB</option>
          </select>

        </div>

      </div>
      <br />



      <div className='field' style={{marginLeft:'15px'}}>
          <div className='control'>
            <div className='columns'>
              <div className='column'>
              <label className='label is-size-10'>Krótki opis strony:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='Strona xyz.com ma prezentować nowe produkty naszej firmy...' type='text' name='krótki opis' id='opis www'></textarea>
              </div>

              <div className='column'>
              <label className='label is-size-10'>Podstrony i struktura:</label>
              <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='home, o nas, oferta...' type='text' name='struktura' id='struktura' ></textarea>
              </div>

            </div>
          </div>
      </div>

      <br />
      <div className='field columns' style={{marginLeft:'15px'}}>



              <div className='control column' id='sklep' style={{display:'none',width:'100%',marginLeft:'3%'}}>





                  <label htmlFor="baza xml" className='label main' style={{fontSize:'14px'}}>Baza XML
                  <input className='checkbox' onChange={this.handleChange} type='checkbox'  name='baza xml' id='baza xml' />
                  <span className="check"></span>
                  </label>



                  <label htmlFor="fotografie produktów" className='label main' style={{fontSize:'14px'}}>Zdjęcia<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='fotografie produktów' id='fotografie produktów' />
                  <span className="check"></span>
                  </label>



                  <label className='label main' htmlFor="opisy produktów" style={{fontSize:'14px'}}>Opisy<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='opisy produktów' id='opisy produktów' />
                  <span className="check"></span>
                  </label>

                  <label className='label main' htmlFor="integracje api" style={{fontSize:'14px'}}>Integracje<input className='checkbox' onChange={this.handleChange} type='checkbox'  name='integracje api' id='integracje api' />
                  <span className="check"></span>
                  </label>




          </div>



            <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>

            <label htmlFor="CMS" className='label main' style={{fontSize:'14px'}}>System CMS
              <input className='checkbox' type='checkbox' name='CMS' id='CMS'
              onChange={this.handleChange} />

              <span className="check"></span>
              </label>
              <label htmlFor="SEO" className='label main' style={{fontSize:'14px'}}>Pozycjonowanie SEO
              <input className='checkbox' type='checkbox' name='SEO' id='SEO'
                onChange={this.handleChange}/>

                <span className="check"></span>
                </label>
                <label htmlFor="teksty" className='label main' style={{fontSize:'14px'}}>Treści tekstowe
                  <input className='checkbox' type='checkbox' name='teksty' id='teksty'
                  onChange={this.handleChange}/>

                  <span className="check"></span>
                  </label>
                  <label htmlFor="grafika" className='label main' style={{fontSize:'14px'}}>Materiały graficzne
                    <input className='checkbox' type='checkbox' name='grafika' id='grafika'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>


            </div>


          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
            <label htmlFor="blog" className='label main' style={{fontSize:'14px'}}>Blog
              <input className='checkbox' type='checkbox' name='blog' id='blog'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>
              <label htmlFor="tłumaczenia" className='label main' style={{fontSize:'14px'}}>Tłumaczenia
                <input className='checkbox' type='checkbox' name='tłumaczenia' id='tłumaczenia'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>
                <label htmlFor="serwer" className='label main' style={{fontSize:'14px'}}>Serwer
                  <input className='checkbox' type='checkbox' name='serwer' id='serwer'
                  onChange={this.handleChange} />
                  <span className="check"></span>
                  </label>
                  <label htmlFor="domena" className='label main' style={{fontSize:'14px'}}>Domena
                    <input className='checkbox' type='checkbox' name='domena' id='domena'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>

            </div>


            <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>

              <label htmlFor="opieka techniczna" className='label main' style={{fontSize:'14px'}}>Wsparcie techniczne
                <input
                onChange={this.handleChange}
                 className='checkbox' type='checkbox' name='opieka techniczna' id='opieka techniczna' />
                 <span className="check"></span>
                 </label>

                <label htmlFor="prowadzenie bloga" className='label main' style={{fontSize:'14px'}}>Prowadzenie bloga
                  <input
                  onChange={this.handleChange}
                   className='checkbox' type='checkbox' name='prowadzenie bloga' id='prowadzenie bloga' />
                   <span className="check"></span>
                  </label>
                  <label htmlFor="analiza" className='label main' style={{fontSize:'14px'}}>Analiza statystyk
                    <input
                    onChange={this.handleChange}
                     className='checkbox' type='checkbox' name='analiza statysyk' id='analiza' />
                     <span className="check"></span>
                     </label>
                     <label htmlFor="newsletters" className='label main' style={{fontSize:'14px'}}>Newsletter
                       <input
                       onChange={this.handleChange}
                        className='checkbox' type='checkbox' name='newsletter' id='newsletters' />
                        <span className="check"></span>
                        </label>


            </div>




        </div>



            <br />

          <div className='field' style={{marginLeft:'15px'}}>
              <div className='control'>
                <div className='columns'>

                  <div className='column'>
                  <label className='label'>Termin realizacji:</label>
                    <input className='button-green date' type='date' name='deadline' id='deadlineI'
                    onChange={this.handleChange}
                     />
                  </div>

                  <div className='column'>

                  <div id='sklep1' style={{display:'none'}}>
                  <label className='label is-size-10'>Ilość produktów:</label>
                  <input className='input' onChange={this.handleChange} type='number' placeholder='100' name='ilość produktów' id='ilość produktów' />
                  <br /><br />
                  </div>


                  </div>

                  <div className='column'>
                  <label className='label is-size-10'>Wersje językowe:</label>
                  <input  onChange={this.handleChange} className='input' placeholder='1' type='number' name='języki' id='języki' />
                  </div>

                  <div className='column'>
                  <label className='label is-size-10'>Jakie języki:</label>
                  <input className='input' onChange={this.handleChange} placeholder='angielski, niemiecki...' type='text' name='jakie języki' id='jakie języki' />
                  </div>

                </div>
              </div>
            </div>


            <div className='field' style={{marginLeft:'15px'}}>
                <div className='control'>
                  <div className='columns'>

                    <div className='column'>
                    <label className='label is-size-10'>Informacje odnośnie identyfikacji graficznej firmy:</label>
                    <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='Kolorystyka, opis, logo...' type='text' name='Identyfikacja wizualna firmy' id='ifowiz' ></textarea>
                    </div>

                    <div className='column'>
                    <label className='label is-size-10'>Strony internetowe, które mogą być wzorem:</label>
                    <textarea className='textarea' onChange={this.handleChange} component='textarea' rows='4' placeholder='https://netflix.com' type='text' name='wzorce' id='wzorce' ></textarea>
                    </div>

                  </div>
                </div>
                </div>



                <br />





                <div className='field' style={{marginLeft:'15px'}}>

                <div className='columns'>
                  <div className='column'>
                    <div className='control'>
                    <label className='label is-size-10'>Budżet:</label>
                    <input style={{width:'100%'}} min='1500' placeholder='12500' max='25000' id="range2" className='range' name="budżet" type="range"
                    onInput={(event) => {console.log(document.getElementById('range2').value);
                    document.getElementById('rvalueid2').innerText = document.getElementById('range2').value + ' zł';
                  }} onChange={this.handleChange}
                    />
                    <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid2" id="rvalueid2">12500 zł</output>

                    </div>
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
                            id ="fileinputI"
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
                <br />

              {/* Podgląd obrazu wrazie w.  <img onMouseOver={hideimg} style={{backgroundColor:'black',padding:'15px',postion:'fixed',top:'10px',right:'10px',maxWidth:'150px'}} src={''} alt="" id={'myimage'}/> */}



                <hr />





      </>
    )
  }
}

export default StronyW;
