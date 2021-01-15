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
            style={{margin:'10px',marginBottom:'50px'}}
            key={post.id}
          >
          <Link to={post.fields.slug+'/'}>
          <img src={post.frontmatter.cover.publicURL} style={{width:'100%',height:'100%',borderRadius:'10px',marginBottom:'10px'}} />

              <Link className='button-green' style={{fontSize:'12px'}} to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>

          </Link>


          </div>
        ))}
    </div>
    </div>
  )
}




export default OfferCard
