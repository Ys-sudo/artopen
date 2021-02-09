import React from 'react'
import OffNav from '../OffNav'
import { navigate } from 'gatsby-link'


import CoVid19 from '../CoVid19'
import EkoLogia from '../EkoLogia'
import BranDing from '../BranDing'
import ProjGraf from '../ProjGraf'
import StronyW from '../StronyW'

import KalKsia from '../KalKsia'
import KalFirm from '../KalFirm'
import GadzetyRek from '../GadzetyRek'
import WydrukiRek from '../WydrukiRek'
import RekZew from '../RekZew'

import FotoProd from '../FotoProd'
import WystaWien from '../WystaWien'
import FilmoWanie from '../FilmoWanie'
import OpaKowania from '../OpaKowania'
import VirReal from '../VirReal'



{/* funkcje do podglądu obrazu.
function hideimg(){
  const imgTag = document.getElementById("myimage");
  imgTag.src = ' ';
}

const handleInput = (e) => {
  const file  =  e.currentTarget.files[0];
  const reader = new FileReader();
  const imgTag = document.getElementById("myimage");
  if (file.name !== undefined){
  imgTag.title = file.name;
  reader.onload = function(event) {
    imgTag.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
};





function disableEmptyInputs() {
  let form = document.getElementById('zamowienieA');
  let controls = form.elements;
  let iLen = controls.length
  for (var i=0; i<iLen; i++) {
    controls[i].disabled = controls[i].value == '';
    console.log(controls[i].name + ' ' + controls[i].value);
  }

}
*/}


class ModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      <OffNav />



      {/* COVID 19 */}

      <div className='columns boxshadow'  id='COVID-19' style={{ display:'block',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
      <CoVid19 />
      </div>

      <div className='columns boxshadow'  id='COVID-19X' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
      <div className='hero-body has-text-centered'>
      <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
        <p className='title' style={{color:'white'}}>
          Wiadomość została wysłana.
        </p>
      </div>
      </div>


      {/* Ekologia */}

     <div className='columns boxshadow' id='Ekologia' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <EkoLogia />
     </div>

     <div className='columns boxshadow'  id='EkologiaX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* BranDing */}

     <div className='columns boxshadow' id='Branding' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <BranDing />
     </div>

     <div className='columns boxshadow'  id='BrandingX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Projektowanie graficzne */}

     <div className='columns boxshadow' id='Projektowaniegraficzne' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <ProjGraf />
     </div>

     <div className='columns boxshadow'  id='ProjektowaniegraficzneX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Strony internetowe */}

     <div className='columns boxshadow' id='Stronyinternetowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <StronyW />
     </div>

     <div className='columns boxshadow'  id='StronyinternetoweX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Kalendarze książkowe */}

     <div className='columns boxshadow'  id='Kalendarzeksiążkowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <KalKsia />
     </div>

     <div className='columns boxshadow'  id='KalendarzeksiążkoweX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Kalendarze firmowe */}

     <div className='columns boxshadow' id='Kalendarzefirmowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <KalFirm />
     </div>

     <div className='columns boxshadow'  id='KalendarzefirmoweX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Gadżety reklamowe */}

     <div className='columns boxshadow' id='Gadżetyreklamowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <GadzetyRek />
     </div>


     <div className='columns boxshadow'  id='GadżetyreklamoweX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>
     {/* Wydruki reklamowe */}

     <div className='columns boxshadow' id='Wydrukireklamowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <WydrukiRek />
     </div>

     <div className='columns boxshadow'  id='WydrukireklamoweX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Reklama zewnętrzna */}

     <div className='columns boxshadow' id='Reklamazewnętrzna' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <RekZew />
     </div>

     <div className='columns boxshadow'  id='ReklamazewnętrznaX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Fotografia produktowa */}

     <div className='columns boxshadow' id='Fotografiaproduktowa' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <FotoProd />
     </div>

     <div className='columns boxshadow'  id='FotografiaproduktowaX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Wystawiennictwo */}

     <div className='columns boxshadow' id='Wystawiennictwo' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <WystaWien />
     </div>

     <div className='columns boxshadow'  id='WystawiennictwoX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Filmowanie */}

     <div className='columns boxshadow' id='Filmowanie' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <FilmoWanie />
     </div>

     <div className='columns boxshadow'  id='FilmowanieX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Opakowania */}

     <div className='columns boxshadow' id='Opakowania' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <OpaKowania />
     </div>

     <div className='columns boxshadow'  id='OpakowaniaX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* VR */}

     <div className='columns boxshadow' id='VR' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px'}}>
     <VirReal />
     </div>

     <div className='columns boxshadow'  id='VRX' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'50px',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="numer komórkowy" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>
















      </>
    )
  }
}



export { ModalForm }
