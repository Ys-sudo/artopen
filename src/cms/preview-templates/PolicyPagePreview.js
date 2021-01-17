import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/PolicyPageTemplate'

const PolicyPagePreview = ({ entry, widgetFor }) => (
  <PolicyPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

PolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PolicyPagePreview
