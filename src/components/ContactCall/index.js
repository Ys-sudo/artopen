import React from 'react'
import { Link } from 'gatsby'
const ContactCall = () => {

  return (
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h5 className='title'>
              Zacznijmy wspólny projekt już dziś.
            </h5>
            <h6 className='subtitle'>
              Postaw na doświadczenie i profesjonalizm.
            </h6>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
          <Link className='button-white' style={{fontSize:'14px',fontWeight:'800'}} to="/kontakt/" > Skontaktuj się z nami! &nbsp;&nbsp; <img width="15px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="brief" src='/img/angle-right.svg'/> </Link>
        </div>
      </div>

      </div>
    </section>


  )
}

export default ContactCall
