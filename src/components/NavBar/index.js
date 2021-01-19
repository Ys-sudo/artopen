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

    console.log('enter modal');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').style.transition = 'opacity 0.5s';
    setTimeout(function(){document.getElementById('modal').style.opacity = '1';},500);
  }
  const modalDestroy = () => {

    console.log('destroy modal');

    document.getElementById('modal').style.transition = 'opacity 1s';
    document.getElementById('modal').style.opacity = '0';
    setTimeout(function(){document.getElementById('modal').style.display = 'none';},1000);

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
        <nav className='navbar is-fixed-top' aria-label='main navigation'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item'>
              <strong className='fade-in'>Art Open</strong>
            </Link>
            <button
              className={`button navbar-burger ${active ? 'is-active' : ''}`}
              data-target='navMenu'
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

            <Link className='navbar-item' onMouseOver={loadSubMenu} to='/oferta/'>
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
                    href='/#'>
                    Sklep online
                  </a>
                </p>


              </div>

            </div>
            <div className='navbar-item' style={{marginLeft:'-20px'}}>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            </div>

            <div id='modal'
            style={{display:'none', transition:'opacity 1s',opacity:'0',position:'fixed',top:'0px',left:'0px',height:'100%',width:'100%',backgroundColor:'white',zIndex:'200'}}>
              <div style={{marginLeft:'10%',marginRight:'10%',paddingTop:'5%'}}>

                  <a className='button-green' style={{fontSize:'30px'}} onMouseOver={modalDestroy} >&nbsp;x&nbsp;</a>


              </div>

            </div>



          </div>

        </nav>

      )}
    />
  )

}

export default NavBar
