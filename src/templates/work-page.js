import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import WorkPageTemplate from '../components/WorkPageTemplate'
import Layout from '../components/Layout'

const PracaPage = (props) => {
  const { data: { markdownRemark: post } } = props

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PracaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PracaPage

export const pracaPageQuery = graphql`
  query PracaPage($id: String!) {
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
