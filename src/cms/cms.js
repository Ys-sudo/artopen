import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import ArticlePreview from './preview-templates/ArticlePreview'
import GalleryPreview from './preview-templates/GalleryPreview'
import OfferPreview from './preview-templates/OfferPreview'

import PolicyPagePreview from './preview-templates/PolicyPagePreview'


import ContactPagePreview from './preview-templates/ContactPagePreview'
import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
})
CMS.registerPreviewStyle('/styles.sass')
CMS.registerPreviewTemplate('Blog', ArticlePreview)
CMS.registerPreviewTemplate('Portfolio', GalleryPreview)
CMS.registerPreviewTemplate('Oferta', OfferPreview)
/*
CMS.registerPreviewTemplate('Kontakt', ContactPagePreview)
CMS.registerPreviewTemplate('Home', HomePagePreview)
CMS.registerPreviewTemplate('O nas', AboutPagePreview)

CMS.registerPreviewTemplate('Polityka', PolicyPagePreview)
*/
