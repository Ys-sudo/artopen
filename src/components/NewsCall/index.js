import React from 'react'

const newsEnter = () => {
  let i = 0;
  console.log('enter modal');
  document.getElementById('newsletter').style.display = 'block';
  document.getElementById('newsletter').style.transition = 'opacity 0.5s';

  setTimeout(function(){document.getElementById('newsletter').style.opacity = '1';},500);
}


const NewsCall = () => {

  return (


      <div className='NewsCall' onClick={newsEnter} style={{width:'100%', textAlign:'center',
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
