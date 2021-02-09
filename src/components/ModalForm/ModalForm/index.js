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

      <div className='columns'  id='COVID-19' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
      <CoVid19 />
      </div>


      {/* Ekologia */}

     <div className='columns' id='Ekologia' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <EkoLogia />
     </div>

     {/* BranDing */}

     <div className='columns' id='Branding' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <BranDing />
     </div>

     {/* Projektowanie graficzne */}

     <div className='columns' id='Projektowaniegraficzne' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <ProjGraf />
     </div>

     {/* Strony internetowe */}

     <div className='columns' id='Stronyinternetowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <StronyW />
     </div>

     {/* Kalendarze książkowe */}

     <div className='columns'  id='Kalendarzeksiążkowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <KalKsia />
     </div>

     {/* Kalendarze firmowe */}

     <div className='columns' id='Kalendarzefirmowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <KalFirm />
     </div>

     {/* Gadżety reklamowe */}

     <div className='columns' id='Gadżetyreklamowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <GadzetyRek />
     </div>

     {/* Wydruki reklamowe */}

     <div className='columns' id='Wydrukireklamowe' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <WydrukiRek />
     </div>

     {/* Reklama zewnętrzna */}

     <div className='columns' id='Reklamazewnętrzna' style={{display:'none'}}>
     <RekZew />
     </div>

     {/* Fotografia produktowa */}

     <div className='columns' id='Fotografiaproduktowa' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <FotoProd />
     </div>

     {/* Wystawiennictwo */}

     <div className='columns' id='Wystawiennictwo' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <WystaWien />
     </div>

     {/* Filmowanie */}

     <div className='columns' id='Filmowanie' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <FilmoWanie />
     </div>

     {/* Opakowania */}

     <div className='columns' id='Opakowania' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <OpaKowania />
     </div>

     {/* VR */}

     <div className='columns' id='VR' style={{ display:'none',marginRight:'5%', marginLeft:'5%',marginBottom:'10px'}}>
     <VirReal />
     </div>
















      </>
    )
  }
}



export { ModalForm }
