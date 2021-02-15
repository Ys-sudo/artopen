import React from 'react'
import PropTypes from 'prop-types'
import WorkTemplate from '../../components/WorkPageTemplate'

const WorkPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const keywords = entry.getIn(['data', 'keywords'])
  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <WorkPageTemplate
            content={widgetFor('body')}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_desc={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            keywords={keywords && keywords.toJS()}
            slug={entry.getIn(['data', 'slug'])}
          />
        </div>
      </div>
    </div>
  )
}

WorkPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPreview
