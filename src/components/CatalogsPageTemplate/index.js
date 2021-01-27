import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ContactCall from '../ContactCall'

const links = ['https://online.fliphtml5.com/njygn/takv/','https://online.fliphtml5.com/ohnj/knuu','https://online.fliphtml5.com/njygn/pips/','https://online.fliphtml5.com/njygn/zxyl/','https://online.fliphtml5.com/njygn/uist'];
const imgs = ['/img/katalogi/gadzety_1.png','/img/katalogi/gadzety_2.png','/img/katalogi/gadzety_3.png','/img/katalogi/gadzety_4.png','/img/katalogi/gadzety_5.png'];
const titles = ['Gadżety reklamowe 1','Gadżety reklamowe 2','Gadżety reklamowe 3','Gadżety reklamowe 4','Gadżety reklamowe 5'];

let i=0;

function changeCatplus() {
    if (i < 4){
    i++;
  } else {
    i = 0;
  }
  document.getElementById('txtchange').innerHTML = titles[i];
  document.getElementById('carousel').src = imgs[i];
  document.getElementById('butt').href = links[i];
  document.getElementById('link2').href = links[i];

}

function changeCatminus() {
    if (i > 0){
    i--;
  } else {
    i = 4;
  }
  document.getElementById('txtchange').innerHTML = titles[i];
  document.getElementById('carousel').src = imgs[i];
  document.getElementById('butt').href = links[i];
  document.getElementById('link2').href = links[i];

}

//setInterval(changeCatplus,5000);



const CatalogsPageTemplate = (props) => {
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
              Zestawy ekologicznych produktów oraz gadżetów reklamowych.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>



            <br />

              <div className="columns" style={{border:'1px solid lightgray',padding:'50px 20px 50px 20px',borderRadius:'25px',width:'100%'}}>

                <div style={{width:'50px',margin:'auto'}}>
                  <div onClick={changeCatminus} className="button-green-no-zoom" style={{marginRight:'20px'}} >
                    <img width="20px" alt="katalogi" src='/img/angle-left.svg'/>
                  </div>
                </div>

                 <div className='column'>
                   <h3 id="txtchange" className="title"> Gadżety reklamowe 1 </h3>
                   <p style={{marginRight:'25px'}}> Produkty EKO, elektronika, zestawy VIP, zestawy piśmiennicze, kubki reklamowe, biuro i praca, jedzenie i picie, sport i wypoczynek, gadżety dla domu i kuchni, gadżety do gry i zabawy, torby i plecaki, galanteria skórzana, parasole, breloki, opaski, narzędzia i odblaski
                   </p>
                   <br />
                   <br />
                   <a className="button-green" target="_blank" id="butt" style={{fontSize:'15px',paddingRight:'20px'}} href="https://online.fliphtml5.com/njygn/takv/"><img width="20px"  style={{verticalAlign:'middle',marginLeft:'5px',marginRight:'10px'}}   alt="katalogi" src='/img/eye.svg'/>Zobacz katalog</a>
                   <br />
                   <br />
                 </div>

                 <div className='column'>
                <a href="https://online.fliphtml5.com/njygn/takv/" id='link2'>
                  <img className='catalogimg' id="carousel" src="https://artopen.pl/images/2020/04/09/gadzety_1.png" width="100%"/>
                  </a>
                 </div>

                 <div style={{width:'50px',margin:'auto'}}>
                   <div onClick={changeCatplus} className="button-green-no-zoom" style={{marginLeft:'20px'}}>
                     <img width="20px" alt="katalogi" src='/img/angle-right.svg'/>
                   </div>
                 </div>
              </div>
              <br />
              <br />

                <PageContent className='content' content={content} />

            </div>
          </div>
        </div>
      </section>
      <br />

      <br />
      <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px'}}>
      <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz portfolio&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/o-nas/'> Poznaj nas bliżej&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      </div>


      <br />

      <ContactCall />
    </div>
  )
}

CatalogsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default CatalogsPageTemplate
