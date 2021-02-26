import React from 'react'
import { navigate } from 'gatsby-link'


function encode(data) {
  const formData = new FormData()


  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData

}


const newsDestroy = () => {
  let i = 0;
  console.log('destroy modal');

  document.getElementById('newsletter').style.transition = 'opacity 1s';
  document.getElementById('newsletter').style.opacity = '0';
  setTimeout(function(){document.getElementById('newsletter').style.display = 'none';
  },500);
}



class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }


  handleSubmit = e => {

        e.preventDefault()
        const form = e.target;

        fetch('/', {
          method: 'POST',
          body: encode({
            'form-name': form.getAttribute('name'),
            ...this.state,
          }),
        })
          .then(() => navigate('/kontakt/sukces'))
          .catch(error => alert(error))
      }

  render() {
    return (

      <form
      name="Newsletter"
      id = "newsletter"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
      style={{marginLeft:'auto',marginRight:'auto',minHeight:'450px',maxWidth:'600px',backgroundColor:'#00d1b2',borderRadius:'25px',padding:'10px',paddingTop:'35px'}}>
      <a className='button-white' style={{fontSize:'20px'}} onMouseOver={newsDestroy} >&nbsp;x&nbsp;</a>


      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="newsletter" />
      <div hidden>
        <label>
          Don’t fill this out:{' '}
          <input name="bot-field"
          onChange={this.handleChange}
          />
        </label>
      </div>
      <div style={{marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
      <br /><br />
      <img src='/img/newsletter.svg' style={{width:'33%',marginTop:'-12%',marginBottom:'-30px'}} alt='oferta' />
      </div>
      <div style={{textAlign:'center',marginLeft:'30px',marginRight:'30px'}}>
      <br />
      <br />
      <h5 className='title'>Zapisz się na <b style={{color:'white'}}>newsletter</b>! </h5>
      <h6 className='subtitle'> Nowości, promocje i oferty specjalne.</h6>


      <input className='field input' required={true} onChange={this.handleChange} name='adres email' type='email' placeholder='Twój adres email'>
      </input>

      <label style={{fontSize: '10px',color:'white'}} className='main'  htmlFor="zgoda">   <input onChange={this.handleChange} required={true} type="checkbox" id="zgoda" name="zgoda" defaultChecked="true" value="true"/>Wyrażam zgodę na otrzymywanie drogą elektroniczną na wskazany przeze mnie adres email informacje handlowe w rozumieniu art. 10 ust. 1 ustawy z dnia 18 lipca 2002 roku o świadczeniu usług drogą elektroniczną od Art Open Sp. z o.o.
      <sup>*</sup>.<span className="check"></span></label>
      <
      button className="darkbutton" type="submit" >
      <b>Zapisz mnie!</b>
      </button>

      </div>
      <div style={{textAlign:'center'}}>
      <br />

      <img width="150px" src='/img/ArtOpen-white.svg' alt="ArtOpen studio reklamy" />
      <br />
      <a className='link-white' href="/polityka-prywatnosci/">Polityka prywatności</a>
      <br />
      <br />
      </div>
      </form>

    )
  }
}



export { NewsletterForm }
