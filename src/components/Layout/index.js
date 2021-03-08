import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config'
import NavBar from '../NavBar'
import Footer from '../Footer'
import CookieConsent from 'react-cookie-consent'

const Layout = (props) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `pl-pl`,
          class: `has-navbar-fixed-top`,
        }}

        title={config.siteTitle}
        meta={[
          {
            name: `description`,
            content: config.siteDescription,
          },
          {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`,
          },
          {
            name: `msapplication-TileColor`,
            content: config.themeColor,
          },
          {
            name: `theme-color`,
            content: config.themeColor,
          },
        ]}
        link={[
          {
            rel: `apple-touch-icon`,
            href: `/icons/apple-touch-icon.png`,
            sizes: `180x180`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-32x32.png`,
            sizes: `32x32`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-16x16.png`,
            sizes: `16x16`,
          },
          {
            rel: `mask-icon`,
            href: `/icons/safari-pinned-tab.svg`,
            color: config.themeColor,
          },
        ]}
        link={[
          {
            rel: `preconnect`,
            href: `https://fonts.gstatic.com`,
          },
          {
            rel: `stylesheet`,
            href: `https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap`,
          },

        ]}
      > </Helmet>
      <NavBar />
      <>{props.children}</>



      <Footer copyright={config.copyright} />

      <CookieConsent
        location="bottom"
        buttonText="Akceptuję"
        cookieName="ArtOpen Cookie"
        style={{ background: "#111111", color:"white",width:"270px", marginLeft:"0.5%",marginBottom:"0.5%",borderRadius:"10px",minHeight:'200px' }}
        buttonStyle={{ color: "#222222",marginTop:'0px', backgroundColor:'#00d1b2', fontSize: "12px",marginLeft: '90px',padding:'12px',borderRadius:'10px'}}
        expires={150}
        debug={false}
        >
        <div style={{marginLeft:'10px',marginRight:'50px',marginTop:'10px',fontSize:'12px'}}>
        <span role="img" aria-label="cookie-emoji">🍪</span>&nbsp;
        <span> Używamy plików <b>cookies</b> w celu zapewnienia najwyższej jakości usług.
        </span>
        <br></br><br></br>

         <span style={{ fontSize: "10px", }}>
          Zajrzyj do naszej <a className='link-green' href="/polityka-prywatnosci#cookies/" target="_blank"> polityki prywatności</a> by dowiedzieć się więcej.
           </span>

        </div>
        </CookieConsent>

    </>
  )
}



export default Layout
