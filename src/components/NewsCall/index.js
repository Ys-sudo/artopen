import React from 'react'

const modalEnter = () => {
  let i = 0;
  console.log('enter modal');
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal').style.transition = 'opacity 0.5s';
  setTimeout(function(){document.getElementById('modal').style.opacity = '1';

  

  },500);
}


const NewsCall = () => {

  return (


      <div className='NewsCall' onClick={modalEnter} style={{width:'100%', textAlign:'center',
      backgroundImage: 'linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e6eb 100%)'}}>
        <div className='columns section'>
          <div className='column' >
            <h5 className='title' style={{color:'white',fontSize:'29px'}}>
              Bądź na bieżąco
            </h5>
            <h6 className='subtitle' style={{color:'white',fontSize:'18px'}}>
              Zapisz się na nasz newsletter!
            </h6>
            <br />

              <a className='button-white' style={{fontSize:'14px',fontWeight:'800'}} > Zapisz się&nbsp; &nbsp;
              <img width="15px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="brief" src='/img/angle-right.svg'/>
              </a>

            <br />

          </div>




        </div>

      </div>



  )
}

export default NewsCall