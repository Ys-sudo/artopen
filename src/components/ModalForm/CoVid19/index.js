import React from 'react';

class CoVid19 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }


  render() {
    return (
      <>

      <input name='Covid-19' id='covid-19' className='subtitle' placeholder='Covid-19:' disabled style={{color:'gray',fontFamily:'Poppins', backgroundColor:'white',border:'0px solid white',marginBottom:'20px'}} />

      <div className='columns'>
          <div className='field column' style={{marginLeft:'15px'}}>

            <label className='label'>Maseczki:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='maski' id='maski' />
            </div>

          </div>

          <div className='field column' style={{marginLeft:'15px'}} >
            <label className='label'>Przyłbice:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='przyłbice' id='przylbice' />
            </div>

          </div>

          <div className='field column'style={{marginLeft:'15px'}} >
            <label className='label'>Płyn do dezynfekcji:</label>
            <div className='control'>
              <input onChange={this.handleChange} className='input' type='number' placeholder='100' name='dezynfekcja' id='dezynfekcja' />
            </div>

          </div>
        </div>
          <hr />



      </>
    )
  }
}

export default CoVid19;
