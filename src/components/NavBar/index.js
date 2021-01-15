import React, { useState } from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = () => {
  const [active, setActive] = useState(false)

  const loadSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.display = 'block';
      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 1s';
      document.getElementsByClassName('subMenu')[0].style.opacity = '1';

  }
  const hideSubMenu = () => {

    console.log(document.getElementsByClassName('subMenu')[0].style.display == 'none');

      document.getElementsByClassName('subMenu')[0].style.transition = 'opacity 1s';
      document.getElementsByClassName('subMenu')[0].style.opacity = '0';
      setTimeout(function(){document.getElementsByClassName('subMenu')[0].style.display = 'none';},1000);

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

                <Link className='submenu-item' to='/oferta/covid-19/'>
                  COVID-19
                </Link>

                <Link className='submenu-item' to='/oferta/ekologia/'>
                  EKOLOGIA
                </Link>

                <Link className='submenu-item' to='/oferta/projektowanie-graficzne/' >
                  PROJEKTOWANIE GRAFICZNE
                </Link>

                <Link className='submenu-item' to='/oferta/strony-internetowe/' >
                  STRONY INTERNETOWE
                </Link>

                <Link className='submenu-item' to='/oferta/branding/' >
                  BRANDING
                </Link>

                <Link className='submenu-item' to='/oferta/kalendarze-ksiazkowe/' >
                  KALENDARZE KSIĄŻKOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/kalendarze-firmowe/' >
                  KALENDARZE FIRMOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/gadzety/' >
                  GADŻETY REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/wydruki/' >
                  WYDRUKI REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/reklama-zewnetrzna/' >
                  REKLAMY OUTDOOR 
                </Link>

                <Link className='submenu-item' to='/oferta/fotografia/' >
                  FOTOGRAFIE PRODUKTOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/wystawiennictwo/' >
                  SYSTEMY WYSTAWIENNICZE  
                </Link>

                <Link className='submenu-item' to='/oferta/filmowanie/' >
                  FILMY REKLAMOWE 
                </Link>

                <Link className='submenu-item' to='/oferta/opakowania/' >
                  OPAKOWANIA 
                </Link>

                <Link className='submenu-item' to='/oferta/vr/' >
                  WIRTUALNA RZECZYWISTOŚĆ
                </Link>


              </nav>

            <Link className='navbar-item'  to='/portfolio/'>
              PORTFOLIO
            </Link>

            <Link className='navbar-item'  to='/katalogi/'>
              KATALOGI
            </Link>

            <Link className='navbar-item'  to='/blog/'>
              BLOG
            </Link>


            <Link className='navbar-item'  to='/kontakt/'>
              KONTAKT
            </Link>



              <SearchBox searchIndex={data.siteSearchIndex.index} />

            </div>

            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button-green'
                    to='/#'>
                    Sklep online
                  </Link>
                </p>
              </div>
            </div>
            


          </div>

        </nav>

      )}
    />
  )

}

export default NavBar
