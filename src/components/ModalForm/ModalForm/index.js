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

      <div className='boxshadow modalitem'  id='COVID-19' style={{ display:'block'}}>
      <CoVid19 />
      </div>

      <div className='boxshadow modalitem'  id='COVID-19X' style={{ display:'none',backgroundColor:'#00d1b2'}}>
      <div className='hero-body has-text-centered'>
      <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="covid-19" src='/img/check.svg'/>
        <p className='title' style={{color:'white'}}>
          Wiadomość została wysłana.
        </p>
      </div>
      </div>


      {/* Ekologia */}

     <div className='boxshadow modalitem' id='Ekologia' style={{ display:'none'}}>
     <EkoLogia />
     </div>

     <div className='boxshadow modalitem'  id='EkologiaX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="ekologia" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* BranDing */}

     <div className='boxshadow modalitem' id='Branding' style={{ display:'none'}}>
     <BranDing />
     </div>

     <div className='boxshadow modalitem'  id='BrandingX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Branding" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Projektowanie graficzne */}

     <div className='boxshadow modalitem' id='Projektowaniegraficzne' style={{ display:'none'}}>
     <ProjGraf />
     </div>

     <div className='boxshadow modalitem'  id='ProjektowaniegraficzneX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Projektowanie graficzne" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Strony internetowe */}

     <div className='boxshadow modalitem' id='Stronyinternetowe' style={{ display:'none'}}>
     <StronyW />
     </div>

     <div className='boxshadow modalitem'  id='StronyinternetoweX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="strony internetowe" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Kalendarze książkowe */}

     <div className='boxshadow modalitem'  id='Kalendarzeksiążkowe' style={{ display:'none'}}>
     <KalKsia />
     </div>

     <div className='boxshadow modalitem'  id='KalendarzeksiążkoweX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Kalendarze książkowe" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Kalendarze firmowe */}

     <div className='boxshadow modalitem' id='Kalendarzefirmowe' style={{ display:'none'}}>
     <KalFirm />
     </div>

     <div className='boxshadow modalitem'  id='KalendarzefirmoweX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Kalendarze firmowe" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Gadżety reklamowe */}

     <div className='boxshadow modalitem' id='Gadżetyreklamowe' style={{ display:'none'}}>
     <GadzetyRek />
     </div>


     <div className='boxshadow modalitem'  id='GadżetyreklamoweX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Gadżety reklamowe" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>
     {/* Wydruki reklamowe */}

     <div className='boxshadow modalitem' id='Wydrukireklamowe' style={{ display:'none',marginBottom:'50px'}}>
     <WydrukiRek />
     </div>

     <div className='boxshadow modalitem'  id='WydrukireklamoweX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Wydruki reklamowe" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Reklama zewnętrzna */}

     <div className='boxshadow modalitem' id='Reklamazewnętrzna' style={{ display:'none'}}>
     <RekZew />
     </div>

     <div className='boxshadow modalitem'  id='ReklamazewnętrznaX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Reklama zewnętrzna" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Fotografia produktowa */}

     <div className='boxshadow modalitem' id='Fotografiaproduktowa' style={{ display:'none'}}>
     <FotoProd />
     </div>

     <div className='boxshadow modalitem'  id='FotografiaproduktowaX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Fotografia produktowa" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Wystawiennictwo */}

     <div className='boxshadow modalitem' id='Wystawiennictwo' style={{ display:'none'}}>
     <WystaWien />
     </div>

     <div className='boxshadow modalitem'  id='WystawiennictwoX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Wystawiennictwo" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Filmowanie */}

     <div className='boxshadow modalitem' id='Filmowanie' style={{ display:'none'}}>
     <FilmoWanie />
     </div>

     <div className='boxshadow modalitem'  id='FilmowanieX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Filmowanie" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* Opakowania */}

     <div className='boxshadow modalitem' id='Opakowania' style={{ display:'none'}}>
     <OpaKowania />
     </div>

     <div className='boxshadow modalitem'  id='OpakowaniaX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="Opakowania" src='/img/check.svg'/>
       <p className='title' style={{color:'white'}}>
         Wiadomość została wysłana.
       </p>
     </div>
     </div>

     {/* VR */}

     <div className='boxshadow modalitem' id='VR' style={{ display:'none'}}>
     <VirReal />
     </div>

     <div className='boxshadow modalitem'  id='VRX' style={{ display:'none',backgroundColor:'#00d1b2'}}>
     <div className='hero-body has-text-centered'>
     <img width="50px"  style={{verticalAlign:'middle',filter:'invert(1)',marginTop:'-50px',marginBottom:'15px'}}   alt="VR" src='/img/check.svg'/>
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
