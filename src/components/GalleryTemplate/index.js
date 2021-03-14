import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const GalleryTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, category, date } = props
  const PostContent = contentComponent || Content

  return (
    <>
    <div style={{backgroundImage:'url('+cover.publicURL+')',backgroundSize:'cover',backgroundAttachment:'fixed',paddingTop:'30%'}}
      className="imgcont"
    >
      <div className='portitle' >
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>

      <h2 className='subtitle' style={{fontSize:'18px',color:'#00d1b2'}} >&bull; {category}</h2>
      <small className='categ' style={{marginLeft:'0px'}}>{date}</small>
      </div>
      </div>
      <br />
      <div id="content" style={{paddingTop:'100px',paddingBottom:'50px'}}>

        <br />
        <br />
        <PostContent content={content} />

        <br />
        <br />
        <br />

        <div className='bottomUi' style={{textAlign:'center',marginBottom:'30px',marginLeft:'20px'}}>
        <a className='button-green' style={{fontSize:'15px'}} href='/portfolio/'> Zobacz nasze realizacje&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='button-green' style={{fontSize:'15px'}} href='/blog/'> Poczytaj bloga&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className='button-green' style={{fontSize:'15px'}} href='/kontakt/'> Skontaktuj się z nami&nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/> </a>
        </div>

        <div style={{marginTop: `2rem`, marginLeft:'5%'}}>
          <h4><b>Tagi:</b></h4>
          <br /><br />
          <ul className='taglist columns' style={{marginLeft:'10px'}}>
            {(tags && tags.length)
              ? tags.map(tag => (
                <li className='tags1' key={tag + `tag`}>
                  <Link className="button-green" to={`/tagi/${kebabCase(tag)}/`}>{tag}</Link> &nbsp; &nbsp;
                </li>
              ))
              : null}
          </ul>
        </div>

      </div>
      </>
  )
}

export default GalleryTemplate
