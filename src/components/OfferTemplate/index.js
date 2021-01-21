import React from 'react'
import Content from '../Content'
import OfferNav from '../OfferNav'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

import ProgressiveImageContainer from '../ProgressiveImageContainer'

const OfferTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, desc, subtitle, icon } = props
  const PostContent = contentComponent || Content



  return (

    <div>

    <ProgressiveImageContainer
      image={cover}
      alt={title}
      className="offimg"

    />
    <div style={{position:'absolute',backgroundColor:'#00d1b2',marginTop:'-400px',padding:'50px',borderRadius:'20px'}}>
      <div style={{textAlign:'center'}}>
        <img src={icon.publicURL} width='50px'
        style={{filter:'brightness(0) invert(1)'}}
        />

      <h1 id="oftitle" className='title is-size-2 has-text-weight-bold is-bold-light'
      style={{color:'white'}}
      >
        {title}
      </h1>
      </div>
      <br />
      <h2 className='subtitle'
      style={{color:'white'}}
      >
        {desc}
      </h2>

    </div>
      <br></br>
      <div style={{margin:'50px',marginTop:'0px'}}>
        <h3 className='title is-size-3 has-text-weight-bold is-bold-light'
        style={{color:'#00d1b2'}}
        >
          {subtitle}
        </h3>
        <PostContent content={content} />

        <div style={{ marginTop: `4rem` }}>
          <h4><b>Tagi:</b></h4>
          <br /><br />
          <ul className='taglist columns' style={{marginLeft:'10px'}}>
            {(tags && tags.length)
              ? tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link className="button-green" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link> &nbsp; &nbsp;
                </li>
              ))
              : null}
          </ul>
        </div>

      </div>
      <OfferNav />

    </div>

  )
}



export default OfferTemplate
