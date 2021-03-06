import React from 'react'
import Content from '../Content'
import ContactCall from '../ContactCall'
import CvForm from '../forms/CvForm'
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

      <div className='container boxshadow' style={{padding:'50px',backgroundColor:'white'}}>
      <CvForm />
      </div>


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



export default WorkPageTemplate
