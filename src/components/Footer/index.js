import React from 'react'
import PropTypes from 'prop-types'
import config from '../../../config'
import { Link, graphql, StaticQuery } from 'gatsby'
class Footer extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
    <footer className='footer' style={{alignItems:'bottom', paddingBottom:'30px'}}>

      <div className='container'>
        <div style={{textAlign:'center'}}>
          <Link to="/"><img width="200px" src='/img/ArtOpen-white.svg' alt="ArtOpen studio reklamy" /></Link>
          <br></br>
        </div>
      <br></br>
      <div className='section columns' style={{marginLeft:'3%'}}>

        <div className='column' style={{ padding:'5px',marginTop:'30px'}}>
          <h5><b>Oferta</b></h5>
          <br />
          <Link className='submenu-item' to='/covid-19/'>
          <img width="10px" className='icon-green'  alt="covid-19" src='/img/viruses.svg'/>
            Covid-19
          </Link>

          <Link className='submenu-item' to='/ekologia/'>
          <img width="10px" className='icon-green'  alt="ekologia" src='/img/leaf.svg'/>
            Ekologia
          </Link>

          <Link className='submenu-item' to='/branding/' >
          <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-ruler.svg'/>
            Branding
          </Link>

          <Link className='submenu-item' to='/projektowanie-graficzne/' >
          <img width="10px" className='icon-green'  alt="branding" src='/img/pencil-alt.svg'/>
            Projektowanie graficzne
          </Link>

          <Link className='submenu-item' to='/strony-internetowe/' >
          <img width="10px" className='icon-green'  alt="strony internetowe" src='/img/code.svg'/>
            Strony internetowe
          </Link>

          <Link className='submenu-item' to='/kalendarze-ksiazkowe/' >
          <img width="10px" className='icon-green'  alt="kalendarze książkowe" src='/img/book.svg'/>
            Kalendarze książkowe
          </Link>

          <Link className='submenu-item' to='/kalendarze-firmowe/' >
          <img width="10px" className='icon-green'  alt="kalendarze firmowe" src='/img/calendar-alt.svg'/>
            Kalendarze firmowe
          </Link>

          <Link className='submenu-item' to='/gadzety/' >
          <img width="10px" className='icon-green'  alt="gadżety" src='/img/lightbulb.svg'/>
            Gadżety reklamowe 
          </Link>

          </div>
          <div className='column removespace' style={{padding:'5px',marginTop:'30px'}}>
          <br /><br />

          <Link className='submenu-item' to='/wydruki/' >
          <img width="10px" className='icon-green'  alt="wydruki" src='/img/map.svg'/>
            Wydruki reklamowe
          </Link>

          <Link className='submenu-item' to='/reklama-zewnetrzna/' >
          <img width="10px" className='icon-green'  alt="reklama zewnętrzna" src='/img/object-ungroup.svg'/>
            Reklamy outdoor
          </Link>

          <Link className='submenu-item' to='/fotografia/' >
          <img width="10px" className='icon-green'  alt="fotografia" src='/img/camera-retro.svg'/>
            Fotografie produktowe
          </Link>

          <Link className='submenu-item' to='/wystawiennictwo/' >
          <img width="10px" className='icon-green'  alt="wystawiennictwo" src='/img/cubes.svg'/>
            Systemy wystawiennicze
          </Link>

          <Link className='submenu-item' to='/filmowanie/' >
          <img width="10px" className='icon-green'  alt="filmowanie" src='/img/film.svg'/>
            Filmy reklamowe
          </Link>

          <Link className='submenu-item' to='/opakowania/' >
          <img width="10px" className='icon-green'  alt="opakowania" src='/img/box-open.svg'/>
            Opakowania
          </Link>

          <Link className='submenu-item' to='/vr/' >
          <img width="10px" className='icon-green'  alt="VR" src='/img/vr-cardboard.svg'/>
            Wirtualna rzeczywistość
          </Link>
          </div>

        <div className='column' style={{marginTop:'20px'}}>
          <h5><b>Blog</b></h5>
          <br />
          {posts &&
            posts.slice(0,8)
            .filter(post => post.node.frontmatter.templateKey === 'article-page')
            .map(({ node: post }) => (
              <Link className='submenu-item' key={post.id} to={post.fields.slug+'/'} >
                {post.frontmatter.title}
              </Link>
          ))}

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

          <p className='submenu-item'>NIP: 8943133919</p>

          <p className='submenu-item'>REGON: 381593714</p>

          <p className='submenu-item'>KRS: 0000751913</p>

          <br />
          <p className='control'>
              <a className="button-green" onClick={setdarkMode}>
              <img width="10px" id="dark-mode-img" className='icon-green'  alt="darkmode" src='/img/moon.svg'/>
              <span id="dark-mode-btn">tryb ciemny</span></a>
            </p>
          <br />
          <h5><b>Newsletter</b></h5>
          <br />

          <a onClick={newsEnter} className='button-green' > <img width="10px" className='icon-green'  alt="adres" src='/img/address-card.svg'/>zapisz się </a>
          <br />


         {/*}//TODO: Google play badge
          <br /><h5 style={{marginTop:'20px'}}><b>Aplikacja</b></h5>
          <Link to='http://play.google.com/store/?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="oimg" alt='pobierz z Google Play' style={{maxWidth:'150px'}} src='https://play.google.com/intl/en_us/badges/static/images/badges/pl_badge_web_generic.png'/></Link>
          */}
        </div>



      </div>
        <div className='has-text-centered'>
        <a href='https://facebook.com/artopenstudioreklamy/' target="_blank">
          <img width="25px" className='icon-green' alt="facebook" src='/img/facebook-square.svg'/>
        </a>
        <a href='https://www.youtube.com/channel/UCR45VIn9iEmnQo7JU_FL2uQ/' target="_blank">
          <img width="25px" className='icon-green' alt="youtube" src='/img/youtube-square.svg'/>
        </a>
        <a href='https://www.linkedin.com/company/art-open-studio-reklamy/' target="_blank">
          <img width="25px" className='icon-green' alt="linkedin" src='/img/linkedin.svg'/>
        </a>
        <a href='https://twitter.com/AReklamy/' target="_blank">
          <img width="25px" className='icon-green' alt="tweeter" src='/img/twitter-square.svg'/>
        </a>
        <a href='https://www.instagram.com/artopen.pl/' target="_blank">
          <img width="25px" className='icon-green' alt="instagram" src='/img/instagram-square.svg'/>
        </a>
        <a href='https://www.behance.net/ArtOpenStudioReklamy/' target="_blank">
          <img width="25px" className='icon-green' alt="behance" src='/img/behance-square.svg'/>
        </a>

          <br />
          <br />
          <p style={{color:'white',fontSize:'12px'}}>
            {config.copyright} | <Link className='link-green' target="_blank"  to="/polityka-prywatnosci/"> Polityka prywatności </Link>
            | <Link className='link-green' to="/polityka-prywatnosci#cookies"> Pliki Cookies </Link>
            | <a className='link-green' target="_blank" href="https://artopen.netlify.app/sitemap.xml/"> Mapa strony </a>
          </p>

        </div>
      </div>

    <div onLoad={loadScroll} id='backtotop'
      style={{display:'none',position:'fixed',right:'2px',
      bottom:'4px',padding:'4px', width:'27px',textAlign:'center',
      height:'27px',backgroundColor:'#111111',borderRadius:'5px'}}>
      <Link to="#"><img width="20px"  alt="backtotop" src='/img/angle-up.svg'/></Link>
    </div>


    </footer>
  )
}
}

const newsEnter = () => {
  let i = 0;
  console.log('enter modal');
  document.getElementById('newsletter').style.display = 'block';
  document.getElementById('newsletter').style.transition = 'opacity 0.5s';

  setTimeout(function(){document.getElementById('newsletter').style.opacity = '1';},500);
}


function scrollFunction() {
  if ( document.documentElement.scrollTop > 100) {
    document.getElementById("backtotop").style.display = "block";







  } else {
    document.getElementById("backtotop").style.display = "none";




  }
}

function loadScroll(){
  console.log('loaded');
  document.onscroll = function() {scrollFunction()};

}

//dark mode grind
let isDark;


function setdarkMode(){
  if (isDark==true){
    isDark = false;
    global.localStorage.setItem('theme', 'dracula');
    console.log(global.localStorage.getItem('theme'));
    darkMode();
    document.getElementById('dark-mode-btn').innerText = 'tryb ciemny';
    document.getElementById('dark-mode-img').src = '/img/moon.svg';
  } else {
    isDark = true;
    global.localStorage.setItem('theme', 'normal');
    console.log(global.localStorage.getItem('theme'));
    console.log(isDark);
    darkMode();
    document.getElementById('dark-mode-btn').innerText = 'tryb jasny';
    document.getElementById('dark-mode-img').src = '/img/sun.svg';
  }
}



function darkMode(){

  if (global.localStorage.getItem('theme')=='normal'){
  document.querySelector("nav").style.backgroundColor = 'black';
  document.getElementsByClassName("navbar-item")[0].firstChild.style.filter =  'invert(1)';
  document.querySelector("html").style.backgroundColor = 'black';

  for (let i=0;i<document.getElementsByClassName("full").lenght;i++){
  document.getElementsByClassName("full")[i].style.backgroundColor =  'black';
  }

  for (let i=0;i<document.getElementsByClassName("section").lenght;i++){
  document.getElementsByClassName("section")[i].style.backgroundColor =  'black';
  }


  }
  else {
    document.querySelector("nav").style.backgroundColor = 'white';
    document.getElementsByClassName("navbar-item")[0].firstChild.style.filter =  'invert(0)';
    document.querySelector("html").style.backgroundColor = 'white';



    for (let i=0;i<document.querySelectorAll('.full').lenght;i++){
    document.querySelectorAll('.full')[i].style.backgroundColor =  'white';
    }

    for (let i=0;i<document.getElementsByClassName("section").lenght;i++){
    document.getElementsByClassName("section")[i].style.backgroundColor =  'white';
    }

  }
}



Footer.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query footerQuery {
        allMarkdownRemark(
          limit: 8,
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "article-page" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Footer data={data} count={count} />}
  />
)
