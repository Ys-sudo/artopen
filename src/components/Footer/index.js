import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer' style={{alignItems:'bottom', paddingBottom:'30px'}}>

      <div className='container'>
        <div style={{textAlign:'center'}}>
          <a href="/"><img width="200px" src='/img/ArtOpen-white.svg' alt="ArtOpen studio reklamy" /></a>
          <br></br>
        </div>
      <br></br>
      <div className='section columns' style={{marginLeft:'3%'}}>

        <div className='column' style={{ padding:'5px',marginTop:'30px'}}>
          <h5><b>Oferta</b></h5>
          <br />
          <a className='submenu-item' href='/covid-19/'>
          <img width="10px" className='icon-green'  alt="covid-19" src='/img/viruses.svg'/>
            Covid-19
          </a>

          <a className='submenu-item' href='/ekologia/'>
          <img width="10px" className='icon-green'  alt="ekologia" src='/img/leaf.svg'/>
            Ekologia
          </a>

          <a className='submenu-item' href='/branding/' >
          <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-ruler.svg'/>
            Branding
          </a>

          <a className='submenu-item' href='/projektowanie-graficzne/' >
          <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-alt.svg'/>
            Projektowanie graficzne
          </a>

          <a className='submenu-item' href='/strony-internetowe/' >
          <img width="10px" className='icon-green'  alt="strony internetowe" src='/img/code.svg'/>
            Strony internetowe
          </a>

          <a className='submenu-item' href='/kalendarze-ksiazkowe/' >
          <img width="10px" className='icon-green'  alt="kalendarze książkowe" src='/img/book.svg'/>
            Kalendarze książkowe
          </a>

          <a className='submenu-item' href='/kalendarze-firmowe/' >
          <img width="10px" className='icon-green'  alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
            Kalendarze firmowe
          </a>

          <a className='submenu-item' href='/gadzety/' >
          <img width="10px" className='icon-green'  alt="gadżety" src='/img/lightbulb.svg'/>
            Gadżety reklamowe 
          </a>

          </div>
          <div className='column removespace' style={{marginRight:'5%',padding:'5px',marginTop:'30px'}}>
          <br /><br />

          <a className='submenu-item' href='/wydruki/' >
          <img width="10px" className='icon-green'  alt="wydruki" src='/img/map.svg'/>
            Wydruki reklamowe
          </a>

          <a className='submenu-item' href='/reklama-zewnetrzna/' >
          <img width="10px" className='icon-green'  alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
            Reklamy outdoor
          </a>

          <a className='submenu-item' href='/fotografia/' >
          <img width="10px" className='icon-green'  alt="fotografia" src='/img/camera-retro.svg'/>
            Fotografie produktowe
          </a>

          <a className='submenu-item' href='/wystawiennictwo/' >
          <img width="10px" className='icon-green'  alt="wystawiennictwo" src='/img/cubes.svg'/>
            Systemy wystawiennicze
          </a>

          <a className='submenu-item' href='/filmowanie/' >
          <img width="10px" className='icon-green'  alt="filmowanie" src='/img/film.svg'/>
            Filmy reklamowe
          </a>

          <a className='submenu-item' href='/opakowania/' >
          <img width="10px" className='icon-green'  alt="opakowania" src='/img/box-open.svg'/>
            Opakowania
          </a>

          <a className='submenu-item' href='/vr/' >
          <img width="10px" className='icon-green'  alt="VR" src='/img/vr-cardboard.svg'/>
            Wirtualna rzeczywistość
          </a>
          </div>

        <div className='column' style={{marginTop:'20px'}}>
          <h5><b>Blog</b></h5>
          <br />
          <a className='submenu-item' href='/' >
            Wpis 1
          </a>
          <a className='submenu-item' href='/' >
            Wpis 2
          </a>
          <a className='submenu-item' href='/' >
            Wpis 3
          </a>
          <a className='submenu-item' href='/' >
            Wpis 4
          </a>
          <a className='submenu-item' href='/' >
            Wpis 5
          </a>
          <a className='submenu-item' href='/' >
            Wpis 6
          </a>
          <a className='submenu-item' href='/' >
            Wpis 7
          </a>

        </div>

        <div className='column' style={{marginRight:'5%',padding:'5px',marginTop:'25px'}}>
          <h5><b>Kontakt</b></h5>
          <br />
          <p className='submenu-item'>
          <img width="10px" className='icon-green'  alt="ulica" src='/img/map-marker-alt.svg'/>ul. Piotra Ignuta 87</p>
          <p className='submenu-item'>
          <img width="10px" className='icon-green'  alt="ulica" src='/img/city.svg'/>54-151 Wrocław</p>
          <br />


          <a href="tel:+48 71 728 29 13" className='submenu-item' style={{textDecoration:'underline'}}>
          <img width="10px" className='icon-green'  alt="email" src='/img/phone.svg'/>Tel: +48 71 728 29 13</a>


          <a href="mailto:biuro@artopen.pl" className='submenu-item' style={{textDecoration:'underline'}}>
          <img width="10px" className='icon-green'  alt="email" src='/img/paper-plane.svg'/>biuro@artopen.pl</a>


          <br />
          <p className='submenu-item'>
          <img width="10px" className='icon-green'  alt="ulica" src='/img/clock.svg'/>pon. - pt: 8:00 - 16:00</p>

        </div>

        <div className='column' style={{marginTop:'20px'}}>
          <h5><b>Art Open Sp. z o.o.</b></h5>
          <br />

          <p className='submenu-item'>NIP: 8943 13 39 19</p>

          <p className='submenu-item'>REGON: 381593714</p>

          <p className='submenu-item'>KRS: 0000 75 19 13</p>



        </div>



      </div>
        <div className='has-text-centered'>
        <a href='' target="_blank">
          <img width="25px" className='icon-green' alt="fb" src='/img/facebook-square.svg'/>
        </a>
        <a href='' target="_blank">
          <img width="25px" className='icon-green' alt="linkedin" src='/img/linkedin.svg'/>
        </a>
        <a href='' target="_blank">
          <img width="25px" className='icon-green' alt="tweeter" src='/img/twitter-square.svg'/>
        </a>
        <a href='' target="_blank">
          <img width="25px" className='icon-green' alt="instagram" src='/img/instagram-square.svg'/>
        </a>
        <a href='' target="_blank">
          <img width="25px" className='icon-green' alt="behance" src='/img/behance-square.svg'/>
        </a>

          <br />
          <br />
          <p style={{color:'white',fontSize:'12px'}}>
            {copyright} | <a className='link-green'  href="/polityka-prywatnosci/"> Polityka prywatności </a>
            | <a className='link-green' href="/polityka-prywatnosci#cookies/"> Pliki Cookies </a>
            | <a className='link-green' href="/sitemap.xml/"> Mapa strony </a>
          </p>

        </div>
      </div>
      <div onLoad={loadScroll} id='backtotop' style={{display:'none',position:'fixed',right:'2px',bottom:'4px',padding:'4px', width:'27px',textAlign:'center',height:'27px',backgroundColor:'#111111',borderRadius:'5px'}}>
      <a href="#"><img width="20px" className='icon-green'  alt="backtotop" src='/img/angle-up.svg'/></a>
      </div>

    </footer>
  )
}



function scrollFunction() {
  if ( document.documentElement.scrollTop > 250) {
    document.getElementById("backtotop").style.display = "block";
    console.log('>250')
  } else {
    document.getElementById("backtotop").style.display = "none";
    console.log('<250')
  }
}

function loadScroll(){
  document.onscroll = function() {scrollFunction()};
}


export default Footer
