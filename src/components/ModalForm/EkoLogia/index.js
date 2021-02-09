import React from 'react';



class EkoLogia extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>

      <input name='Ekologia' id='ekologia' className='subtitle' placeholder='Ekologia:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />


          <hr />



      </>
    )
  }
}

export default EkoLogia;
