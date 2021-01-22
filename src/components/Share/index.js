import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import './styles.sass'

const Share = (props) => {
  const { title, slug, excerpt, mobile, siteUrl, pathPrefix } = props
  const realPrefix = pathPrefix === '/' ? '' : pathPrefix
  const url = siteUrl + realPrefix + slug

  const iconSize = mobile ? 25 : 38
  const filter = count => (count > 0 ? count : '')

  return (
    <div className='columns social'>
      <div className='column'>
      <h6 style={{marginTop:'20px'}}> Spodobał Ci się artykuł? <br /> <b style={{color:'#00d1b2'}}> Udostępnij go znajomym!</b> </h6>
      </div>
      <div className='column' style={{textAlign:'right',marginTop:'20px'}}>
        <RedditShareButton url={url} title={title}>
          <img src='/img/reddit-share.svg' className='social-icon' width={iconSize} />
          <RedditShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </RedditShareCount>
        </RedditShareButton>
        &nbsp;
        &nbsp;
        &nbsp;
        <TwitterShareButton url={url} title={title}>
          <img src='/img/twitter-share.svg' className='social-icon' width={iconSize} />
        </TwitterShareButton>
        &nbsp;
        &nbsp;
        &nbsp;
        <FacebookShareButton url={url} quote={excerpt}>
          <img src='/img/fb-share.svg' className='social-icon' width={iconSize} />
          <FacebookShareCount url={url}>
            {count => <div className='share-count'>{filter(count)}</div>}
          </FacebookShareCount>
        </FacebookShareButton>
        &nbsp;
        &nbsp;
        &nbsp;
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
        >
          <img src='/img/linkedin-share.svg' className='social-icon' width={iconSize} />
        </LinkedinShareButton>
        &nbsp;
        &nbsp;
        &nbsp;
        <TelegramShareButton url={url}>
          <img src='/img/telegram-share.svg' className='social-icon' width={iconSize} />
        </TelegramShareButton>
      </div>
    </div>
  )
}

export default Share
