import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import KreatorPageTemplate from '../components/KreatorPageTemplate'
import Layout from '../components/Layout'

const KreatorPage = (props) => {
  const { data: { markdownRemark: post } } = props

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang : 'pl-pl', dir:'ltr' }}>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
        <meta name='keywords' content="Agencja reklamowa, ekologia, Art Open," />
      </Helmet>
      <KreatorPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

KreatorPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default KreatorPage

export const kreatorPageQuery = graphql`
  query KreatorPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        keywords
      }
    }
  }
`
