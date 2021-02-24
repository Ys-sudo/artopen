import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

let num;
const handleDragStart = (e) => e.preventDefault();

function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}

function quitModal(){
  document.getElementById('Kalendarzeksiążkowe').style.display = 'none';
  document.getElementById('KalendarzeksiążkoweX').style.display = 'block';

  setTimeout(() => {
  document.getElementById('KalendarzeksiążkoweX').style.display = 'none';
  document.getElementsByClassName('ofnav1')[5].style.backgroundColor ='white';
  document.getElementsByClassName('ofnav1')[5].style.color ='#00d1b2';
  document.getElementsByClassName('ofnav1')[5].firstChild.style.filter = 'brightness(1) invert(0)';
  },1500);

}


class KalKsia extends React.Component {

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

  render() {
    return (
      <>
      <form
        name="Kalendarze książkowe"
        id = "Kalksiaform"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

      <input name='Kalendarze książkowe' id='kalendarzeksiazkowe' className='subtitle' placeholder='Kalendarze książkowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />
      <div className='field' style={{marginLeft:'18px'}}>
      <div className='control'>
      <label className='label'>Ilość:</label>

        <input onChange={this.handleChange} style={{maxWidth:'200px'}} className='input' min='1' type='number' placeholder='100' name='Ilość kalendarzy' id='ilosck' />
      </div>
      <br />
          <div className='columns'>

          <div className='column'>
          <label className='label'>Format kalendarza:</label>
          <select selected="selected"
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
          <select selected="selected"
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

      <select selected="selected"
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
      <option value="biały">biały</option>
      <option value="chamois">chamois</option>

      </select>
      </div>
      <div id='optionII' className='column' style={{display:'none'}}>
      <label className='label' id='optionII'>Papier Eko:</label>
      <select
      className='button-green select-green' as='select'  name='Eko papier' id='eko papier'
      onChange={this.handleChange}
      >
      <option value="papier z trawy">papier z trawy</option>
      <option value="papier z kamienia">papier z kamienia</option>

      </select>
      </div>
      </div>




      <br />
      <label className='label'>Wzornik opraw:</label>
      <br />
      <div className='columns' style={{ display:'flex', flexWrap:'wrap'}}>
      <div className='column'>
        <label onClick={changeOne(0)} className="choicebtn">
          Savana
        </label>
        <br /><br />

        <label onClick={changeOne(1)} className="choicebtn">
          Bambus
        </label>
        <br /><br />

        <label onClick={changeOne(2)} className="choicebtn">
          Natura
        </label>
        <br /><br />

        <label onClick={changeOne(3)} className="choicebtn">
          Canvas
        </label>
        <br /><br />
        <label onClick={changeOne(4)} className="choicebtn">
          Kraft
        </label>
        <br /><br />

        <label onClick={changeOne(5)} className="choicebtn">
          Vivela
        </label>
        <br /><br />
        <label onClick={changeOne(6)} className="choicebtn">
          Image
        </label>

      </div>
      <div className='column'>

        <label onClick={changeOne(7)} className="choicebtn">
          Ideo
        </label>
        <br /><br />

        <label onClick={changeOne(8)} className="choicebtn">
          Carbon
        </label>
        <br /><br />

        <label onClick={changeOne(9)} className="choicebtn">
          Cross
        </label>
        <br /><br />

        <label onClick={changeOne(10)} className="choicebtn">
          Guma
        </label>
        <br /><br />

        <label onClick={changeOne(11)} className="choicebtn">
          Piko
        </label>
        <br /><br />
        <label onClick={changeOne(12)} className="choicebtn">
          Holo
        </label>
        <br /><br />
        <label onClick={changeOne(13)} className="choicebtn">
          Flesz
        </label>

      </div>

      <div className='column'>
          <label onClick={changeOne(14)} className="choicebtn">
            Aluminium
          </label>
          <br /><br />

          <label onClick={changeOne(15)} className="choicebtn">
            Outlet - Zamsz
          </label>
          <br /><br />
          <label onClick={changeOne(16)} className="choicebtn">
            Outlet - Duro
          </label>
          <br /><br />
          <label onClick={changeOne(17)} className="choicebtn">
            Outlet - Fabra
          </label>
          <br /><br />
          <label onClick={changeOne(18)} className="choicebtn">
            Outlet - Colorado
          </label>
          <br /><br />
          <label onClick={changeOne(19)} className="choicebtn">
            Outlet - Cross
          </label>
          <br /><br />
          <label onClick={changeOne(20)} className="choicebtn">
            Outlet - Juta
          </label>
        </div>
      </div>
      <br />


      {/* Obrazki radio buttons - kolory*/}
      <div className='columns' style={{textAlign:'center',display:'flex',flexWrap:'wrap'}}>
      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/Vivela__czarny.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/Vivela__czerwony.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/Vivela__granatowy.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/Vivela__magenta.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/Vivela__pomaranczowy.png" width='80px' />
      </label>
      &nbsp; &nbsp;



      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/Vivela__seledynowy.png" width='80px' />
      </label>

      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/Vivela__szary.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/Vivela__turkusowy.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/Vivela__zielony.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label style={{margin:'10px'}}>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/Vivela__zolty.png" width='80px' />
      </label>


      </div>








      <br />
      <div className='columns'>
        <div className='column'>
        <label className='label'>Okładzina:</label>
        <select selected="selected"
        className='button-green select-green' style={{minWidth:'200px'}} as='select'  name='Okładzina' id='Okładzina'
        onChange={this.handleChange}
        onInput={(event) => {
        console.log(event.target.value);
          if(event.target.value == 'oprawa z wzornika'){
            document.getElementById('UszlachetnieniaI').style.display = 'flex';
            document.getElementById('UszlachetnieniaII').style.display = 'none';

            for(let i=0;i<document.getElementsByClassName('u2').length;i++){
              document.getElementsByClassName('u2')[i].checked = false;
            }

          } else {
            document.getElementById('UszlachetnieniaI').style.display = 'none';
            document.getElementById('UszlachetnieniaII').style.display = 'flex';

            for(let i=0;i<document.getElementsByClassName('u1').length;i++){
              document.getElementsByClassName('u1')[i].checked =false;
            }

          }
        }}
        >
        <option value="oprawa z wzornika">oprawa z wzornika</option>
        <option value="oprawa papierowa z zadrukiem fullkolor">oprawa papierowa fullkolor</option>

        </select>
        </div>
      <div className='column'>
        <label className='label'>Tasiemka:</label>

        <select selected="selected"
        className='button-green select-green' as='select'  name='Uszlachetnienia' id='Uszlachetnienia'
        onChange={this.handleChange}
        >
        <option value="standard">standard</option>
        <option value="indywidualna">indywidualna</option>
        </select>
        </div>

      </div>
      <div>

      </div>

      <label className='label'>Uszlachetnienia:</label>
      <br />



      <div className='control columns' id='UszlachetnieniaI' style={{display:'flex',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
          <div className='column'>
            <label htmlFor="tloczenie" className='label main' style={{fontSize:'14px'}}>Tłoczenie
            <input className='checkbox u1' onChange={this.handleChange} type='checkbox'  name='Tłoczenie' id='tloczenie' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label htmlFor="grawerlaserowy" className='label main' style={{fontSize:'14px'}}>Grawer laserowy
            <input className='checkbox u1' onChange={this.handleChange} type='checkbox'  name='Grawer laserowy' id='grawerlaserowy' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="pattern" style={{fontSize:'14px'}}>Pattern
            <input className='checkbox u1' onChange={this.handleChange} type='checkbox'  name='Pattern' id='pattern' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="przeszycie" style={{fontSize:'14px'}}>Przeszycie artysytczne
            <input className='checkbox u1' onChange={this.handleChange} type='checkbox'  name='Przeszycie artysytczne' id='przeszycie' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="finochrom" style={{fontSize:'14px'}}>Finochrom
            <input className='checkbox u1' onChange={this.handleChange} type='checkbox'  name='Finochrom' id='finochrom' />
            <span className="check"></span>
            </label>
          </div>
      </div>

      <div className='control columns' id='UszlachetnieniaII' style={{display:'none',flexWrap:'wrap',width:'100%',marginLeft:'3%'}}>
        <div className='column'>
            <label htmlFor="folia mat" className='label main' style={{fontSize:'14px'}}>Folia mat
            <input className='checkbox u2' onChange={this.handleChange} type='checkbox'  name='Folia mat' id='folia mat' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label htmlFor="folia blysk" className='label main' style={{fontSize:'14px'}}>Folia błysk
            <input className='checkbox u2' onChange={this.handleChange} type='checkbox'  name='Folia błysk' id='folia blysk' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="foliasoft" style={{fontSize:'14px'}}>Folia soft touch
            <input className='checkbox u2' onChange={this.handleChange} type='checkbox'  name='Folia soft touch' id='foliasoft' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="metalprint" style={{fontSize:'14px'}}>Metal print
            <input className='checkbox u2' onChange={this.handleChange} type='checkbox'  name='Metal print' id='metalprint' />
            <span className="check"></span>
            </label>
          </div>
          <div className='column'>
            <label className='label main' htmlFor="lakieruv" style={{fontSize:'14px'}}>Lakier UV
            <input className='checkbox u2' onChange={this.handleChange} type='checkbox'  name='Lakier UV' id='lakieruv' />
            <span className="check"></span>
            </label>
          </div>
      </div>








      <br />
      <label className='label'>Dodatki:</label>
      <br />
      </div>

      <div className="columns" style={{textAlign:'left',marginLeft:'20px',flexWrap:'wrap'}}>

      <label htmlFor='c1' className='column main'>
        <input onChange={this.handleChange} type="checkbox" name="barwione brzegi" value="tak" id='c1'   />
        <img className='obrazek' src="/img/dodatki/dodatki_barwione_brzegi_942-300x300.jpg" width='100px' />

        <br />
        <b>Barwione brzegi</b>
        <p style={{fontSize:'10px'}}>możliwość barwienia brzegów bloku kalendarza lub notesu<br /> - minimum 100 sztuk</p>

      </label>

      <label htmlFor='c2'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka grzbietowa" value="tak" id='c2' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_grzbietowa_738-300x300.jpg" width='100px' />


        <br />
        <b>Gumka grzbietowa</b>
        <p style={{fontSize:'10px'}}>miejsce na długopis,<br /> gumka 10 mm</p>

      </label>

      <label htmlFor='c3'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka pionowa" value="tak" id='c3' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_pionowa_354-300x300.jpg" width='100px' />

        <br />
        <b>Gumka pionowa</b>
        <p style={{fontSize:'10px'}}>gumka 10 mm</p>

      </label>

      <label htmlFor='c4'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka pozioma" value="tak" id='c4' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_pozioma_234-300x300.jpg" width='100px' />

        <br />
        <b>Gumka pozioma</b>
        <p style={{fontSize:'10px'}}>miejsce na długopis,<br /> gumka 10 mm</p>

      </label>

      <label htmlFor='c5'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="koperta" value="tak" id='c5' />
        <img className='obrazek' src="/img/dodatki/dodatki_koperta_493-300x300.jpg" width='100px' />

        <br />
        <b>Koperta</b>
        <p style={{fontSize:'10px'}}><b>wymiar</b> | pod każdy format</p>

      </label>

      <label htmlFor='c6'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="kryształ" value="tak" id='c6' />
        <img className='obrazek' src="/img/dodatki/dodatki_krysztal_779-300x300.jpg" width='100px' />

        <br />
        <b>Kryształ Swarovski</b>
        <p style={{fontSize:'10px'}}>przyklejany do oprawy <br /> wymiar | 10 x 10 mm</p>

      </label>




      </div>




    <div className="columns" style={{textAlign:'left',marginLeft:'20px',flexWrap:'wrap'}}>

      <label htmlFor='c7'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c7' name="m1" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m1_859-300x300.jpg" width='100px' />
        <br />
        <b>M1</b>
        <p style={{fontSize:'10px'}}>blaszka szczotkowane aluminium pod grawer
         <br />
          <b>wymiar</b> | 40 x 14 mm
           <br />
          <b>pole graweru</b> | 38 x 12 mm </p>

      </label>

      <label htmlFor='c8'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c8' name="m2" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m2_288-300x300.jpg" width='100px' />
        <br />
        <b>M2</b>
        <p style={{fontSize:'10px'}}>blaszka szczotkowane aluminium pod grawer z tłoczonym rokiem
         <br />
          <b>wymiar</b> | 40 x 14 mm
           <br />
          <b>pole graweru</b> | 26 x 12 mm </p>

      </label>

      <label htmlFor='c9'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c9' name="m3" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m3_105-300x300.jpg" width='100px' />
        <br />
        <b>M3</b>
        <p style={{fontSize:'10px'}}>rok finochromowy przyklejany do oprawy
         <br />
          <b>wymiar</b> | 45 x 9 mm </p>

      </label>

      <label htmlFor='c10'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c10' name="m4" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m4_724-300x300.jpg" width='100px' />
        <br />
        <b>M4</b>
        <p style={{fontSize:'10px'}}>rok finochromowy przyklejany do oprawy
         <br />
          <b>wymiar</b> | 10 x 10 mm </p>

      </label>

      <label htmlFor='c11'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c11' name="m11" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m11_563-300x300.jpg" width='100px' />
        <br />
        <b>M11</b>
        <p style={{fontSize:'10px'}}>zapinka metalowa (srebrna matowa) mocowana na nit z metalowym zawiasem zamykanym na magnes <br />
        <b>pole graweru</b> | 26 x 8 mm</p>

      </label>

      <label htmlFor='c12'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c12' name="m14" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m14_116-300x300.jpg" width='100px' />
        <br />
        <b>M14</b>
        <p style={{fontSize:'10px'}}>blaszka kwadratowa (srebrna błysk) mocowana do okładki z gumką 2 mm<br />
        <b>pole graweru</b> | 15 x 15 mm</p>

      </label>







    </div>


    <div className="columns" style={{textAlign:'left',marginLeft:'20px',flexWrap:'wrap'}}>

      <label htmlFor='c13'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c13' name="m15" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m15_967-300x300.jpg" width='100px' />
        <br />
        <b>M15</b>
        <p style={{fontSize:'10px'}}>blaszka prostokątna (srebrna matowa) mocowana na gumce 10 mm<br />
        <b>pole graweru</b> | 34 x 12 mm</p>
      </label>

      <label htmlFor='c14'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c14' name="magnes" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_patka-magnes_660-300x300.jpg" width='100px' />
        <br />
        <b>Patka na magnes</b>
        <p style={{fontSize:'10px'}}>zamykana na magnes z miejscem na długopis magnes ukryty w oprawie<br />
        <b>pole graweru</b> | 8 x 8 mm</p>
      </label>

      <label htmlFor='c15'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c15' name="pendrive" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_pendrive_112-300x300.jpg" width='100px' />
        <br />
        <b>Pendrive 16GB</b>
        <p style={{fontSize:'10px'}}><b>wymiar</b> | 34 x 11 mm
        <br />
        <b>pole graweru</b> | 28 x 8 mm</p>
      </label>

      <label htmlFor='c16'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c16' name="grawer" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_personalizacja-grawer_777-300x300.jpg" width='100px' />
        <br />
        <b>Personalizacja grawerowana</b>
        <p style={{fontSize:'10px'}}>personalizacja wg projektu </p>
      </label>

      <label htmlFor='c17'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c17' name="tloczenie" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_personalizacja-tloczenie_186-300x300.jpg" width='100px' />
        <br />
        <b>Personalizacja tłoczona</b>
        <p style={{fontSize:'10px'}}><b>font</b> | latin it capital 4 mm </p>
      </label>

      <label htmlFor='c18'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c18' name="kieszonka prostokatna" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_prostokatna-kieszonka_923-300x300.jpg" width='100px' />
        <br />
        <b>Prostokątna kieszeń</b>
        <p style={{fontSize:'10px'}}>Kieszeń wykonana z folii <br />
        <b>wymiar</b> | 90 x 60 mm</p>
      </label>







    </div>

    <div className="columns" style={{textAlign:'left',marginLeft:'20px',flexWrap:'wrap'}}>

      <label htmlFor='c19'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c19' name="szlufka" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_szlufka_na_dlugopis_226-300x300.jpg" width='100px' />
        <br />
        <b>Szlufka na długopis</b>
        <p style={{fontSize:'10px'}}>gumka 10 mm</p>
      </label>


      <label htmlFor='c20'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c20' name="tasiemki" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_tasiemki_581-300x300.jpg" width='100px' />
        <br />
        <b>Tasiemki</b>
        <p style={{fontSize:'10px'}}>tasiemki tkane, sublimacyjne</p>
      </label>

      <label htmlFor='c21'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c21' name="kieszonka trojkatna" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_trojkatna-kieszonka_750-300x300.jpg" width='100px' />
        <br />
        <b>Trójkątna kieszeń</b>
        <p style={{fontSize:'10px'}}>
        Kieszeń wykonana z folii<br />
        <b>wymiar</b> | 80 x 80 mm,
        100 x 100 mm, 120 x 120 mm
        </p>
      </label>

      <label htmlFor='c22'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c22' name="uchwyt" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_uchwyt_959-300x300.jpg" width='100px' />
        <br />
        <b>Uchwyt na długopis</b>
        <p style={{fontSize:'10px'}}>uchwyt wykonany z ekoskóry </p>

      </label>

      <span className='column'>

      </span>
      <span className='column'>

      </span>


    </div>




    <label className='label' style={{marginLeft:'15px'}}>Gumka:</label>
    <br />

    <div className=''>

    <AliceCarousel items={gumki} autoPlayInterval="5000">

    </AliceCarousel>


    </div>

      <hr />


         {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
         <input type="hidden" name="form-name" value="Kalendarze książkowe" />
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
               id={'imię i nazwiskoV'}
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
                 id={'adres emailV'}
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
                 id={'nrtelV'}
               />
             </div>
           </div>


         </div>

         <div className="field column" style={{marginLeft:'15px'}}>
           <label className="label" htmlFor={'message'}>
             Wiadomość<sup>*</sup>:
           </label>
           <div className="control">
             <textarea
               className="textarea"
               type={'text'}
               name={'wiadomość'}
               onChange={this.handleChange}
               id={'wiadomośćV'}
               required={true}
               rows = "7"
             ></textarea>
           </div>



           <br />
           <div className="control">

           <label style={{fontSize: '12px'}} className='main'  htmlFor="privacyV">   <input required={true} onChange={this.handleChange} type="checkbox" id="privacyV" name="privacy" defaultChecked="true" value="true"/>Wyrażam zgodę na przetwarzanie moich danych zgodnie z naszą <a className='link-green' href="/polityka-prywatnosci/">polityką prywatności</a><sup>*</sup>.<span className="check"></span></label>            </div>

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




let savana = ['bezowy','bordowy','brazowy','granatowy','','','','','',''];
let bambus = ['granatowy','seledynowy','szary','zielony','','','','','',''];
let natura = ['bezowy','grafitowy','granatowy','szary','','','','','',''];
let canvas = ['brazowy','czarny','czerwony','granatowy','niebieski','szary','zielony','','',''];
let kraft = ['grafitowy','granatowy','koralowy','niebieski','','','','','',''];
let vivela = ['czarny','czerwony','granatowy','magenta','pomaranczowy','seledynowy','szary','turkusowy','zielony','zolty'];
let image = ['bordowy','czarny','czekoladowy','grafitowy','granatowy','szary','','','',''];

let ideo = ['bialy','czarny','czerwony','granatowy','seledynowy','','','','',''];
let carbon = ['czarny','granatowy','szary','','','','','','',''];
let cross = ['czarny','czerwony','granatowy','szary','zielony','','','','',''];
let guma = ['czarny-satynowy','czerwony','granat-satynowy','mietowy','niebieski','pomaranczowy','szary-satynowy','','',''];
let piko = ['brazowy','czarny','czerwony','fioletowy','granatowy-blysk','granatowy-mat','srebrny','szary','',''];
let holo = ['hologram','','','','','','','','',''];
let flesz = ['grafitowy','srebrny','zloty','','','','','','',''];

let aluminium = ['czarny','granatowy','srebrny','','','','','','',''];
let outletzamsz = ['granatowy','','','','','','','','',''];
let outletduro = ['czarny','granatowy','szary','','','','','','',''];
let outletfabra = ['zielony','','','','','','','','',''];
let outletcolorado = ['bordowy','szary','','','','','','','',''];
let outletcross = ['czekoladowy','malinowy','','','','','','','',''];
let outletjuta = ['brazowy','','','','','','','','',''];






const changeOne = (num) => (event) =>{

  let colors = document.getElementsByClassName('koloroprawy');
  let pictures = document.getElementsByClassName('obrazek');
  let name = event.target.innerText //.toLowerCase();
  name = name.replace(/\s/g, '');

  var collection;
if (num == 0){
  collection = savana;
}
  else if (num == 1){
  collection = bambus;
}
  else if (num == 2) {
  collection = natura;
}
  else if (num == 3) {
  collection = canvas;
}
  else if (num == 4) {
  collection = kraft;
}
  else if (num == 5) {
  collection = vivela;
}
  else if (num == 6) {
  collection = image;
}
  else if (num == 7) {
  collection = ideo;
}
  else if (num == 8) {
    collection = carbon;
  }
  else if (num == 9) {
    collection = cross;
  }
  else if (num == 10){
  collection = guma;
}
  else if (num == 11) {
  collection = piko;
}
  else if (num == 12) {
  collection = holo;
}
  else if (num == 13) {
  collection = flesz;
}
  else if (num == 14) {
  collection = aluminium;
  }
  else if (num == 15) {
  collection = outletzamsz;
}
  else if (num == 16) {
  collection = outletduro;
}
  else if (num == 17) {
  collection = outletfabra;
}
  else if (num == 18) {
    collection = outletcolorado;
  }
  else if (num == 19) {
    collection = outletcross;
  }
  else if (num == 20) {
    collection = outletjuta;
  }




  console.log(collection)


      colors[0].value =  name + ' ' + collection[0];
      pictures[0].src = '/img/oprawy/'+name+'__'+collection[0]+'.png';
      console.log(colors[0].value)

      colors[1].value =  name + ' ' + collection[1];
      pictures[1].src = '/img/oprawy/'+name+'__'+collection[1]+'.png';


      colors[2].value =  name + ' ' + collection[2];
      pictures[2].src = '/img/oprawy/'+name+'__'+collection[2]+'.png';


      colors[3].value =  name + ' ' + collection[3];
      pictures[3].src = '/img/oprawy/'+name+'__'+collection[3]+'.png';


      colors[4].value =  name + ' ' + collection[4];
      pictures[4].src = '/img/oprawy/'+name+'__'+collection[4]+'.png';


      colors[5].value =  name + ' ' + collection[5];
      pictures[5].src = '/img/oprawy/'+name+'__'+collection[5]+'.png';


      colors[6].value =  name + collection[6];
      pictures[6].src = '/img/oprawy/'+name+'__'+collection[6]+'.png';


      colors[7].value =  name + collection[7];
      pictures[7].src = '/img/oprawy/'+name+'__'+collection[7]+'.png';

      colors[8].value =  name + collection[8];
      pictures[8].src = '/img/oprawy/'+name+'__'+collection[8]+'.png';

      colors[9].value =  name + collection[9];
      pictures[9].src = '/img/oprawy/'+name+'__'+collection[9]+'.png';

      for (let i = 0; i < collection.length; i++){
        if (collection[i] === ''){
        pictures[i].src = ' ';

        pictures[i].style.display = 'none';
        colors[i].setAttribute("disabled","true");
      } else {
        colors[i].removeAttribute("disabled");
        pictures[i].style.display = 'flex';

      }
    }
    colors[0].checked = 'true';



}

changeOne(0);




const gumki = [

  [ <label key="d1" className="gumki">
      <input type="radio" name="gumki" value="zielony"  />
      <img className="obrazek" src="/img/gumki/gumka_zielony.png" />
    </label>,
    <label  key="d2" className="gumki" >
        <input type="radio" name="gumki" value="czarny"  />
        <img className="obrazek" src="/img/gumki/gumka_czarny.png" />
      </label>,
      <label key="d3" className="gumki" >
          <input type="radio" name="gumki" value="pomaranczowy"  />
          <img className="obrazek" src="/img/gumki/gumka_pomaranczowy.png" />
        </label>,
        <label key="d4" className="gumki" >
            <input type="radio" name="gumki" value="magenta"  />
            <img className="obrazek" src="/img/gumki/gumka_magenta.png" />
          </label>,
          <label key="d5" className="gumki" >
              <input type="radio" name="gumki" value="multicolor"  />
              <img className="obrazek" src="/img/gumki/gumka_multicolor.png" />
            </label>,
          ],[

            <label key="d6" className="gumki" >
                <input type="radio" name="gumki" value="niebieski"  />
                <img className="obrazek" src="/img/gumki/gumka_niebieski.png" />
              </label>,
              <label key="d7" className="gumki" >
                  <input type="radio" name="gumki" value="fioletowy"  />
                  <img className="obrazek" src="/img/gumki/gumka_fioletowy.png" />
                </label>,
                <label key="d8" className="gumki" >
                    <input type="radio" name="gumki" value="granatowy"  />
                    <img className="obrazek" src="/img/gumki/gumka_granatowy.png" />
                  </label>,
                  <label key="d9" className="gumki" >
                      <input type="radio" name="gumki" value="czerwony"  />
                      <img className="obrazek" src="/img/gumki/gumka_czerwony.png" />
                    </label>,
                    <label key="d10" className="gumki" >
                        <input type="radio" name="gumki" value="ciemnogranatowy"  />
                        <img className="obrazek" src="/img/gumki/gumka_ciemnogranatowy.png" />
                      </label>,

                    ],[
                      <label key="d11" className="gumki" >
                          <input type="radio" name="gumki" value="brazowy"  />
                          <img className="obrazek" src="/img/gumki/gumka_brazowy.png" />
                        </label>,
                        <label key="d12" className="gumki" >
                            <input type="radio" name="gumki" value="seledynowy"  />
                            <img className="obrazek" src="/img/gumki/gumka_seledynowy.png" />
                          </label>,
                          <label key="d13" className="gumki" >
                              <input type="radio" name="gumki" value="szary"  />
                              <img className="obrazek" src="/img/gumki/gumka_szary.png" />
                            </label>,
                              <label key="d15" className="gumki" >
                                  <input type="radio" name="gumki" value="zolty"  />
                                  <img className="obrazek" src="/img/gumki/gumka_zolty.png" />
                                </label>]];


export default KalKsia;
