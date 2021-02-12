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
      <select selected="selected"
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
          Canvas
        </label>
        <br /><br />

        <label onClick={changeOne(1)} className="choicebtn">
          Vivela
        </label>
        <br /><br />

        <label onClick={changeOne(2)} className="choicebtn">
          Image
        </label>
        <br /><br />

        <label onClick={changeOne(3)} className="choicebtn">
          Cross
        </label>
        <br /><br />
        <label onClick={changeOne(4)} className="choicebtn">
          Ideo 
        </label>
        <br /><br />

        <label onClick={changeOne(5)} className="choicebtn">
          Natura 
        </label>
        <br /><br />
        <label onClick={changeOne(6)} className="choicebtn">
          Carbon 
        </label>

      </div>
      <div className='column'>

        <label onClick={changeOne(7)} className="choicebtn">
          Zamsz 
        </label>
        <br /><br />

        <label onClick={changeOne(8)} className="choicebtn">
          Guma 
        </label>
        <br /><br />

        <label onClick={changeOne(9)} className="choicebtn">
          Piko 
        </label>
        <br /><br />

        <label onClick={changeOne(10)} className="choicebtn">
          Flesz  
        </label>
        <br /><br />

        <label onClick={changeOne(11)} className="choicebtn">
          Aluminium  
        </label>
        <br /><br />
        <label onClick={changeOne(12)} className="choicebtn">
          Craft 
        </label>
        <br /><br />
        <label onClick={changeOne(13)} className="choicebtn">
          Holo  
        </label>

      </div>

      <div className='column'>
          <label onClick={changeOne(14)} className="choicebtn">
            Image   2
          </label>
          <br /><br />

          <label onClick={changeOne(15)} className="choicebtn">
            Colorado    
          </label>
          <br /><br />
          <label onClick={changeOne(16)} className="choicebtn">
            Juta 
          </label>
          <br /><br />
          <label onClick={changeOne(17)} className="choicebtn">
            Beton  
          </label>
          <br /><br />
          <label onClick={changeOne(18)} className="choicebtn">
            Cross 2
          </label>
          <br /><br />
          <label onClick={changeOne(19)} className="choicebtn">
            Vivela  2
          </label>
          <br /><br />
          <label onClick={changeOne(20)} className="choicebtn">
            Fabra  
          </label>
        </div>
      </div>
      <br />

      {/*dodać onChange do input*/}
      {/* Obrazki radio buttons - kolory*/}
      <div style={{textAlign:'center'}}>
      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/canvas__zielony.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/canvas__czarny.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="/img/oprawy/canvas__szary.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/canvas__niebieski.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/canvas__granatowy.png" width='80px' />
      </label>
      &nbsp; &nbsp;



      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/canvas__czerwony.png" width='80px' />
      </label>

      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor"  />
        <img className='obrazek' src="/img/oprawy/canvas__brazowy.png" width='80px' />
      </label>
      &nbsp; &nbsp;

      <label>
        <input onChange={this.handleChange} className='koloroprawy' type="radio" name="kolor" />
        <img className='obrazek' src="" width='80px' />
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






      {/*dodać onChange do input*/}


      <br />
      <label className='label'>Dodatki:</label>
      <br />
      </div>

      <div className="columns" style={{textAlign:'center'}}>

      <label htmlFor='c1' className='column main'>
        <input onChange={this.handleChange} type="checkbox" name="barwione brzegi" value="tak" id='c1'   />
        <img className='obrazek' src="/img/dodatki/dodatki_barwione_brzegi_942-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c2'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka grzbietowa" value="tak" id='c2' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_grzbietowa_738-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c3'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka pionowa" value="tak" id='c3' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_pionowa_354-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c4'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="gumka pozioma" value="tak" id='c4' />
        <img className='obrazek' src="/img/dodatki/dodatki_gumka_pozioma_234-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c5'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="koperta" value="tak" id='c5' />
        <img className='obrazek' src="/img/dodatki/dodatki_koperta_493-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c6'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" name="kryształ" value="tak" id='c6' />
        <img className='obrazek' src="/img/dodatki/dodatki_krysztal_779-300x300.jpg" width='100px' />
      </label>




      </div>




    <div className="columns" style={{textAlign:'center'}}>

      <label htmlFor='c7'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c7' name="m1" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m1_859-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c8'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c8' name="m2" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m2_288-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c9'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c9' name="m3" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m3_105-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c10'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c10' name="m4" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m4_724-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c11'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c11' name="m11" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m11_563-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c12'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c12' name="m14" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m14_116-300x300.jpg" width='100px' />
      </label>







    </div>


    <div className="columns" style={{textAlign:'center'}}>

      <label htmlFor='c13'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c13' name="m15" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_m15_967-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c14'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c14' name="magnes" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_patka-magnes_660-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c15'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c15' name="pendrive" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_pendrive_112-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c16'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c16' name="grawer" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_personalizacja-grawer_777-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c17'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c17' name="tloczenie" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_personalizacja-tloczenie_186-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c18'  className='column main'>
        <input onChange={this.handleChange}  type="checkbox" id='c18' name="kieszonka prostokatna" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_prostokatna-kieszonka_923-300x300.jpg" width='100px' />
      </label>







    </div>

    <div className="columns" style={{textAlign:'center'}}>

      <label htmlFor='c19'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c19' name="szlufka" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_szlufka_na_dlugopis_226-300x300.jpg" width='100px' />
      </label>


      <label htmlFor='c20'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c20' name="tasiemki" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_tasiemki_581-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c21'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c21' name="kieszonka trojkatna" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_trojkatna-kieszonka_750-300x300.jpg" width='100px' />
      </label>

      <label htmlFor='c22'  className='column main'>
        <input onChange={this.handleChange} type="checkbox" id='c22' name="uchwyt" value="tak"  />
        <img className='obrazek' src="/img/dodatki/dodatki_uchwyt_959-300x300.jpg" width='100px' />
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




let canvas = ['zielony','czarny','szary','niebieski','granatowy','czerwony','brazowy',''];
let vivela = ['brazowy','ciemny-granat','czarny','czerwony','magenta','seledynowy','szary','turkusowy'];
let image = ['bordowy','czarny','czekoladowy','grafitowy','granatowy','pomaranczowy','szary','zielony'];
let cross = ['czekoladowy','czerwony','granatowy','szary','','','',''];
let ideo = ['czarny','czerwony','granatowy','seledynowy','','','',''];
let natura = ['bordowy','brazowy','grafitowy','granatowy','szary','','',''];
let carbon = ['czarny','grafitowy','','','','','',''];

let zamsz = ['czarny','granatowy','szary','','','','',''];
let guma = ['czarny-satynowy','czerwony','granat-satynowy','mitowy','niebieski','pomaranczowy','szary-satynowy',''];
let piko = ['brazowy','czarny','fioletowy','granatowy-blysk','granatowy-mat','srebrny','szary',''];
let flesz = ['grafitowy','srebrny','zolty','','','','',''];
let aluminium = ['czarny','granatowy','srebrny','','','','',''];
let craft = ['grafitowy','granatowy','koralowy','niebieski','','','',''];
let holo = ['hologram','','','','','','',''];

let image2 = ['cieniowana-cegla','cieniowana-czekolada','','','','','',''];
let colorado = ['bordowy','czerwony','grafitowy','szary','','','',''];
let juta = ['brazowy','','','','','','',''];
let beton = ['granatowy','','','','','','',''];
let cross2 = ['malinowy','pomaranczowy','','','','','',''];
let vivela2 = ['bezowy','','','','','','',''];
let fabra = ['zielony','','','','','','',''];






const changeOne = (num) => (event) =>{

  let colors = document.getElementsByClassName('koloroprawy');
  let pictures = document.getElementsByClassName('obrazek');
  let name = event.target.innerText.toLowerCase();
  name = name.replace(/\s/g, '');

  var collection;
if (num == 0){
  collection = canvas;
}
  else if (num == 1){
  collection = vivela;
}
  else if (num == 2) {
  collection = image;
}
  else if (num == 3) {
  collection = cross;
}
  else if (num == 4) {
  collection = ideo;
}
  else if (num == 5) {
  collection = natura;
}
  else if (num == 6) {
  collection = carbon;
}
  else if (num == 7) {
  collection = zamsz;
}
  else if (num == 8) {
    collection = guma;
  }
  else if (num == 9) {
    collection = piko;
  }
  else if (num == 10){
  collection = flesz;
}
  else if (num == 11) {
  collection = aluminium;
}
  else if (num == 12) {
  collection = craft;
}
  else if (num == 13) {
  collection = holo;
}
  else if (num == 14) {
  collection = image2;
  }
  else if (num == 15) {
  collection = colorado;
}
  else if (num == 16) {
  collection = juta;
}
  else if (num == 17) {
  collection = beton;
}
  else if (num == 18) {
    collection = cross2;
  }
  else if (num == 19) {
    collection = vivela2;
  }
  else if (num == 20) {
    collection = fabra;
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

      for (let i = 0; i < collection.length; i++){
        if (collection[i] === ''){
        pictures[i].src = ' ';
        colors[i].setAttribute("disabled","true");
      } else {
        colors[i].removeAttribute("disabled");
      }
    }
    colors[0].checked = 'true';



}

changeOne(0);




const gumki = [

  [ <label key="d1" className="gumki" style={{width:'100px',height:'100px'}}>
      <input type="radio" name="gumki" value="zielony"  />
      <img src="/img/gumki/gumka_zielony.png" style={{width:'100px'}} />
    </label>,
    <label  key="d2" className="gumki" style={{width:'100px',height:'100px'}}>
        <input type="radio" name="gumki" value="czarny"  />
        <img src="/img/gumki/gumka_czarny.png" style={{width:'100px'}} />
      </label>,
      <label key="d3" className="gumki" style={{width:'100px',height:'100px'}}>
          <input type="radio" name="gumki" value="pomaranczowy"  />
          <img src="/img/gumki/gumka_pomaranczowy.png" style={{width:'100px'}} />
        </label>,
        <label key="d4" className="gumki" style={{width:'100px',height:'100px'}}>
            <input type="radio" name="gumki" value="magenta"  />
            <img src="/img/gumki/gumka_magenta.png" style={{width:'100px'}} />
          </label>,
          <label key="d5" className="gumki" style={{width:'100px',height:'100px'}}>
              <input type="radio" name="gumki" value="multicolor"  />
              <img src="/img/gumki/gumka_multicolor.png" style={{width:'100px'}} />
            </label>,
          ],[

            <label key="d6" className="gumki" style={{width:'100px',height:'100px'}}>
                <input type="radio" name="gumki" value="niebieski"  />
                <img src="/img/gumki/gumka_niebieski.png" style={{width:'100px'}} />
              </label>,
              <label key="d7" className="gumki" style={{width:'100px',height:'100px'}}>
                  <input type="radio" name="gumki" value="fioletowy"  />
                  <img src="/img/gumki/gumka_fioletowy.png" style={{width:'100px'}} />
                </label>,
                <label key="d8" className="gumki" style={{width:'100px',height:'100px'}}>
                    <input type="radio" name="gumki" value="granatowy"  />
                    <img src="/img/gumki/gumka_granatowy.png" style={{width:'100px'}} />
                  </label>,
                  <label key="d9" className="gumki" style={{width:'100px',height:'100px'}}>
                      <input type="radio" name="gumki" value="czerwony"  />
                      <img src="/img/gumki/gumka_czerwony.png" style={{width:'100px'}} />
                    </label>,
                    <label key="d10" className="gumki" style={{width:'100px',height:'100px'}}>
                        <input type="radio" name="gumki" value="ciemnogranatowy"  />
                        <img src="/img/gumki/gumka_ciemnogranatowy.png" style={{width:'100px'}} />
                      </label>,

                    ],[
                      <label key="d11" className="gumki" style={{width:'100px',height:'100px'}}>
                          <input type="radio" name="gumki" value="brazowy"  />
                          <img src="/img/gumki/gumka_brazowy.png" style={{width:'100px'}} />
                        </label>,
                        <label key="d12" className="gumki" style={{width:'100px',height:'100px'}}>
                            <input type="radio" name="gumki" value="seledynowy"  />
                            <img src="/img/gumki/gumka_seledynowy.png" style={{width:'100px'}} />
                          </label>,
                          <label key="d13" className="gumki" style={{width:'100px',height:'100px'}}>
                              <input type="radio" name="gumki" value="szary"  />
                              <img src="/img/gumki/gumka_szary.png" style={{width:'100px'}} />
                            </label>,
                            <label key="d14" className="gumki" style={{width:'100px',height:'100px'}}>
                                <input type="radio" name="gumki" value="szara"  />
                                <img src="/img/gumki/gumka_szara.png" style={{width:'100px'}} />
                              </label>,
                              <label key="d15" className="gumki" style={{width:'100px',height:'100px'}}>
                                  <input type="radio" name="gumki" value="zolty"  />
                                  <img src="/img/gumki/gumka_zolty.png" style={{width:'100px'}} />
                                </label>]];




function isChecked(event) {
  console.log(event.target.innerHTML);
  let radios = document.getElementsByClassName('rdCheck');
  for (let x =0; x<radios.length;x++){

  }
  console.log('done');
};



export default KalKsia;
