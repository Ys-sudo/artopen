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
            style={{margin:'10px',textAlign:'left',marginBottom:'30px',backgroundColor:'#f5f6f5',borderRadius:'10px',padding:'10px'}}
            key={post.id}

          >
          <Link to={post.fields.slug+'/'}>

          <img alt={post.frontmatter.title} src={post.frontmatter.icon.publicURL} style={{width:'35px',height:'35px',marginBottom:'5px'}} />

          <br></br>
          <div style={{textAlign:'left'}}>
              <p className='is-title' style={{fontSize:'13px',color:'#00d1b2'}} to={post.fields.slug+'/'}>
                <strong>{post.frontmatter.title}</strong>
              </p>

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
