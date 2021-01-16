import React from 'react'
import { Link } from 'gatsby'

const OfferCard = (props) => {
  const { posts } = props
  const {cats} = props

  // hides the items
  const filterGallery = (event) =>{
    console.log(event.currentTarget.innerHTML);

    let name = event.currentTarget.innerHTML;

    let all = document.getElementsByClassName(name);

    let rest = document.getElementsByClassName('portfo');

    let nav = document.getElementsByClassName('port-nav');

    console.log(rest.length);

    for (let i =0;i<all.length;i++){
      all[i].style.display = 'none';
    }

    for (let i =0;i<rest.length;i++){
      rest[i].style.display = 'block';
    }




  }



  return (


    <div>

    

    {/*<div className='catlist' style={{display: 'flex',alignItems:'center',justifyContent:'center', width:'100%'}}>

      {cats
        .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
        .map(({ node: post }) => (
          <div style={{margin:'10px'}}  key={post.id} >
              <a className="button-green" style={{ padding: '10px' }}
              onClick={filterGallery}
              >{post.frontmatter.category}</a>
          </div>
        ))}
    </div>*/}
    <br></br>

    <div className='portfolio'>

      {posts

        .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
        .map(({ node: post }) => (

          <div
            className={post.frontmatter.category + ' portfo'}
            style={{ margin:'20px'  }}
            key={post.id}
          >

          <img src={post.frontmatter.cover.publicURL} width='100%' style={{borderRadius:'10px'}} />
            <p>
              <Link className='has-text-primary' to={post.fields.slug+'/'}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <h6>{post.frontmatter.category}</h6>
            <p>
              <br />
              <br />

            </p>
          </div>
        ))}
    </div>
    </div>
  )
}




export default OfferCard
