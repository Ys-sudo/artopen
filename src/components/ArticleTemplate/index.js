import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const ArticleTemplate = (props) => {
  const { content, contentComponent, cover, tags, title, subtitle, date } = props
  const PostContent = contentComponent || Content

  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'
      >
        &bull; {title}
      </h1>
      <h2 className='title is-size-3 has-text-weight-bold is-bold-light'
      style={{color:'#00d1b2'}}
      >
        {subtitle}
      </h2>
      <small className='categ' style={{marginLeft:'0px'}}> {date}</small>
      <br></br>
      <br></br>
      <img
        src={cover}
        alt={title}
        className="imgcont"

      />
      <br></br>
      <br></br>
      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>
        <h4>Tagi:</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link className="button-green" to={`/tagi/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>
      </div>

    </div>
  )
}

export default ArticleTemplate
