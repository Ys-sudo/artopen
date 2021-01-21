import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const GalleryTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, category, date } = props
  const PostContent = contentComponent || Content

  return (
    <div>
      <ProgressiveImageContainer
        image={cover}
        alt={title}
        className='imgcontp'
      />
      <div className='portitle' >
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>

      <h2 className='subtitle' style={{fontSize:'18px',color:'#00d1b2'}} >&bull; {category}</h2>
      <small className='categ' style={{marginLeft:'0px'}}>{date}</small>
      </div>
      <br />
      <br />
      <br />

      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>



        <h4>Tagi:</h4>

        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link className='button-green' to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>

      </div>
      
    </div>
  )
}

export default GalleryTemplate
