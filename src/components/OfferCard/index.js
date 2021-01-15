import React from 'react'
import { Link } from 'gatsby'

const OfferCard = (props) => {
  const { posts } = props



  return (
    <div>

    <div className='offert'>

      {posts

        .filter(post => post.node.frontmatter.templateKey === 'offer-page')
        .map(({ node: post }) => (

          <div
            className='offer'
            style={{margin:'10px',textAlign:'left',marginBottom:'30px'}}
            key={post.id}
          >
          <Link to={post.fields.slug+'/'}>
          <img alt={post.frontmatter.title} src={post.frontmatter.icon.publicURL} style={{width:'100px',height:'100px',borderRadius:'10px',marginBottom:'5px'}} />

          <br></br>
          <div style={{textAlign:'left'}}>
              <Link className='is-title' style={{fontSize:'12px',color:'#00d1b2',fontSize:'15px'}} to={post.fields.slug+'/'}>
                <strong>{post.frontmatter.title}</strong>
              </Link>

              <p style={{color:'#333333',fontSize:'12px'}}>
                {post.frontmatter.desc}
              </p>
          </div>
          </Link>


          </div>
        ))}
    </div>
    </div>
  )
}




export default OfferCard
