import React from 'react';


class FilmoWanie extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
      {/* Wystawiennictwo */}

      <input name='Filmowanie' id='filmowanie' className='subtitle' placeholder='Filmowanie:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white'}} />

      <hr />





      </>
    )
  }
}

export default FilmoWanie;
