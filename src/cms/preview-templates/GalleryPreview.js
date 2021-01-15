import React from 'react'
import PropTypes from 'prop-types'
import GalleryTemplate from '../../components/GalleryTemplate'

const GalleryPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <GalleryTemplate
            content={widgetFor('body')}
            cover={entry.getIn(['data', 'cover'])}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_desc={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            slug={entry.getIn(['data', 'slug'])}
            tags={tags && tags.toJS()}
            category={entry.getIn(['data', 'category'])}
          />
        </div>
      </div>
    </div>
  )
}

GalleryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GalleryPreview
