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
    <div className="imgcont"
    style={{backgroundImage:'url('+cover.publicURL+')',backgroundSize:'cover',backgroundAttachment:'fixed',marginTop:'2%',paddingBottom:'2%',paddingTop:'30%',marginLeft:'10%',marginRight:'10%'}}
    >
      <div className='portitle'>
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
