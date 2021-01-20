import React from 'react'
import { Link } from 'gatsby'

const PostCard = (props) => {
  const { posts } = props

  return (
    <div className='container'>
      {posts && posts.slice(0,1)
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='article-wrapper '
            key={post.id}
          >



          <img src={post.frontmatter.cover.publicURL} className='fimg' />




          <div className='featured-post'>

          <div className='tagline'>
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(0,1)} </a>
          &nbsp;&nbsp;
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(1,2)} </a>
          &nbsp;&nbsp;
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(2,3)} </a>
          </div>


              <small><b> <span> &bull; </span>{post.frontmatter.date}</b></small>
              <br />
              <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>
              <br />
              <br />
              <p className='excerpts'>
                {post.excerpt.slice(0,300)+'...'}
              </p>
              <br />
            <p style={{textAlign:'right'}}>
            <Link className='button-green' to={post.fields.slug+'/'}>
              Przeczytaj więcej →
            </Link>
            </p>
          </div>




          </div>
        ))}

        {posts && posts.slice(1,-1)
          .filter(post => post.node.frontmatter.templateKey === 'article-page')
          .map(({ node: post }) => (
            <div
              className='content columns'
              style={{marginBottom:'3%', border:'2px solid #f5f5f5', borderRadius:'15px', padding: '2em 4em' }}
              key={post.id}
            >
            <Link className='column blog-img' style={{marginRight:'3%'}} to={post.fields.slug+'/'}>
            <img src={post.frontmatter.cover.publicURL}  style={{width:'95%',borderRadius:'20px'}} />
            </Link>
            <div className='column'>
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
