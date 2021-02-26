import React from 'react'
import Content from '../Content'
import ModalCall from '../ModalCall'
import PropTypes from 'prop-types'

const AboutPageTemplate = (props) => {
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
              Dowiedz się kim jesteśmy oraz co nas wyróżnia.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className='hero is-primary is-bold' style={{marginTop:'-7px', backgroundImage:'url(/img/tlo-o-nas.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'left',backgroundAttachment: `fixed`,}}>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns' style={{textAlign:'center'}}>
            <div className='column' style={{marginLeft:'50px',marginRight:'100px'}}>
            <h3 style={{textAlign:'left'}}><strong style={{color:'white', fontSize:'20px'}}>Studio reklamy Art Open</strong></h3>
            <br />
            <p style={{textAlign:'left'}}>Nasz zespół tworzą ludzie pełni pasji, kreatywności i zaangażowania w każdy powierzony projekt. Od blisko dekady, wspólnie z Wami, naszymi Klientami, realizujemy różnorodne przedsięwzięcia z zakresu identyfikacji wizualnej, promocji oraz projektowania graficznego, w tym stron internetowych i realizacji filmów.</p>
              <div className='columns' style={{marginLeft:'20px',marginTop:'50px'}}>
              <div>
              <a className='button-white' href="#zespol">
              <img width="12px"  style={{verticalAlign:'middle', marginRight:'15px'}}   alt="nasz zespół" src='/img/team.svg'/>
              nasz zespół
              </a>
              </div>
              &nbsp;&nbsp;&nbsp;
              <div>
              <a className='button-white' href="#wyroznia-nas">
              <img width="12px"  style={{verticalAlign:'middle', marginRight:'15px'}}   alt="co nas wyróżnia" src='/img/seedling.svg'/>
              co nas wyróżnia?
              </a>
              </div>
              </div>


            </div>

            <div className='column' style={{marginLeft:'50px',marginRight:'50px'}}>
            <br />
            <br />
            <p style={{textAlign:'left'}}>Każdy Wasz nowy projekt wzbogaca nas o nowe doświadczenia, które pozwalają nam sprostać kolejnym wyzwaniom. Jesteśmy wdzięczni naszym Klientom za obdarzenie nas zaufaniem i włączenie do grona swoich współpracowników. Daje nam to poczucie satysfakcji z dążenia do wspólnych celów. </p>
            <br />
            <p style={{textAlign:'left'}}>Jednym z nich, niezwykle ważnym, są działania wspierające ochronę naszego środowiska naturalnego poprzez oferowanie produktów ekologicznych i biodegradowalnych takich jak np. papier z kamienia lub trawy. Chcemy przez to dołożyć naszą małą cegiełkę do ogólnoświatowego ruchu pro eko. </p>
            </div>

          </div>
          <br />
        </div>
      </div>
    </section>


    <section className='section' style={{backgroundColor:'#f5f5f5'}}>
      <div className='container' style={{textAlign:'center'}}>
        <h3 className='title'> Jak pracujemy? </h3>
        <h4 className='subtitle'> Sumiennie, terminowo i z zaangażowaniem. </h4>
        <br />
        <div className='columns'>

          <div className='column'>
              <img src="/img/energy-green.svg" width="100px" />
              <br /><br />
              <h3 className='is-size-4'> Pomysł </h3>
              <p>Spotykamy się, aby poznać potrzeby naszych Klientów oraz omówić szczegóły projektu. </p>

          </div>

          <div className='column'>
              <img src="/img/analiza.svg" width="100px" />
              <br /><br />
              <h3 className='is-size-4'> Analiza </h3>
              <p>Analizujemy zebrane informacje oraz szukamy najbardziej optymalnych rozwiązań dla danego projektu.</p>

          </div>

          <div className='column'>
              <img src="/img/oferta-o-nas.svg" width="100px" />
              <br /><br />
              <h3 className='is-size-4'> Oferta </h3>
              <p>Przygotowujemy szczegółową wycenę usługi, którą ostatecznie finalizujemy przesłaniem zamówienia.</p>
          </div>

          <div className='column'>
              <img src="/img/realizacja.svg" width="100px" />
              <br /><br />
              <h3 className='is-size-4'> Realizacja </h3>
              <p>Wykonujemy projekt według określonego wcześniej schematu, konsultując kolejne etapy z Klientem.</p>

          </div>

        </div>
      </div>
    </section>


    <section id="zespol" className='section section--gradient'>
      <div className='container' style={{paddingTop:'50px'}}>
        <div className='columns'>
              <h4 className='has-text-weight-semibold is-size-3 column'>Poznaj nasz <b style={{color:'#00d1b2'}}>zespół</b>:</h4>

              <p className='column'>Nieszablonowość, szukanie innowacji, wysoka estetyka to walory naszych projektów. Wyróżnia nas doświadczenie, kreatywność i pełne zaangażowanie w każdą realizację. Cenimy to, co robimy i traktujemy pracę jako osobiste wyzwanie.</p>
        </div>
      </div>
      <div className='columns'>
      <div className='column'>
      <div className='columns' style={{marginTop:'70px',marginLeft:'15%',marginRight:'15%',marginBottom:'50px', textAlign:'center'}}>

        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/04/14/j-w.jpg' width='50%' />
          <p><strong> Jacek Wiśniewski </strong></p>
          <small> Prezes Zarządu </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:jwisniewski@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          jwisniewski@artopen.pl
          </a>
          <br /><br />
        </div>

        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/04/14/b-w-2.jpg' width='50%' />
          <p><strong> Beata Wiśniewska </strong></p>
          <small> Członek Zarządu </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:bwisniewska@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          bwisniewska@artopen.pl
          </a>
          <br />
        </div>

      </div>

      <div className='columns' style={{marginLeft:'15%',marginRight:'15%',marginBottom:'50px', textAlign:'center'}}>
        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/04/17/a_t.jpg' width='50%' />
          <p><strong> Anna Turska </strong></p>
          <small> Kierownik działu obsługi klienta </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:biuro@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          biuro@artopen.pl
          </a>
          <br /><br />
        </div>

        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/04/14/a-g.jpg' width='50%' />
          <p><strong> Aga Grabowska </strong></p>
          <small> Specjalista ds. Obsługi Klienta </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:bok@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          bok@artopen.pl
          </a>
          <br />

        </div>

      </div>

      <div className='columns' style={{marginLeft:'15%',marginRight:'15%',marginBottom:'50px', textAlign:'center'}}>
        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/08/13/patryk.jpg' width='50%' />
          <p><strong> Patryk Łagódka </strong></p>
          <small> Kierownik Działu Graficznego </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:plagodka@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          plagodka@artopen.pl
          </a>
          <br /><br />
        </div>

        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/04/14/n-g.jpg' width='50%' />
          <p><strong> Natalia Grodź </strong></p>
          <small> Projektant graficzny </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:grafik@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          grafik@artopen.pl
          </a>
          <br />

        </div>

      </div>

      <div className='columns' style={{marginLeft:'15%',marginRight:'15%',marginBottom:'20px', textAlign:'center'}}>
        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/08/13/darek.jpg' width='50%' />
          <p><strong> Dariusz Kawalec </strong></p>
          <small> Projektant graficzny </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:kontakt@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          kontakt@artopen.pl
          </a>
          <br /><br />
        </div>

        <div className='column'>
          <img className='oimg' src='https://artopen.pl/images/2020/08/13/jerzy.jpg' width='50%' />
          <p><strong> Jerzy Lazaridis </strong></p>
          <small> Web Developer </small>
          <br />
          <a className='link-green' style={{fontSize:'12px'}} href='mailto:jerzy@artopen.pl' target="_blank" >
          <img width="12px"  style={{verticalAlign:'middle',marginLeft:'5px', marginRight:'15px'}}   alt="email" src='/img/envelope-alt.svg'/>
          jerzy@artopen.pl
          </a>
          <br />

        </div>
        </div>
        </div>
        <div className='column'>

        </div>

      </div>



    </section>


      <section id='wyroznia-nas'>
        <div className='container' style={{paddingTop:'100px'}}>
          <div className='columns'>
            <div className='column is-10 is-offset-1' style={{margin:'3%'}}>

                <PageContent className='content' content={content} />

            </div>
          </div>
        </div>
      </section>




      <br />
      <br />

      <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px',marginLeft:'20px'}}>
      <a className='button-green' style={{fontSize:'15px'}} href='/oferta/'> Poznaj naszą ofertę&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz nasze realizacje&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a className='button-green' style={{fontSize:'15px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>



      </div>

      <br />
      <br />
      <ModalCall />
    </div>

  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
