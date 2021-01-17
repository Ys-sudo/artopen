import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import PolicyPageTemplate from '../components/PolicyPageTemplate'
import Layout from '../components/Layout'

const PolicyPage = (props) => {
  const { data: { markdownRemark: post } } = props

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <PolicyPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PolicyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PolicyPage

export const policyPageQuery = graphql`
  query PolicyPage($id: String!) {
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
