import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import { ModalForm } from '../../components/ModalForm'
import {NewsletterForm} from '../../components/NewsletterForm'

function topFunction() {
  document.getElementById('modal').scrollTop = 0;
}


const NavBar = () => {
  const [active, setActive] = useState(false)

  const loadSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.display = 'block';
      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 0.3s';
      setTimeout(function(){document.getElementsByClassName('subMenu')[0].style.opacity = '1';},300);

  }
  const hideSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 0.3s';
      document.getElementsByClassName('subMenu')[0].style.opacity = '0';
      setTimeout(function(){document.getElementsByClassName('subMenu')[0].style.display = 'none';},300);

  }

  const modalEnter = () => {
    let i = 0;
    console.log('enter modal');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').style.transition = 'opacity 0.5s';

    setTimeout(function(){document.getElementById('modal').style.opacity = '1';},500);
  }
  const modalDestroy = () => {
    let i = 0;
    console.log('destroy modal');

    document.getElementById('modal').style.transition = 'opacity 1s';
    document.getElementById('modal').style.opacity = '0';
    setTimeout(function(){document.getElementById('modal').style.display = 'none';
    },500);
  }


  const toggleNavBar = () => {
    setActive(!active)
  }

  return (
    <StaticQuery
      query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
      render={data => (
        <nav className='navbar is-fixed-top' id='bignav' onMouseLeave={hideSubMenu} aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' style={{marginLeft:'10px'}}>
              <img onLoad={checkLoad} width="100px" style={{transform:'scale(1.3)'}} src='/img/ArtOpen.svg' alt="ArtOpen multimedialna agencja reklamowa" />
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
              aria-label="Navbar-mobile"
              onClick={toggleNavBar}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={`navbar-menu ${active ? 'is-active' : ''}`} id='navMenu'>

            <div className='navbar-end'>

            <Link className='navbar-item'  to='/o-nas/'>
              O NAS
            </Link>

            <Link className='navbar-item'  to='/praca/'>
              PRACA
            </Link>

            <Link className='navbar-item' onTouchMove={loadSubMenu} onMouseOver={loadSubMenu} to='/oferta/'>
              OFERTA
            </Link>

              <nav className="subMenu"  onMouseLeave={hideSubMenu}>

                <Link className='submenu-item' to='/covid-19/'>
                  COVID-19
                </Link>

                <Link className='submenu-item' to='/ekologia/'>
                  EKOLOGIA
                </Link>

                <Link className='submenu-item' to='/projektowanie-graficzne/' >
                  PROJEKTOWANIE GRAFICZNE
                </Link>

                <Link className='submenu-item' to='/strony-internetowe/' >
                  STRONY INTERNETOWE
                </Link>

                <Link className='submenu-item' to='/branding/' >
                  BRANDING
                </Link>

                <Link className='submenu-item' to='/kalendarze-ksiazkowe/' >
                  KALENDARZE KSIĄŻKOWE 
                </Link>

                <Link className='submenu-item' to='/kalendarze-firmowe/' >
                  KALENDARZE FIRMOWE 
                </Link>

                <Link className='submenu-item' to='/gadzety/' >
                  GADŻETY REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/wydruki/' >
                  WYDRUKI REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/reklama-zewnetrzna/' >
                  REKLAMY OUTDOOR 
                </Link>

                <Link className='submenu-item' to='/fotografia/' >
                  FOTOGRAFIE PRODUKTOWE 
                </Link>

                <Link className='submenu-item' to='/wystawiennictwo/' >
                  SYSTEMY WYSTAWIENNICZE  
                </Link>

                <Link className='submenu-item' to='/filmowanie/' >
                  FILMY REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/opakowania/' >
                  OPAKOWANIA 
                </Link>

                <Link className='submenu-item' to='/vr/' >
                  WIRTUALNA RZECZYWISTOŚĆ
                </Link>


              </nav>

            <Link className='navbar-item'  to='/portfolio/'>
              PORTFOLIO
            </Link>


            <Link className='navbar-item'  to='/blog/'>
              BLOG
            </Link>

            <Link className='navbar-item'  to='/katalogi/'>
              KATALOGI
            </Link>


            <Link className='navbar-item'  to='/kontakt/'>
              KONTAKT
            </Link>
            </div>

            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a
                    className='button-green'

                    onClick={modalEnter}>
                    Złóż zamówienie
                  </a>
                </p>

                <p className='control'>
                  <a
                    className='button-green'
                    href='#'>
                    Sklep online
                  </a>
                </p>

              </div>

            </div>
            <div className='navbar-item search' style={{marginLeft:'-25px'}}>
            <SearchBox searchIndex={data.siteSearchIndex.index} />



            </div>

            <div className='navbar-item langs'>
              <div className='field is-grouped'>
              <p className='control'>
                <a
                  className='button-green'
                  href='#'>
                  EN
                </a>
              </p>

              <p className='control'>
                <a
                  className='button-green'
                  href='#'>
                  DE
                </a>
              </p>
              </div>
            </div>





          </div>
          <div id='modal'
          style={{display:'none', transition:'opacity 1s',opacity:'0',position:'fixed',top:'0px',left:'0px',height:'100%',width:'100%',backgroundColor:'white',zIndex:'20000',overflow:'scroll', overflowX:'hidden'}}>
            <div style={{marginLeft:'5%',marginRight:'5%',paddingTop:'5%'}}>

                <a className='button-green' style={{fontSize:'20px',position:'fixed',top:'1%',left:'1%'}} onMouseOver={modalDestroy} >&nbsp;x&nbsp;</a>
              <ModalForm />

                <a className='button-green' onClick={topFunction} style={{position:'fixed',bottom:'1%',right:'1%'}}><img width="15px"  alt="backtotop" src='/img/angle-up.svg'/></a>

            </div>



          </div>
          <div id='newsletter'
          style={{display:'none', transition:'opacity 1s',opacity:'0',position:'fixed',top:'0px',left:'0px',height:'100%',width:'100%',backgroundColor:'rgba(255,255,255,0.85)',zIndex:'20000',overflow:'scroll'}}>
            <div style={{marginLeft:'5%',marginRight:'5%',paddingTop:'50px'}}>


            <NewsletterForm />


            </div>
            </div>
        </nav>

      )}
    />
  )

}



function darkMode(){

  if (global.localStorage.getItem('theme')=='normal'){
  document.querySelector("nav").style.backgroundColor = 'black';

  document.getElementsByClassName("navbar-item")[0].firstChild.src =  '/img/ArtOpen-white.svg';

  if (document.getElementById("logointro")!= null){
  document.getElementById("logointro").src =  '/img/ArtOpen-white.svg';
  }

  document.querySelector("html").style.backgroundColor = 'black';


  for (let i=0;i<document.getElementsByClassName("full").lenght;i++){
  document.getElementsByClassName("full")[i].style.backgroundColor =  'black';
  }

  for (let i=0;i<document.getElementsByClassName("section").lenght;i++){
  document.getElementsByClassName("section")[i].style.backgroundColor =  'black';
  }

  document.getElementById('dark-mode-btn').innerText = 'tryb jasny';
  document.getElementById('dark-mode-img').src = '/img/sun.svg';


  }
  else {
    document.querySelector("nav").style.backgroundColor = 'white';
    document.getElementsByClassName("navbar-item")[0].firstChild.src =  '/img/ArtOpen.svg';
    if (document.getElementById("logointro")!= null){
    document.getElementById("logointro").src =  '/img/ArtOpen.svg';
    }
    document.querySelector("html").style.backgroundColor = 'white';

    for (let i=0;i<document.getElementsByClassName("full").lenght;i++){
    document.getElementsByClassName("full")[i].style.backgroundColor =  'white';
    }

    for (let i=0;i<document.getElementsByClassName("section").lenght;i++){
    document.getElementsByClassName("section")[i].style.backgroundColor =  'white';
    }

    document.getElementById('dark-mode-btn').innerText = 'tryb ciemny';
    document.getElementById('dark-mode-img').src = '/img/moon.svg';

  }
}
function checkLoad(){
  //console.log('darklord');
  //console.log(global.localStorage.getItem('theme'));
  darkMode();
}







export default NavBar
