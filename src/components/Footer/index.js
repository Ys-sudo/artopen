import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer' style={{alignItems:'bottom', paddingBottom:'90px'}}>
      <div className='container'>
        <div className='content has-text-centered'>

          <p style={{color:'white',fontSize:'12px'}}>
            {copyright} | <a  href="/polityka-prywatnosci/"> Polityka prywatności </a>
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
