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

let uniquesArray = [];

const removeDupli = () => {

let listArray = posts.filter(post => post.node.frontmatter.templateKey === 'gallery-page')
  .map(({ node: post }) => (
    post.frontmatter.category
  ));

let counting = 0;
let found = false;

for (let i = 0; i < listArray.length; i++) {
	for (let y = 0; y < uniquesArray.length; y++) {
		if ( listArray[i] == uniquesArray[y] ) {
			found = true;
		}
	}
	counting++;
	if (counting == 1 && found == false) {
		uniquesArray.push(listArray[i]);
    let node =  document.createElement("option");
    node.value = listArray[i];
    let textnode = document.createTextNode(listArray[i].charAt(0).toUpperCase()+listArray[i].slice(1));
    node.appendChild(textnode);
    document.getElementById('catlist').appendChild(node);
	}
	found = false;
	counting = 0;
}
//console.log(uniquesArray);
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
      console.log(posts.filter(post => post.node.frontmatter.templateKey === 'gallery-page')
        .map(({ node: post }) => (
          post.frontmatter.category
        )));


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


    <>
    <div style={{textAlign:'center'}}>
      <select onChange={filterGallery} className='button-green select-green' name="kategorie" id="catlist">
        <option value="wszystkie realizacje" >Wszystkie realizacje</option>
      </select>
    </div>

    <div onLoad={removeDupli} className='portfolio'>

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
        <div onLoad={removeDupli} className='portfolio'>

          {posts

            .filter(post => post.node.frontmatter.templateKey === 'gallery-page')
            .slice(11,12)
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
              .slice(12,14)
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
                .slice(14,16)
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
                  .slice(16,18)
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
                  .slice(18,19)
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
                      .slice(19,20)
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
                        .slice(20,22)
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
    </>
  )
}




export default GalleryCard
