import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import ContactCall from '../ContactCall'
import ModalCall from '../ModalCall'
import NewsCall from '../NewsCall'
import OfferRoll from '../OfferRoll'
import BlogRoll from '../BlogRoll'
import PortfolioRoll from '../PortfolioRoll'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const HomePageTemplate = (props) => {
  const { title, meta_title, meta_description, heading, keywords } = props

  return (
    <div>
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
        <meta name='keywords' content={keywords} />
        <link rel="preload" as="image" href="img/sun.svg" />
        <link rel="preload" as="image" href="img/moon.svg" />
      </Helmet>
      <section className='hero is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <img id="logointro" src="/img/ArtOpen.svg" style={{marginLeft:'-25px'}} width="400px"/>
                  <h1 className='title'>
                    {title}
                  </h1>
                  <h2 className='subtitle'>
                    {heading}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='hero is-primary is-bold'>
        <div className='hero-body' style={{backgroundColor:'#404040'}}>
          <div className='container' style={{marginLeft:'auto',marginRight:'auto'}}>
            <div className='columns' style={{textAlign:'center'}}>
              <div className='column ofert'>
              <h3 style={{textAlign:'left'}}><strong style={{color:'white', fontSize:'20px'}}>Oferta <b style={{color:'#00d1b2'}}>produktów ochronnych</b></strong></h3>
              </div>


              <div className='column columns covidoffer' style={{marginTop:'20px',minWidth:'60%'}}>
              <Link to="/covid-19#maseczki" className='column offer' style={{margin:'10px',borderRadius:'15px'}}>
                <div >
                <img alt="maski chirurgiczne, maski bawełniane, maski z logo, covid-19" width="40px"  style={{verticalAlign:'middle'}}   alt="maseczki" src='/img/maseczki.svg'/>
                <br /><br />
                <h3 style={{color:'white'}}>maski</h3>
                </div>
              </Link>
              <Link to="/covid-19#przylbice" className='column offer' style={{margin:'10px',borderRadius:'15px'}}>
                <div >
                <img alt="przyłbice covid-19" width="40px"  style={{verticalAlign:'middle'}}   alt="przyłbice" src='/img/przylbice.svg'/>
                <br /><br />
                <h3 style={{color:'white'}}>przyłbice</h3>
                </div>
              </Link>
              <Link to="/covid-19#produkty-antybakteryjne" className='column offer' style={{margin:'10px',borderRadius:'15px'}}>
                <div>
                <img alt="dezynfekcja, żele przeciwbakteryjne, covid-19" width="40px"  style={{verticalAlign:'middle'}}   alt="dezynfekcja" src='/img/dezynfekcja.svg'/>
                <br /><br />
                <h3 style={{color:'white'}}>dezynfekcja</h3>
                </div>
              </Link>
              </div>
              <div className='column'>
              <br />
              <Link className='button-white' to='/covid-19/' ><b>sprawdź</b> &nbsp;&nbsp;
              <img width="20px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="covid-19" src='/img/viruses.svg'/>
              </Link>
              </div>
            </div>
            <br />
            <div>
            <h3> <b>Działalność Art Open w czasie stanu epidemii COVID-19 </b></h3> <br />
            <h4>W związku z wprowadzeniem stanu epidemii dot. COVID-19 informujemy, iż firma Art Open kontynuuje swoją działalność bez zakłóceń. Na bieżąco przyjmujemy zamówienia oraz realizujemy wszystkie dostawy naszych produktów do Klientów. Wszelkie prace administracyjne oraz graficzne realizowane są bez zmian.</h4>
            </div>
          </div>
        </div>
      </section>


      <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
      <br /><br />
      <img src='/img/katalogi.svg' style={{minWidth:'50%'}} alt='oferta' />
      <h4 className='title'> Poznaj naszą ofertę: </h4>
      <h5 className='subtitle'> Zobacz co możemy dla Ciebie zrobić. </h5>
      <br />
      <OfferRoll />
      </div>


      <br />
      <br />
      <br />
      <ModalCall />


      <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'50px'}}>
        <div style={{textAlign:'left',marginTop:'100px'}}>
        {/* TODO: Grafika 1*/}
        <img alt="agencja reklamowa ArtOpen Wrocław" src='/img/portfolio2.svg' width='70%'  alt='portfolio' />

        <br /><br />
        <h4 className='title' style={{textAlign:'center',marginLeft:'15px',marginRight:'15px'}}> Portfolio </h4>
        <h5 className='subtitle' style={{marginBottom:'20px',textAlign:'center',marginLeft:'15px',marginRight:'15px'}}> Zapoznaj się z naszymi realizacjami. </h5>
        </div>

        <PortfolioRoll />
        < br/>
        <div style={{textAlign:'center'}}>
          <Link className="button-green" style={{fontSize:'18px'}} to="/portfolio/"> Zobacz nasze projekty <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
        </div>
      </div>


      <div style={{marginTop:'5%',marginLeft:'auto',marginRight:'auto',marginBottom:'5%',textAlign:'center'}}>
      <div style={{textAlign:'right',marginTop:'0px',marginLeft:'50px'}}>

      {/* TODO: Grafika 2*/}
      <img alt="agencja reklamowa ArtOpen Wrocław" src='/img/blog.svg' width='70%' alt='blog' />

      </div>

      <br />
      <h4 className='title'> Blog </h4>
      <h5 className='subtitle'> Zapraszamy do lektury. </h5>
      <br />

      <BlogRoll />


      < br/>< br/>

          <Link className="button-green" style={{fontSize:'18px'}} to="/blog/"> Zobacz wszystkie wpisy <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </Link>
      < br/>< br/>
      </div>

      <section className='hero' style={{marginTop:'-7px'}}>
        <NewsCall />
      </section>

      <section >

          <div style={{marginTop:'0px',marginBottom:'-7px'}}>


            <div className='columns' style={{margin:'0px',marginTop:'0px'}}>

              <div className='column halfsize' style={{marginLeft:'50px',marginRight:'50px'}}>
                <br />
                <h5 className='has-text-weight-semibold is-size-2'>Ekologiczne produkty</h5>
                <h3 className='subtitle'> Co nas wyróżnia? </h3>

                <h4>Jednym z niezwykle ważnych działań w naszej firmie są czynności wspierające ochronę środowiska naturalnego poprzez oferowanie produktów ekologicznych i biodegradowalnych takich jak np. papier z kamienia lub trawy. Chcemy przez to dołożyć naszą małą cegiełkę do ogólnoświatowego ruchu proekologicznego.
                <br /><br />
                Wszystkie proponowane przez nas produkty z oferty ekologicznej są przyjazne dla środowiska, a także trwałe oraz estetyczne. Rezygnacja z produktów nie podelegających recyklingowi może być dla Ciebie pierwszym, bardzo ważnym krokiem do ekologicznego stylu zarządzania firmą.</h4>
                <br />
                <br />
                <Link className='button-green' to='/ekologia/'> ekologia &nbsp;&nbsp;
                <img width="10px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="ekologia" src='/img/leaf.svg'/>
                 </Link>
                <br />
                <br />
              </div>


              <div className='column' style={{marginRight:'0px',minWidth:'50%',textAlign:'right',padding:'0px',minWidth:'50%'}}>
              <img src='/img/ekologia.jpg' alt="ekologiczne produkty" width='100%' />
              </div>

            </div>

        </div>
      </section>


      <section className='is-primary '>

          <div style={{marginTop:'0px'}}>

            <div className='columns' style={{margin:'0px',marginTop:'0px'}}>

            <div className='column' style={{marginRight:'0px',padding:'0px',minWidth:'50%'}}>
            <img src='/img/kreator-kalendarz.jpg' alt="" width='100%' />
            </div>

              <div className='column halfsize' style={{marginLeft:'50px',marginRight:'50px',textAlign:'right'}}>
                <br />
                <h5 className='has-text-weight-semibold is-size-2'>Kreator kalendarzy</h5>
                <h3 className='subtitle'> Zaprojektuj kalendarz online </h3>
                <br />
                <h4>Skomponuj swój autorski projekt kalendarza lub notesu,<br /> zgodnie z indywidualnymi preferencjami i potrzebami.</h4>
                <br />
                <br />
                <Link className='button-green' to='/kreator-kalendarzy/'> kreator kalendarzy &nbsp;&nbsp;
                    <img width="10px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="kalendarze" src='/img/calendar-alt.svg'/>
                 </Link>
                <br />
                <br />
              </div>




            </div>
          </div>

      </section>


      <section className='hero is-primary is-bold is-medium' async style={{marginTop:'-7px', backgroundImage:'url(/img/tlo-liczniki.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'top',backgroundAttachment: `fixed`,}}>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns timers'>

              <div className='column' style={{textAlign:'center'}}>
              <p>Lat na rynku</p>
              <h5 id='t1' className='is-size-2'>
              12
              </h5>
              </div>

              <div className='column' style={{textAlign:'center',borderLeft:'1px solid white'}}>
              <p>Stałych klientów</p>
              <h5 id='t2' className='is-size-2'>
              250
              </h5>
              </div>

              <div className='column' style={{textAlign:'center',borderLeft:'1px solid white'}}>
              <p>Projektów graficznych</p>
              <h5 id='t3' className='is-size-2'>
              5000
              </h5>
              </div>

              <div className='column' style={{textAlign:'center',borderLeft:'1px solid white'}}>
              <p>Wykonanych zamówień</p>
              <h5 id='t4' className='is-size-2'>
              12500
              </h5>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className='is-bold is-medium'>
        <div className='hero-body'>
          <div className='container' >
          <div style={{textAlign:'center'}}>
          <img id='rotate' src="/img/logo-square.svg" width="120px" />
          <h5 className='has-text-weight-semibold is-size-2' >O nas:</h5>
          </div>
          <br />
          <br />
            <div className='columns'>

              <div className='column' style={{marginLeft:'50px',marginRight:'50px'}}>
                <h3 className='title'> Agencja reklamowa Art Open,<br /> multimedialne studio projektowania </h3>
                <br />
                <h4>Nasz zespół tworzą ludzie pełni pasji, kreatywności i zaangażowania w każdy powierzony projekt. Od blisko dekady, wspólnie z Wami, naszymi Klientami, realizujemy różnorodne przedsięwzięcia z zakresu identyfikacji wizualnej, promocji oraz projektowania graficznego, w tym stron internetowych i realizacji filmów.</h4>
                <br />
                <br />
                <Link className='button-green' to='/o-nas/'> poznaj nasz zespół &nbsp;&nbsp;
                  <img width="10px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/>
                </Link>
              </div>


              <div className='column' style={{marginRight:'50px'}}>
              <img alt="agencja reklamowa" src='/img/slider_1.jpg' alt="" height='100%' />
              </div>

            </div>
          </div>
        </div>
      </section>









      <div style={{marginTop:'5%',marginLeft:'7%',marginRight:'7%',marginBottom:'5%'}}>
      <h5 className='has-text-weight-semibold is-size-2'>Co mówią o nas klienci?</h5>
      <br /><br />
      <div className="columns" style={{border:'1px solid lightgray',padding:'20px 20px 20px 20px',borderRadius:'25px',width:'100%'}}>

        <div style={{width:'50px',margin:'auto'}}>
          <div onClick={changeTestminus} className="button-green-no-zoom" style={{marginRight:'20px'}} >
            <img width="20px" alt="opinie" src='/img/angle-left.svg'/>
          </div>
        </div>

        <div style={{width:'90%',padding:'20px',textAlign:'center'}}>

        <img width="120px"  style={{verticalAlign:'middle'}}   alt="rating" src='/img/rating-5.svg'/>
        <br /><br />
        <p id='txtchange' style={{textAlign:'left'}}>
        Firma z pomysłem, kreatywni graficy, nietuzinkowe projekty, ekologiczne produkty, kalendarze z papierem z kamienia, wodoodporne, biodegradowalne. Gadżety z pszenicy, bambusa, słomy, kawy, interesujący design, przyjemny kontakt, szybkie działanie, dobre terminy realizacji. Firma godna polecenia.
        </p>
        <br />
        <p id='autor' style={{color:'#00d1b2'}}>
        Marek Banach | KRAUSE Sp. z o.o.
        </p>

        <br />
        <br />
          <a className="button-green" target="_blank" rel='noopener norefferer'
          href="https://www.google.com/search?q=artopen+wroc%C5%82aw&oq=artopen+wroc%C5%82aw&aqs=chrome..69i57j0i22i30.2687j0j7&sourceid=chrome&ie=UTF-8#lrd=0x470fc21b332a9cd3:0x6f99075edfe8676,1,,,">
           Zobacz wszystkie opinie &nbsp;&nbsp; <img width="10px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>

         <div style={{width:'50px',margin:'auto'}}>
           <div onClick={changeTestplus} className="button-green-no-zoom" style={{marginLeft:'20px'}}>
             <img width="20px" alt="opinie" src='/img/angle-right.svg'/>
           </div>
         </div>
      </div>

      </div>

      <section  className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'center'}}>Zaufali nam:</h5>
          <br />
          <AliceCarousel autoPlay infinite items={items} autoPlayInterval="3500">

          </AliceCarousel>

          </div>
        </div>
      </section>

      <ContactCall />

    </div>
  )
}


const handleDragStart = (e) => e.preventDefault();
{/*TODO:// when on wifi download +3 images*/}
const items = [

  [<img src="/img/logo-svg/betafence.svg" key="k1" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/bieg-piastow.svg" key="k2" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/bny-mellon.svg" key="k3" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/ccc.svg" alt="" key="k4" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/careeflet.svg" key="k5" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/cargounit.svg" key="k6" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/chemeko.svg" key="k7" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/columbus.svg" key="k8" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/cooper.svg" key="k9" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/credit.svg" key="k10" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/de-dietrich.svg" key="k11" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/delavalh.svg" key="k12" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/diehl.svg" key="k13" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/donako.svg" key="k14" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/epore.svg" key="k15" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/fortum.svg" key="k16" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/gazoprojekt.svg" key="k17" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/inter-ubezpieczenia.svg" key="k18" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/intrum.svg" key="k19" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/kd.svg" key="k20" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/kghm.svg" key="k21" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/krause.svg" key="k22" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/lpgk.svg" key="k23" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/maco.svg" key="k24" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/ocado.svg" key="k25" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/pbi.svg" key="k26" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/posco.svg" key="k27" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/powiat.svg" key="k28" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/rawiplug.svg" key="k29" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/rotomat.svg" key="k30" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/sa.svg" key="k31" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/sweco.svg" key="k32" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/telka.svg" key="k33" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/totalizator-sportowy.svg" key="k34" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/urtica.svg" key="k35" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/vintage.svg" key="k36" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/vw.svg" key="k37" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/wagony.svg" key="k38" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/womak.svg" key="k39" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/zamek-topacz.svg" key="k40" alt="" onDragStart={handleDragStart} className="sliderimg" />]

];

{/*  CLIENTS OPINIONS    */}
const authors = ['Marek Banach | KRAUSE Sp. z o.o.',
'Aleksandra Cukier | TOZ Schronisko Wrocław',
'Łukasz Maślanka | TBS Wrocław Sp. z o.o.',]
const texts = ['Firma z pomysłem, kreatywni graficy, nietuzinkowe projekty, ekologiczne produkty, kalendarze z papierem z kamienia, wodoodporne, biodegradowalne. Gadżety z pszenicy, bambusa, słomy, kawy, interesujący design, przyjemny kontakt, szybkie działanie, dobre terminy realizacji. Firma godna polecenia.',
'Zdecydowanie polecam korzystanie z usług firmy Art Open :) Profesjonalny projekt przygotowany zgodnie z wytycznymi, szybka realizacja, a do tego bardzo przyjemny kontakt z Pracownikami na etapie realizacji. Polecam zatem wszystkim, którzy cenią sobie wysoką jakość!',
'Cenię sobie współpracę z firmą Art Open - pracują w niej profesjonaliści, zlecenia wykonują terminowo, a w trakcie realizacji zleconych prac wykazują się zaangażowaniem i pomysłowością. Polecam!']


let i=0;

function changeTestplus() {
    if (i < 2){
    i++;
  } else {
    i = 0;
  }
  document.getElementById('txtchange').innerHTML = texts[i];
  document.getElementById('autor').innerHTML = authors[i];

}

function changeTestminus() {
    if (i > 0){
    i--;
  } else {
    i = 2;
  }
  document.getElementById('txtchange').innerHTML = texts[i];
  document.getElementById('autor').innerHTML = authors[i];

}


{/*  TIMERS    */}

function countDown() {
//initial numbers
let x = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;


var a =  setInterval( function(){

    if (document.getElementById('t1')!=null){
        if (x<12){
          x++;
          document.getElementById('t1').innerHTML = x;
        } else if (x===12){
          clearInterval(a);
        }
        }
      }, 1500);


var b =  setInterval( function(){

    if (document.getElementById('t2')!=null){
        if (x1<250){
          x1++;
          document.getElementById('t2').innerHTML = x1;
        } else if (x1===250){
          clearInterval(b);
        }
        }
      }, 100);

var c =  setInterval( function(){

    if (document.getElementById('t3')!=null){
        if (x2<5000){
          x2++;
          document.getElementById('t3').innerHTML = x2;
        } else if (x2===5000){
          clearInterval(c);
        }
        }
      }, 10);

var d =  setInterval( function(){

    if (document.getElementById('t4')!=null){
        if (x3<12500){
          x3++;
          document.getElementById('t4').innerHTML = x3;
        } else if (x3===12500){
          clearInterval(d);
        }
        }
      }, 1);

}

function fireTime() {
  setTimeout(()=>{
    countDown();console.log('time');}
  ,2000);
}

setTimeout(()=>{
fireTime();}
,1000);


{/*
https://stackoverflow.com/questions/49916259/show-element-when-in-viewport-on-scroll
element in viewport opacity animation <--
  */}


HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  keywords: PropTypes.array
}


export default HomePageTemplate
