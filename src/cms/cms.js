import CMS from "netlify-cms-app"
import { es } from "netlify-cms-locales"

CMS.registerLocale("es", es)

import { AboutPagePreview } from "./preview-templates/AboutPagePreview"
import { BlogPostPreview } from "./preview-templates/BlogPostPreview"
import { ProductPagePreview } from "./preview-templates/ProductPagePreview"
import { IndexPagePreview } from "./preview-templates/IndexPagePreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("products", ProductPagePreview)
CMS.registerPreviewTemplate("blog", BlogPostPreview)
