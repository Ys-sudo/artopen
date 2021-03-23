import React from 'react'
import { Link } from 'gatsby'



const OfferNav = () => {

  return (

    <nav className='offer-nav'>

      <Link className='button-green ofnav' to='/covid-19/'>
      <img width="10px" className='icon-green'  alt="covid-19" src='/img/viruses.svg'/>
        COVID-19
      </Link>
        <br />
      <Link className='button-green ofnav' to='/ekologia/'>
      <img width="10px" className='icon-green'  alt="ekologia" src='/img/leaf.svg'/>
        Ekologia
      </Link>
      <br />
      <Link className='button-green ofnav' to='/branding/' >
      <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-ruler.svg'/>
        Branding
      </Link>
      <br />
      <Link className='button-green ofnav' to='/projektowanie-graficzne/' >
      <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-alt.svg'/>
        Projektowanie graficzne
      </Link>
      <br />
      <Link className='button-green ofnav' to='/strony-internetowe/' >
      <img width="10px" className='icon-green'  alt="strony internetowe" src='/img/code.svg'/>
        Strony internetowe
      </Link>
      <br />
      <Link className='button-green ofnav' to='/kalendarze-ksiazkowe/' >
      <img width="10px" className='icon-green'  alt="kalendarze książkowe" src='/img/book.svg'/>
        Kalendarze książkowe
      </Link>
      <br />
      <Link className='button-green ofnav' to='/kalendarze-firmowe/' >
      <img width="10px" className='icon-green'  alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
        Kalendarze firmowe
      </Link>
      <br />
      <Link className='button-green ofnav' to='/gadzety/' >
      <img width="10px" className='icon-green'  alt="gadżety" src='/img/lightbulb.svg'/>
        Gadżety reklamowe 
      </Link>
      <br />
      <Link className='button-green ofnav' to='/wydruki/' >
      <img width="10px" className='icon-green'  alt="wydruki" src='/img/map.svg'/>
        Wydruki reklamowe
      </Link>
      <br />
      <Link className='button-green ofnav' to='/reklama-zewnetrzna/' >
      <img width="10px" className='icon-green'  alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
        Reklama zewnętrzna
      </Link>
      <br />
      <Link className='button-green ofnav' to='/fotografia/' >
      <img width="10px" className='icon-green'  alt="fotografia" src='/img/camera-retro.svg'/>
        Fotografia produktowa
      </Link>
      <br />
      <Link className='button-green ofnav' to='/wystawiennictwo/' >
      <img width="10px" className='icon-green'  alt="wystawiennictwo" src='/img/cubes.svg'/>
        Wystawiennictwo
      </Link>
      <br />
      <Link className='button-green ofnav' to='/filmowanie/' >
      <img width="10px" className='icon-green'  alt="filmowanie" src='/img/film.svg'/>
        Filmowanie
      </Link>
      <br />
      <Link className='button-green ofnav' to='/opakowania/' >
      <img width="10px" className='icon-green'  alt="opakowania" src='/img/box-open.svg'/>
        Opakowania
      </Link>
      <br />
      <Link  onLoad={ActiveBtn} className='button-green ofnav' to='/vr/' >
      <img width="10px" className='icon-green'  alt="VR" src='/img/vr-cardboard.svg'/>
        VR
      </Link>

      <br />

    </nav>

  )
}

export default OfferNav

function ActiveBtn() {
  let i = 0;
  let title = document.getElementById('oftitle').innerHTML;
  console.log(title);


  for (i=0;i<document.getElementsByClassName('ofnav').length;i++){
    if(document.getElementsByClassName('ofnav')[i].innerHTML.match(title) !== null){

      console.log(document.getElementsByClassName('ofnav')[i]);
      document.getElementsByClassName('ofnav')[i].style.backgroundColor = '#00d1b2';
      document.getElementsByClassName('ofnav')[i].style.color = 'white';
      document.getElementsByClassName('ofnav')[i].firstChild.style.filter = 'brightness(0) invert(1)';


    }
  }
}
