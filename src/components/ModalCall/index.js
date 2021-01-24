import React from 'react'

const modalEnter = () => {
  let i = 0;
  console.log('enter modal');
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').style.transition = 'opacity 0.5s';
  setTimeout(function(){document.getElementById('modal').style.opacity = '1';
  },500);
}


const ModalCall = () => {

  return (


      <div className='modalCall' onClick={modalEnter} style={{width:'75%',borderRadius:'0px 70px 70px 0px',
      backgroundImage: 'linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e6eb 100%)',marginBottom:'12px'}}>
        <div className='columns section'>
          <div className='column' style={{marginRight:'50px',marginLeft:'10%'}}>
            <h5 className='title' style={{color:'white',fontSize:'29px'}}>
              Złóż zamówienie
            </h5>
            <h6 className='subtitle' style={{color:'white',fontSize:'18px'}}>
              A w ciągu 24 godzin otrzymasz<br /> darmową wycenę zamówionych usług.
            </h6>
          </div>

          <div className='column' style={{textAlign:'center'}}>
          <br />
          <br />
            <a className='button-white' style={{fontSize:'14px',fontWeight:'800'}} onClick={modalEnter} > Wypełnij krótki brief &nbsp; &nbsp;
            <img width="15px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="brief" src='/img/angle-right.svg'/>
            </a>
          </div>
        </div>

      </div>



  )
}

export default ModalCall
