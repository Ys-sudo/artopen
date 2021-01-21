import React from 'react'




const OfferNav = () => {

  return (

    <div  className='offer-nav'>

      <a className='button-green ofnav' href='/covid-19/'>
      <img width="10px" className='icon-green'  alt="covid-19" src='/img/viruses.svg'/>
        COVID-19
      </a>
        <br />
      <a className='button-green ofnav' href='/ekologia/'>
      <img width="10px" className='icon-green'  alt="ekologia" src='/img/leaf.svg'/>
        Ekologia
      </a>
      <br />
      <a className='button-green ofnav' href='/branding/' >
      <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-ruler.svg'/>
        Branding
      </a>
      <br />
      <a className='button-green ofnav' href='/projektowanie-graficzne/' >
      <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-alt.svg'/>
        Projektowanie graficzne
      </a>
      <br />
      <a className='button-green ofnav' href='/strony-internetowe/' >
      <img width="10px" className='icon-green'  alt="strony internetowe" src='/img/code.svg'/>
        Strony internetowe
      </a>
      <br />
      <a className='button-green ofnav' href='/kalendarze-ksiazkowe/' >
      <img width="10px" className='icon-green'  alt="kalendarze książkowe" src='/img/book.svg'/>
        Kalendarze książkowe
      </a>
      <br />
      <a className='button-green ofnav' href='/kalendarze-firmowe/' >
      <img width="10px" className='icon-green'  alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
        Kalendarze firmowe
      </a>
      <br />
      <a className='button-green ofnav' href='/gadzety/' >
      <img width="10px" className='icon-green'  alt="gadżety" src='/img/lightbulb.svg'/>
        Gadżety reklamowe 
      </a>
      <br />
      <a className='button-green ofnav' href='/wydruki/' >
      <img width="10px" className='icon-green'  alt="wydruki" src='/img/map.svg'/>
        Wydruki reklamowe
      </a>
      <br />
      <a className='button-green ofnav' href='/reklama-zewnetrzna/' >
      <img width="10px" className='icon-green'  alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
        Reklama zewnętrzna
      </a>
      <br />
      <a className='button-green ofnav' href='/fotografia/' >
      <img width="10px" className='icon-green'  alt="fotografia" src='/img/camera-retro.svg'/>
        Fotografia produktowa
      </a>
      <br />
      <a className='button-green ofnav' href='/wystawiennictwo/' >
      <img width="10px" className='icon-green'  alt="wystawiennictwo" src='/img/cubes.svg'/>
        Wystawiennictwo
      </a>
      <br />
      <a className='button-green ofnav' href='/filmowanie/' >
      <img width="10px" className='icon-green'  alt="filmowanie" src='/img/film.svg'/>
        Filmowanie
      </a>
      <br />
      <a className='button-green ofnav' href='/opakowania/' >
      <img width="10px" className='icon-green'  alt="opakowania" src='/img/box-open.svg'/>
        Opakowania
      </a>
      <br />
      <a onLoad={ActiveBtn} className='button-green' href='/vr/' >
      <img width="10px" className='icon-green'  alt="VR" src='/img/vr-cardboard.svg'/>
        VR
      </a>
      <br />
    </div>

  )
}

export default OfferNav

function ActiveBtn() {
  let i = 0;
  let title = document.getElementById('oftitle').innerHTML;
  console.log(title);


  for (i=0;i<document.getElementsByClassName('ofnav').length;i++){
    if(document.getElementsByClassName('ofnav')[i].innerHTML.match(title)!==null){
      document.getElementsByClassName('ofnav')[i].style.backgroundColor = '#00d1b2';
      document.getElementsByClassName('ofnav')[i].style.color = 'white';
      document.getElementsByClassName('ofnav')[i].firstChild.style.filter = 'brightness(0) invert(1)';
    }
  }
}
