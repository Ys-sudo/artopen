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
          <Link className='' style={{marginRight:'3%'}} to={post.fields.slug+'/'}>
          <img src={post.frontmatter.cover.publicURL} className='fimg' />
          </Link>
          <div className='featured-post'>

          <div className='tagline'>
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(0,1)} </a>
          &nbsp;&nbsp;
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(1,2)} </a>
          &nbsp;&nbsp;
          <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(2,3)} </a>
          </div>

              <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>
              <br />

              <small><b> <span> &bull; </span>{post.frontmatter.date}</b></small>
              <br />
              <br />
              <p className='excerpts'>
                {post.excerpt.slice(0,300)+' ...'}
              </p>
              <br />
            <p style={{textAlign:'right'}}>
            <Link className='button-green' to={post.fields.slug+'/'}>
              Przeczytaj więcej &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/>
            </Link>
            </p>
          </div>

          </div>
        ))}
        <div className='flexWrappers'
        style={{width:'100%'}}>
        {posts && posts.slice(1)
          .filter(post => post.node.frontmatter.templateKey === 'article-page')
          .map(({ node: post }) => (
            <div
              className='article-wrapperblog'
              key={post.id}
            >

              <Link className='' style={{marginRight:'3%'}} to={post.fields.slug+'/'}>
              <img src={post.frontmatter.cover.publicURL}  className='bimg'  />
              </Link>


                <div className='blogpostroll' >

                <div className='tagline2' >
                <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(0,1)} </a>
                &nbsp;&nbsp;
                <a className="button-green" href={post.fields.slug+'/'}> {post.frontmatter.tags.slice(1,2)} </a>
                </div>
                  <p>
                    <Link className='title has-text-primary' to={post.fields.slug+'/'}>
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <span> &bull; </span>
                    <small><b>{post.frontmatter.date}</b></small>
                    <br />
                    <br />
                    {post.excerpt.slice(0,300)+' ...'}
                  </p>
                  <p style={{textAlign:'right',marginBottom:'20px'}}>
                    <br />
                    <Link className='button-green' to={post.fields.slug+'/'}>
                      Przeczytaj więcej &nbsp;&nbsp; <img width="12px"  style={{verticalAlign:'middle', marginRight:'5px'}}   alt="arrow" src='/img/angle-right.svg'/>
                    </Link>
                    <br />
                  </p>
                </div>
            </div>
          ))}
          </div>
    </div>
  )
}



export default PostCard
