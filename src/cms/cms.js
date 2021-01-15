import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import ArticlePreview from './preview-templates/ArticlePreview'
import GalleryPreview from './preview-templates/GalleryPreview'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
    },
  },
})
CMS.registerPreviewStyle('/styles.sass')
CMS.registerPreviewTemplate('blog', ArticlePreview)
CMS.registerPreviewTemplate('portfolio', GalleryPreview)
CMS.registerPreviewTemplate('oferta', OfferPreview)
