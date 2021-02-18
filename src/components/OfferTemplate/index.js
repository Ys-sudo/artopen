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
    <a href='#content'>
    <div className='ofintro'>

      <div style={{textAlign:'center'}}>
        <img src={icon.publicURL} width='50px'
        style={{filter:'brightness(0) invert(1)'}}
        />

      <h1  className='title is-size-2 has-text-weight-bold is-bold-light'
      id="oftitle"
      style={{color:'white'}}
      >
        {title}
      </h1>
      </div>
      <br />
      <h2 className='subtitle'
      id='subtitle'
      style={{color:'white'}}
      >
        {desc}
      </h2>

      <div style={{textAlign:'center',marginBottom:'-20px'}}>

        <img src="/img/angle-down.svg" width='20px'
        style={{filter:'brightness(0) invert(1)'}}
        />

      </div>


    </div>
    </a>
      <br></br>
      <div id="content" style={{paddingTop:'100px',paddingBottom:'50px'}}>
        <h3 className='title is-size-3 has-text-weight-bold is-bold-light oftitle2'
        style={{color:'#00d1b2',marginLeft:'20px',marginRight:'20px'}}
        >
          {subtitle}
        </h3>
        <PostContent content={content} />

        <div style={{ marginTop: `4rem`, marginLeft:'1rem' }}>
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
      <OfferNav />

    </div>

  )
}



export default OfferTemplate
