import React from 'react';



class GadzetyRek extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }



  render() {
    return (
      <>

      <input name='Gadżety reklamowe' id='gadzetyrek' className='subtitle' placeholder='Gadżety reklamowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px',minWidth:'100%'}} />


          <hr />



      </>
    )
  }
}

export default GadzetyRek;
