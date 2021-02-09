import React from 'react';



class KalFirm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }




  render() {
    return (
      <>

      <input name='Kalendarze firmowe' id='kalfirm' className='subtitle' placeholder='Kalendarze firmowe:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />


          <hr />



      </>
    )
  }
}

export default KalFirm;
