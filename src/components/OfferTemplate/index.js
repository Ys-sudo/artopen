import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

import ProgressiveImageContainer from '../ProgressiveImageContainer'

const OfferTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, desc, subtitle, icon } = props
  const PostContent = contentComponent || Content

  return (

    <div>
    <div>
    <ProgressiveImageContainer
      image={cover}
      alt={title}
    />
    </div>
    <section className='hero is-primary is-bold is-medium'
    style={{position:'absolute', marginTop:'-35%',width:'50%',backgroundColor:''}}
    >
      <div className='hero-body'
      style={{padding:'20px'}}>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <subtitle className='subtitle'>
                  {desc}
                </subtitle>


              </div>


            </div>

          </div>
        </div>
      </div>
    </section>


      <br></br>

      <div style={{marginLeft:'10%',marginRight:'10%'}}>

      <h2 className='title'><strong> {subtitle} </strong></h2>

      <PostContent content={content} />

      <div style={{ marginTop: `4rem` }}>



        <h4><b>Tagi:</b></h4>
        <br></br>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>

      </div>
      <hr />
      
    </div>
    </div>

  )
}

export default OfferTemplate
