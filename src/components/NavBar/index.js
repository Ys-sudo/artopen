import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'
import { ModalForm } from '../../components/ModalForm'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const loadSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.display = 'block';
      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 0.5s';
      setTimeout(function(){document.getElementsByClassName('subMenu')[0].style.opacity = '1';},500);

  }
  const hideSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 1s';
      document.getElementsByClassName('subMenu')[0].style.opacity = '0';
      setTimeout(function(){document.getElementsByClassName('subMenu')[0].style.display = 'none';},1000);

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



  const newsDestroy = () => {
    let i = 0;
    console.log('destroy modal');

    document.getElementById('newsletter').style.transition = 'opacity 1s';
    document.getElementById('newsletter').style.opacity = '0';
    setTimeout(function(){document.getElementById('newsletter').style.display = 'none';
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
            <a href='/' className='navbar-item' style={{marginLeft:'10px'}}>
              <img width="100px" style={{transform:'scale(1.3)'}} src='/img/ArtOpen.svg' alt="ArtOpen multimedialna agencja reklamowa" />
            </a>
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
            <div className='navbar-item' style={{marginLeft:'-25px',marginRight:'-25px'}}>
            <SearchBox searchIndex={data.siteSearchIndex.index} />



            </div>

            <div className='navbar-item'>
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
          style={{display:'none', transition:'opacity 1s',opacity:'0',position:'fixed',top:'0px',left:'0px',height:'100%',width:'100%',backgroundColor:'white',zIndex:'20000',overflow:'scroll'}}>
            <div style={{marginLeft:'5%',marginRight:'5%',paddingTop:'5%'}}>

                <a className='button-green' style={{fontSize:'30px'}} onMouseOver={modalDestroy} >&nbsp;x&nbsp;</a>
                <ModalForm />

            </div>



          </div>
          <div id='newsletter'
          style={{display:'none', transition:'opacity 1s',opacity:'0',position:'fixed',top:'0px',left:'0px',height:'100%',width:'100%',backgroundColor:'rgba(255,255,255,0.9)',zIndex:'20000',overflow:'scroll'}}>
            <div style={{marginLeft:'5%',marginRight:'5%',paddingTop:'8%'}}>



                <form style={{marginLeft:'auto',marginRight:'auto',minHeight:'450px',maxWidth:'600px',backgroundColor:'#00d1b2',borderRadius:'25px',padding:'10px',paddingTop:'30px'}}>
                <a className='button-white' style={{fontSize:'20px'}} onMouseOver={newsDestroy} >&nbsp;x&nbsp;</a>
                <div style={{textAlign:'center',marginLeft:'20px',marginRight:'20px'}}>
                <br />
                <br />
                <h5 className='title'>Zapisz się na <b style={{color:'white'}}>newsletter</b>! </h5>
                <sub className='subtitle'> Nowości, promocje i oferty specjalne.</sub>
                <br /><br />
                <input className='field input' required="true" type='email' placeholder='Twój adres email'>
                </input>

                <label style={{fontSize: '12px',color:'white'}} className='main'  htmlFor="zgoda">   <input required={true} type="checkbox" id="zgoda" name="zgoda" defaultChecked="true" value="none"/>Wyrażam zgodę na otrzymywanie drogą elektroniczną na wskazany przeze mnie adres email informacji handlowej w rozumieniu art. 10 ust. 1 ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną od Art Open Sp. z o.o.
                <sup>*</sup>.<span className="check"></span></label>
                <button className="button is-primary" style={{backgroundColor:'#333333',paddingLeft:'35px',paddingRight:'35px',color:'white',fontSize:'20px',borderRadius:'15px'}} type="submit" >
                <b>Zapisz mnie!</b>
                </button>

                </div>
                <div style={{textAlign:'center'}}>
                <br />

                <img width="150px" src='/img/ArtOpen-white.svg' alt="ArtOpen studio reklamy" />
                <br />
                <a className='' href="/polityka-prywatnosci/">Polityka prywatności</a>
                <br />
                <br />
                </div>
                </form>
                <div>


                </div>

            </div>
            </div>
        </nav>

      )}
    />
  )

}





export default NavBar
