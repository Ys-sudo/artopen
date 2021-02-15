import React from 'react'
import PropTypes from 'prop-types'
import OfferTemplate from '../../components/OfferTemplate'

const OfferPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const keywords = entry.getIn(['data', 'keywords'])
  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <OfferTemplate
            content={widgetFor('body')}
            icon={entry.getIn(['data', 'icon'])}
            cover={entry.getIn(['data', 'cover'])}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_desc={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            desc={entry.getIn(['data', 'desc'])}
            subtitle={entry.getIn(['data', 'subtitle'])}
            slug={entry.getIn(['data', 'slug'])}
            tags={tags && tags.toJS()}
            keywords={keywords && keywords.toJS()}
          />
        </div>
      </div>
    </div>
  )
}

OfferPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OfferPreview
