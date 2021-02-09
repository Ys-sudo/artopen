import React from 'react';



class ProjGraf extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return (
      <>

      <input name='Projektowanie Graficzne' id='projgraf' className='subtitle' placeholder='Projektowanie graficzne:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />


              <label  className='label is-size-10' style={{marginLeft:'15px'}}>Rodzaj projektu:</label>

          <br />

      <div className='field columns' style={{marginLeft:'15px'}}>

          <br />



          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
            <label htmlFor="logo" className='label main' style={{fontSize:'14px'}}>Logo
              <input className='checkbox' type='checkbox' name='Logo' id='logo'
              onChange={this.handleChange} />
              <span className="check"></span>
              </label>

              <label htmlFor="ksiegaznaku" className='label main' style={{fontSize:'14px'}}>Księga znaku
                <input className='checkbox' type='checkbox' name='Księga znaku' id='ksiegaznaku'
                onChange={this.handleChange} />
                <span className="check"></span>
                </label>

                <label htmlFor="wizytowki" className='label main' style={{fontSize:'14px'}}>Wizytówki
                  <input className='checkbox' type='checkbox' name='Wizytówki' id='wizytowki'
                  onChange={this.handleChange} />
                  <span className="check"></span>
                  </label>

                  <label htmlFor="papierfirmowy" className='label main' style={{fontSize:'14px'}}>Papier firmowy
                    <input className='checkbox' type='checkbox' name='Papier firmowy' id='papierfirmowy'
                    onChange={this.handleChange} />
                    <span className="check"></span>
                    </label>

                    <label htmlFor="teczka firmowa" className='label main' style={{fontSize:'14px'}}>Teczka firmowa
                      <input className='checkbox' type='checkbox' name='Teczka' id='teczka firmowa'
                      onChange={this.handleChange} />
                      <span className="check"></span>
                      </label>

          </div>


          <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
                      <label htmlFor="kalendarze" className='label main' style={{fontSize:'14px'}}>Kalendarze
                        <input className='checkbox' type='checkbox' name='Kalendarze' id='kalendarze'
                        onChange={this.handleChange} />
                        <span className="check"></span>
                        </label>
                        <label htmlFor="ulotki" className='label main' style={{fontSize:'14px'}}>Ulotki
                          <input className='checkbox' type='checkbox' name='Ulotki' id='ulotki'
                          onChange={this.handleChange} />
                          <span className="check"></span>
                          </label>
                          <label htmlFor="katalogi" className='label main' style={{fontSize:'14px'}}>Katalogi
                            <input className='checkbox' type='checkbox' name='Katalogi' id='katalogi'
                            onChange={this.handleChange} />
                            <span className="check"></span>
                            </label>
                            <label htmlFor="banery" className='label main' style={{fontSize:'14px'}}>Bannery reklamowe
                              <input className='checkbox' type='checkbox' name='Banery reklamowe' id='banery'
                              onChange={this.handleChange} />
                              <span className="check"></span>
                              </label>
                              <label htmlFor="okleinasamochodu" className='label main' style={{fontSize:'14px'}}>Okleina samochodu
                                <input className='checkbox' type='checkbox' name='Okleina samochodu' id='okleinasamochodu'
                                onChange={this.handleChange} />
                                <span className="check"></span>
                                </label>


              </div>
              <div className='control column' style={{display:'block',marginLeft:'3%',flexWrap:'wrap'}}>
                                <label htmlFor="okleinabiura" className='label main' style={{fontSize:'14px'}}>Okleina biura
                                  <input className='checkbox' type='checkbox' name='Okleina biura' id='okleinabiura'
                                  onChange={this.handleChange} />
                                  <span className="check"></span>
                                  </label>
                                  <label htmlFor="systemy wystawiennicze" className='label main' style={{fontSize:'14px'}}>Systemy wystawiennicze
                                    <input className='checkbox' type='checkbox' name='Systemy wystawiennicze' id='systemy wystawiennicze'
                                    onChange={this.handleChange} />
                                    <span className="check"></span>
                                    </label>
                                    <label htmlFor="infografiki" className='label main' style={{fontSize:'14px'}}>Infografiki
                                      <input className='checkbox' type='checkbox' name='infografiki' id='infografiki'
                                      onChange={this.handleChange} />
                                      <span className="check"></span>
                                      </label>
                                      <label htmlFor="Newsletter" className='label main' style={{fontSize:'14px'}}>Newsletter
                                        <input className='checkbox' type='checkbox' name='Newsletter' id='Newsletter'
                                        onChange={this.handleChange} />
                                        <span className="check"></span>
                                        </label>
                                        <label htmlFor="strona www" className='label main' style={{fontSize:'14px'}}>Strona internetowa
                                          <input className='checkbox' type='checkbox' name='Strona www' id='strona www'
                                          onChange={this.handleChange} />
                                          <span className="check"></span>
                                          </label>

            </div>


        </div>






                <div className='field' style={{marginLeft:'15px'}}>



                <div className='columns'>


                <div className='column'>
                <label className='label is-size-10'>Cel projektu:</label>
                <input className='input' onChange={this.handleChange} placeholder='kampania reklamowa, rebranding, identyfikacja wizualna... ' type='text' name='Cel projektu' id='cel projektów' />
                </div>

                <div className='column'>
                <label className='label'>Termin realizacji:</label>
                  <input className='button-green date' type='date' name='deadline' id='deadline'
                  onChange={this.handleChange}
                   />
                   </div>






                  </div>
                  <div className=''>
                    <div className='control'>
                    <label className='label is-size-10'>Budżet:</label>
                    <input style={{width:'100%'}} min='1500' placeholder='25000' max='50000' id="range1" className='range' name="budżet" type="range"
                    onInput={(event) => {console.log(document.getElementById('range1').value);
                    document.getElementById('rvalueid1').innerText = document.getElementById('range1').value + ' zł';
                  }} onChange={this.handleChange}
                    />
                    <output style={{color:'#00d1b2',textAlign:'center'}} name="rvalueid1" id="rvalueid1">25000 zł</output>

                    </div>
                  </div>

                </div>
                <br />

          <hr />



      </>
    )
  }
}

export default ProjGraf;
