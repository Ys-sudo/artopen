import React from 'react'
import { Link } from 'gatsby'

const OfferCard = (props) => {
  const { posts } = props
  const {cats} = props

  // hides the items
  const resetGallery = (event) =>{


    let name = event.currentTarget.innerHTML;

    let all = document.getElementsByClassName(name);

    let rest = document.getElementsByClassName('portfo');
    let navs = document.getElementsByClassName('button-green');

    for (let i =0;i<rest.length;i++){
      rest[i].style.display = 'block';
    }

    for (let i =0;i<navs.length;i++){
      navs[i].style.textDecoration = 'none';
      navs[i].style.backgroundColor = 'white';
      navs[i].style.color = '#00d1b2';
    }

    event.currentTarget.style.backgroundColor = '#00d1b2';
    event.currentTarget.style.color = 'white';
    event.currentTarget.style.textDecoration = 'none';

}



  const filterGallery = (event) =>{
    console.log(event.currentTarget.innerHTML);

    let name = event.currentTarget.innerHTML;

    let all = document.getElementsByClassName(name);

    let rest = document.getElementsByClassName('portfo');
    let navs = document.getElementsByClassName('button-green');




    console.log(rest.length);

    for (let i =0;i<navs.length;i++){
      navs[i].style.textDecoration = 'line-through';
      navs[i].style.backgroundColor = 'white';
      navs[i].style.backgroundColor = 'white';
      navs[i].style.color = '#00d1b2';
    }

    for (let i =0;i<rest.length;i++){
      rest[i].style.display = 'none';
    }

    for (let i =0;i<all.length;i++){
      all[i].style.display = 'block';
    }

    event.currentTarget.style.backgroundColor = '#00d1b2';
    event.currentTarget.style.color = 'white';
    event.currentTarget.style.textDecoration = 'none';




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

    <div className='portfolio'>

      {posts

        .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
        .slice(0,1)
        .map(({ node: post }) => (

          <div
            //className={post.frontmatter.category + ' portfo'}
            style={{ width:'50%',  margin:'20px'  }}
            key={post.id}
          >
          <a  href={post.fields.slug+'/'}>
          <img src={post.frontmatter.cover.publicURL} width='100%' style={{borderRadius:'10px',height:'350px'}} />
            <div style={{marginTop:'-150px',position:'relative'}}>
              <span style={{marginLeft:'10px',backgroundColor:'#00d1b2',padding:'5px',color:'white',borderRadius:'5px',textAlign:'center',marginBottom:'10px'}}>{post.frontmatter.category}</span>
              <br /> <br />
              <h5 style={{marginLeft:'50px',color:'white'}}>
                  <b>{post.frontmatter.title}</b>
                <br />
                <small>&bull; {post.frontmatter.date}</small>
              </h5>
            <div style={{textAlign:'right'}}>
              <span style={{ marginRight:'25px', backgroundColor:'white',padding:'5px 10px 10px 10px',borderRadius:'50%'}}>
              <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
              </span>
            </div>
            </div>
            </a>
          </div>

        ))}

        {posts

          .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
          .slice(1,3)
          .map(({ node: post }) => (

            <div
              //className={post.frontmatter.category + ' portfo'}
              style={{ width:'20%',  margin:'20px' }}
              key={post.id}
            >
            <a  href={post.fields.slug+'/'}>
            <img src={post.frontmatter.cover.publicURL} width='100%' style={{borderRadius:'10px',height:'350px',}} />
              <div style={{marginTop:'-150px',position:'relative'}}>
                <span style={{marginLeft:'10px',backgroundColor:'#00d1b2',padding:'5px',color:'white',borderRadius:'5px',textAlign:'center',marginBottom:'10px'}}>{post.frontmatter.category}</span>
                <br /> <br />
                <h6 style={{marginLeft:'50px',color:'white'}}>
                    <b>{post.frontmatter.title}</b>
                  <br />
                  <small>&bull; {post.frontmatter.date}</small>
                </h6>
              <div style={{textAlign:'right'}}>
                <span style={{ marginRight:'25px', backgroundColor:'white',padding:'5px 10px 10px 10px',borderRadius:'50%'}}>
                <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                </span>
              </div>
              </div>
              </a>
            </div>

          ))}

          {posts
            .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
            .slice(3,5)
            .map(({ node: post }) => (

              <div
                //className={post.frontmatter.category + ' portfo'}
                style={{ width:'20%',  margin:'20px',marginBottom:'100px'  }}
                key={post.id}
              >
              <a  href={post.fields.slug+'/'}>
              <img src={post.frontmatter.cover.publicURL} width='100%' style={{borderRadius:'10px',height:'350px',}} />
                <div style={{marginTop:'-150px',position:'relative'}}>
                  <span style={{marginLeft:'10px',backgroundColor:'#00d1b2',padding:'5px',color:'white',borderRadius:'5px',textAlign:'center',marginBottom:'10px'}}>{post.frontmatter.category}</span>
                  <br /> <br />
                  <h6 style={{marginLeft:'50px',color:'white'}}>
                      <b>{post.frontmatter.title}</b>
                    <br />
                    <small>&bull; {post.frontmatter.date}</small>
                  </h6>
                <div style={{textAlign:'right'}}>
                  <span style={{ marginRight:'25px', backgroundColor:'white',padding:'5px 10px 10px 10px',borderRadius:'50%'}}>
                  <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                  </span>
                </div>
                </div>
                </a>
              </div>

            ))}







        </div>
























        <div className="Portfolio" style={{textAlign:'center',marginTop:'200px'}}>
          <a onClick={resetGallery} className='button-green'>wszystkie realizacje</a>
        </div>
        <br></br>
        <div className="portfolio section" style={{padding: '0px', textAlign:'center', marginLeft:'10%',marginRight:'10%'}}>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>projekty graficzne</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>strony internetowe</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>identyfikacje wizualne</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>kalendarze książkowe</a>
            </div>


            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>kalendarze drukowane</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>gadżety reklamowe</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>wydruki reklamowe</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>reklamy outdoor</a>
            </div>


            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>fotografia marketingowa</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>systemy wystawiennicze</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>filmy reklamowe</a>
            </div>

            <div className=" port-nav ">
              <a onClick={filterGallery} className='button-green'>opakowania</a>
            </div>

        </div>






    </div>
  )
}




export default OfferCard
