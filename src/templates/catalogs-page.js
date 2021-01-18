import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import CatalogsPageTemplate from '../components/CatalogsPageTemplate'
import Layout from '../components/Layout'

const KatalogiPage = (props) => {
  const { data: { markdownRemark: post } } = props

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <CatalogsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

KatalogiPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default KatalogiPage

export const katalogiPageQuery = graphql`
  query KatalogiPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
