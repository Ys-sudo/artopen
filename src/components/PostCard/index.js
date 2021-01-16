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
            className='content columns'
            style={{marginBottom:'3%', border:'2px solid #f5f5f5', borderRadius:'15px', padding: '2em 4em' }}
            key={post.id}
          >
          <img src={post.frontmatter.cover.publicURL}  style={{backgroundColor:'lightgreen',width:'40%',marginRight:'5%',borderRadius:'20px',border:'solid 5px #00d1b2'}} />
          <div>
            <p>
              <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>
              <br />
              <span> &bull; </span>
              <small><b>{post.frontmatter.date}</b></small>
              <br />

              <br />
              {post.excerpt}
            </p>
            <p style={{textAlign:'right'}}>
              <br />
              <Link className='button-green' to={post.fields.slug+'/'}>
                Przeczytaj więcej →
              </Link>
            </p>
          </div>
          </div>
        ))}
    </div>
  )
}



export default PostCard
