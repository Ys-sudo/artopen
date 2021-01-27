import React from 'react'
import Content from '../Content'
import ContactCall from '../ContactCall'
import PropTypes from 'prop-types'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const WorkPageTemplate = (props) => {
  const { title, content, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <div>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h1 className='title' style={{fontSize:'50px'}}>
              {title}
            </h1>
            <h2 className='subtitle'>
            Aktualne oferty pracy w naszej firmie.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
      <section className='section section--gradient'>

          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>

        </div>
      </section>


      <div style={{marginTop:'0%',marginLeft:'10%',marginRight:'10%',marginBottom:'5%'}}>
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

      <section className='is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
          <h5 className='has-text-weight-semibold is-size-2' style={{textAlign:'center'}}>Z kim pracujemy?</h5>
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

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}



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


const handleDragStart = (e) => e.preventDefault();
{/*TODO:// when on wifi download +3 images*/}
const items = [

  [<img src="/img/logo-svg/betafence.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/bieg-piastow.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/bny-mellon.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/ccc.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/careeflet.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/cargounit.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/chemeko.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/columbus.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/cooper.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/credit.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/de-dietrich.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/delavalh.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/diehl.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/donako.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/epore.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/fortum.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/gazoprojekt.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/inter-ubezpieczenia.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/intrum.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/kd.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/kghm.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/krause.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/lpgk.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/maco.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/ocado.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/pbi.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/posco.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/powiat.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/rawiplug.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/rotomat.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/sa.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/sweco.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />],

  [<img src="/img/logo-svg/telka.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/totalizator-sportowy.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/urtica.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/vintage.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/vw.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/wagony.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/womak.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />,
  <img src="/img/logo-svg/zamek-topacz.svg" alt="" onDragStart={handleDragStart} className="sliderimg" />]

];



export default WorkPageTemplate
