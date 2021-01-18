import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer' style={{alignItems:'bottom', paddingBottom:'30px'}}>

      <div className='container'>
        <div style={{textAlign:'center'}}>
          <a href="/"><img width="300px" src='' alt="ArtOpen logo białe svg" /></a>
          <br></br>
        </div>
      <div className='section columns' style={{marginLeft:'3%'}}>

        <div style={{width:'20%', padding:'5px',marginTop:'30px'}}>
          <h5><b>Oferta</b></h5>
          <br />
          <a className='submenu-item' href='/covid-19/'>
            Covid-19
          </a>

          <a className='submenu-item' href='/ekologia/'>
            Ekologia
          </a>

          <a className='submenu-item' href='/branding/' >
            Branding
          </a>

          <a className='submenu-item' href='/projektowanie-graficzne/' >
            Projektowanie graficzne
          </a>

          <a className='submenu-item' href='/strony-internetowe/' >
            Strony internetowe
          </a>

          <a className='submenu-item' href='/kalendarze-ksiazkowe/' >
            Kalendarze książkowe
          </a>

          <a className='submenu-item' href='/kalendarze-firmowe/' >
            Kalendarze firmowe
          </a>

          <a className='submenu-item' href='/gadzety/' >
            Gadżety reklamowe 
          </a>

          </div>
          <div style={{width:'20%',marginRight:'5%',padding:'5px',marginTop:'30px'}}>
          <br /><br />

          <a className='submenu-item' href='/wydruki/' >
            Wydruki reklamowe
          </a>

          <a className='submenu-item' href='/reklama-zewnetrzna/' >
            Reklamy outdoor
          </a>

          <a className='submenu-item' href='/fotografia/' >
            Fotografie produktowe
          </a>

          <a className='submenu-item' href='/wystawiennictwo/' >
            Systemy wystawiennicze
          </a>

          <a className='submenu-item' href='/filmowanie/' >
            Filmy reklamowe
          </a>

          <a className='submenu-item' href='/opakowania/' >
            Opakowania
          </a>

          <a className='submenu-item' href='/vr/' >
            Wirtualna rzeczywistość
          </a>
          </div>

        <div style={{width:'20%',marginTop:'30px'}}>
          <h5><b>Blog</b></h5>
          <br />
          <a className='submenu-item' href='/vr/' >
            Wpis 1
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 2
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 3
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 4
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 5
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 6
          </a>
          <a className='submenu-item' href='/vr/' >
            Wpis 7
          </a>

        </div>

        <div style={{width:'20%',marginRight:'5%',padding:'5px',marginTop:'30px'}}>
          <h5><b>Kontakt</b></h5>
          <br />
          <p className='submenu-item'>ul. Piotra Ignuta 87</p>
          <p className='submenu-item'>54-151 Wrocław</p>
          <br />
          <a href="tel:+48 71 728 29 13" className='submenu-item'>Tel: +48 71 728 29 13</a>
          <a href="mailto:biuro@artopen.pl" className='submenu-item'>biuro@artopen.pl</a>
          <br />
          <p className='submenu-item'>pon. - pt: 8:00 - 16:00</p>

        </div>

        <div style={{width:'20%',marginTop:'30px'}}>
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
            | <a className='link-green' href="#"> Mapa strony </a>
          </p>

        </div>
      </div>
      <div style={{position:'fixed',right:'2px',bottom:'4px',padding:'4px', width:'27px',textAlign:'center',height:'27px',backgroundColor:'#111111',borderRadius:'5px'}}>
      <a href="#"><img width="20px" className='icon-green'  alt="backtotop" src='/img/angle-up.svg'/></a>
      </div>
    </footer>
  )
}

export default Footer
