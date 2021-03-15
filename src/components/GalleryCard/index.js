import React from 'react'
import { Link } from 'gatsby'

const GalleryCard = (props) => {
  const { posts } = props

  // hides the items
  const resetGallery = () =>{


    let rest = document.getElementsByClassName('portfo');

    for (let i =0;i<rest.length;i++){
      rest[i].style.display = 'block';
    }



}



  const filterGallery = () =>{

    let list = document.getElementById('catlist');
    console.log(list.options[ list.selectedIndex ].value);
    let name = list.options[ list.selectedIndex ].value;

    let all = document.getElementsByClassName(name);

    let rest = document.getElementsByClassName('portfo');
    let navs = document.getElementsByClassName('button-green');



    if (name == "wszystkie realizacje"){
      resetGallery();
    } else {
      console.log(rest.length);

      for (let i =0;i<rest.length;i++){
        rest[i].style.display = 'none';
      }

      for (let i =0;i<all.length;i++){
        all[i].style.display = 'block';
      }


      }
    }



  return (


    <div>
    <div style={{textAlign:'center'}}>
      <select onChange={filterGallery} className='button-green select-green' name="kategorie" id="catlist">
        <option value="wszystkie realizacje" >Wszystkie realizacje</option>
        <option value="projekty graficzne" >Projektowanie graficzne</option>
        <option value="strony internetowe" >Strony internetowe</option>
        <option value="identyfikacje wizualne" >Branding</option>
        <option value="kalendarze książkowe" >Kalendarze książkowe</option>
        <option value="kalendarze drukowane" >Kalendarze drukowane</option>
        <option value="gadżety reklamowe" >Gadżety reklamowe</option>
        <option value="wydruki reklamowe" >Wydruki reklamowe</option>
        <option value="reklamy outdoor" >Reklamy outdoor</option>
        <option value="fotografia marketingowa" >Fotografia marketingowa</option>
        <option value="systemy wystawiennicze" >Systemy wystawiennicze</option>
        <option value="filmy reklamowe" >Filmy reklamowe</option>
        <option value="opakowania" >Opakowania</option>
      </select>
    </div>



    <div className='portfolio'>

      {posts

        .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
        .slice(0,1)
        .map(({ node: post }) => (
          <Link  to={post.fields.slug+'/'}
          className={post.frontmatter.category + ' portfo'+' forty8' + ' i350'}
          key={post.id}
          style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
          >

            <div className='pwrapper'>
              <span className='categ'>{post.frontmatter.category}</span>
              <br /> <br />
              <h5 style={{marginLeft:'50px',color:'white'}}>
                  <b>{post.frontmatter.title}</b>
                <br />
                <small>&bull; {post.frontmatter.date}</small>
              </h5>
            <div style={{textAlign:'right'}}>
              <span className='pspan'>
              <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
              </span>
            </div>
            </div>


          </Link>
        ))}

        {posts

          .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
          .slice(1,3)
          .map(({ node: post }) => (
            <Link  to={post.fields.slug+'/'}
            className={post.frontmatter.category + ' portfo' + ' twenty1'+' i350'}
            key={post.id}
            style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
            >

              <div className='pwrapper'>
                <span className='categ'>{post.frontmatter.category}</span>
                <br /> <br />
                <h6 style={{marginLeft:'50px',color:'white'}}>
                    <b>{post.frontmatter.title}</b>
                  <br />
                  <small>&bull; {post.frontmatter.date}</small>
                </h6>
              <div style={{textAlign:'right'}}>
                <span className='pspan'>
                <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                </span>
              </div>
              </div>

            </Link>
          ))}
          <div className='flexWrapper'>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
            .slice(3,5)
            .map(({ node: post }) => (
              <Link  to={post.fields.slug+'/'}
              className={post.frontmatter.category + ' portfo'+' twenty2'+' i160'}
              key={post.id}
              style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
              >

                <div className='pwrapper'>
                  <span className='categ'>{post.frontmatter.category}</span>
                  <br /> <br />
                  <h6 style={{marginLeft:'50px',color:'white'}}>
                      <b>{post.frontmatter.title}</b>
                    <br />
                    <small>&bull; {post.frontmatter.date}</small>
                  </h6>
                <div style={{textAlign:'right'}}>
                  <span className='pspan'>
                  <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                  </span>
                </div>
                </div>

              </Link>

            ))}

            {posts
              .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
              .slice(6,8)
              .map(({ node: post }) => (
                <Link  to={post.fields.slug+'/'}
                className={post.frontmatter.category + ' portfo'+' twenty2'+' i160'}
                key={post.id}
                style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
                >

                  <div className='pwrapper'>
                    <span className='categ'>{post.frontmatter.category}</span>
                    <br /> <br />
                    <h6 style={{marginLeft:'50px',color:'white'}}>
                        <b>{post.frontmatter.title}</b>
                      <br />
                      <small>&bull; {post.frontmatter.date}</small>
                    </h6>
                  <div style={{textAlign:'right'}}>
                    <span className='pspan'>
                    <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                    </span>
                  </div>
                  </div>

                </Link>
              ))}
            </div>
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
              .slice(5,6)
              .map(({ node: post }) => (
                <Link  to={post.fields.slug+'/'}
                className={post.frontmatter.category + ' portfo'+' forty5'+' i350'}
                key={post.id}
                style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
                >

                  <div className='pwrapper'>
                    <span className='categ'>{post.frontmatter.category}</span>
                    <br /> <br />
                    <h6 style={{marginLeft:'50px',color:'white'}}>
                        <b>{post.frontmatter.title}</b>
                      <br />
                      <small>&bull; {post.frontmatter.date}</small>
                    </h6>
                  <div style={{textAlign:'right'}}>
                    <span className='pspan'>
                    <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                    </span>
                  </div>
                  </div>

                </Link>
              ))}



                {posts
                  .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
                  .slice(8,9)
                  .map(({ node: post }) => (
                    <Link  to={post.fields.slug+'/'}
                    className={post.frontmatter.category + ' portfo'+' forty8' + ' i250'}
                    key={post.id}
                    style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}
                    >

                      <div className='pwrapper'>
                        <span className='categ'>{post.frontmatter.category}</span>
                        <br /> <br />
                        <h6 style={{marginLeft:'50px',color:'white'}}>
                            <b>{post.frontmatter.title}</b>
                          <br />
                          <small>&bull; {post.frontmatter.date}</small>
                        </h6>
                      <div style={{textAlign:'right'}}>
                        <span className='pspan'>
                        <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                        </span>
                      </div>
                      </div>

                    </Link>

                  ))}

                  {posts
                    .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
                    .slice(9,11)
                    .map(({ node: post }) => (
                      <Link  to={post.fields.slug+'/'}
                      className={post.frontmatter.category + ' portfo' +' twenty1'+' i250'}
                      key={post.id}
                      style={{backgroundImage:'url('+post.frontmatter.cover.publicURL+')'}}>

                        <div className='pwrapper'>
                          <span className='categ'>{post.frontmatter.category}</span>
                          <br /> <br />
                          <h6 style={{marginLeft:'50px',color:'white'}}>
                              <b>{post.frontmatter.title}</b>
                            <br />
                            <small>&bull; {post.frontmatter.date}</small>
                          </h6>
                        <div style={{textAlign:'right'}}>
                          <span className='pspan'>
                          <img width="10px"  style={{verticalAlign:'middle'}}   alt="arrow" src='/img/angle-right.svg'/>
                          </span>
                        </div>
                        </div>

                      </Link>

                    ))}








        </div>
    </div>
  )
}




export default GalleryCard
