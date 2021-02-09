import React from 'react';
import { navigate } from 'gatsby-link'
function OffNav(props) {



  return (
    <>
    <div  style={{textAlign:'center',marginTop:'-50px'}}>
      <img width="200px" src='/img/ArtOpen.svg' alt="ArtOpen studio reklamy" />
      <br />
    </div>



    <br />
    <div className='modalnav' style={{display:'flex',flexWrap:'wrap',marginLeft:'5%',marginBottom:'50px'}}>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="covid-19" src='/img/viruses.svg'/>
    <br />
      COVID-19
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="ekologia" src='/img/leaf.svg'/>
    <br />
      Ekologia
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="branding" src='/img/pencil-ruler.svg'/>
    <br />
      Branding
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="branding" src='/img/pencil-alt.svg'/>
    <br />
      Projektowanie graficzne
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="strony internetowe" src='/img/code.svg'/>
    <br />
      Strony internetowe
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="kalendarze książkowe" src='/img/book.svg'/>
    <br />
      Kalendarze książkowe
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
    <br />
      Kalendarze firmowe
    </a>


    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="gadżety" src='/img/lightbulb.svg'/>
    <br />
      Gadżety reklamowe 
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="wydruki" src='/img/map.svg'/>
    <br />
      Wydruki reklamowe
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
    <br />
      Reklama zewnętrzna
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}}  alt="fotografia" src='/img/camera-retro.svg'/>
    <br />
      Fotografia produktowa
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="wystawiennictwo" src='/img/cubes.svg'/>
    <br />
      Wystawiennictwo
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="filmowanie" src='/img/film.svg'/>
    <br />
    Filmowanie
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="opakowania" src='/img/box-open.svg'/>
    <br />
    Opakowania
    </a>

    <a onClick={selectOffer} className='ofnav1' >
    <img  width="10px" className='icon-green' style={{marginRight:'0px'}} alt="VR" src='/img/vr-cardboard.svg'/>
    <br />
    VR
    </a>


    </div>


  </>);
}



function selectOffer(event){

  if (event.target.style.backgroundColor == 'rgb(0, 209, 178)'){
    if (event.target.firstChild !== null){
      event.target.style.backgroundColor = 'white';
      event.target.style.color = '#00d1b2';
      event.target.firstChild.style.filter = 'brightness(1) invert(0)';
    }
  } else {
    if (event.target.firstChild !== null){
    event.target.style.backgroundColor = '#00d1b2';
    event.target.style.color = 'white';
    event.target.firstChild.style.filter = 'brightness(0) invert(1)';
    }
  }

  let name = event.target.innerText;
  name =  name.replace(/\s/g, '');
  console.log(name);

  console.log(document.getElementById(name));
  if (document.getElementById(name) !== null){
    if (document.getElementById(name).style.display=='none'){
      document.getElementById(name).style.display = 'block';
      //navigate('#'+name);
    } else {
      document.getElementById(name).style.display = 'none';
      
    }
  }

}


export default OffNav;
