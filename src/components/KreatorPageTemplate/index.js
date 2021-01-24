import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const KreatorPageTemplate = (props) => {
  const { title, content, contentComponent } = props
  const PageContent = contentComponent || Content

  return (
    <div>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
      <div className='container section'>
        <div className='columns section'>
          <div>
            <h1 className='title' style={{fontSize:'50px'}}>
              {title}
            </h1>
            <h2 className='subtitle'>
              Zaprojketuj sam swój wyjątkowy kalendarz.
            </h2>
          </div>
        </div>
      </div>
      </div>
    </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

KreatorPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default KreatorPageTemplate
