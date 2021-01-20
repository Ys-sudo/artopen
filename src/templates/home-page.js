import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const HomePage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, meta_title, meta_description } } } } = props


  return (
    <Layout>
      <HomePageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
      />

    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
