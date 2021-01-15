import React from 'react'
import { Link } from 'gatsby'

const PostCard = (props) => {
  const { posts } = props

  return (
    <div className='container'>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content'
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
          <img src={post.frontmatter.cover.publicURL} width='200px' style={{backgroundColor:'black'}} />
            <p>
              <Link className='has-text-primary' to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button-green' to={post.fields.slug+'/'}>
                Przeczytaj więcej →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}



export default PostCard
