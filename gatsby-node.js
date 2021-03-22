const _ = require('lodash')
const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'cover')) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`
      } else if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
        slug = `/${_.kebabCase(node.frontmatter.slug)}`
      } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      } else if (parsedFilePath.dir === '') {
        slug = `/`
      } else {
        slug = `/${parsedFilePath.dir}/`
      }
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover {
                childImageSharp{
                  fluid (maxWidth:500, quality:50){
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
                publicURL
              }
              icon {
                childImageSharp{
                  fluid (maxWidth:500, quality:50){
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
                publicURL
              }
              tags
              keywords
              templateKey
              category
              desc
              date(formatString: "DD. MM. YYYY")
              subtitle
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let posts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'article-page' })) {
        posts = posts.concat(edge)
      }
    })

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/blog.js',
      pageLength: 7, // This is optional and defaults to 10 if not used
      pathPrefix: 'blog', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Portfolio pages:
    let portfolios = []
    // Iterate through each post/page, putting all found posts (where templateKey = gallery-page) into `portfolios`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'gallery-page' })) {
        portfolios = portfolios.concat(edge)
      }
    })

    createPaginatedPages({
      edges: portfolios,
      createPage: createPage,
      pageTemplate: 'src/templates/portfolio.js',
      pageLength: 22, // This is optional and defaults to 10 if not used
      pathPrefix: 'portfolio', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Offer pages:
    let offers = []
    // Iterate through each post/page, putting all found posts (where templateKey = gallery-page) into `portfolios`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'offer-page' })) {
        offers = offers.concat(edge)
      }
    })

    createPaginatedPages({
      edges: offers,
      createPage: createPage,
      pageTemplate: 'src/templates/oferta.js',
      pageLength: 15, // This is optional and defaults to 10 if not used
      pathPrefix: 'oferta', // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    })
    postsAndPages.forEach(edge => {
      const id = edge.node.id
      const ofPath = edge.node.fields.slug
      createPage({
        path: ofPath,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    postsAndPages.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tagi/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tagi.js`),
        context: {
          tag,
        },
      })
    })
  })
}
