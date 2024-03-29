import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  icon?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  shouldIndexPage?: boolean
  themeColor?: string
}

export default function SEO({
  icon,
  title,
  description,
  keywords,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
  themeColor = '#121214'
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix && '| VMB Developer'}`
  const pageImage = image
    ? image.startsWith('/')
      ? `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${image}`
      : image
    : null

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
      {keywords && (
        <meta name="keywords" content={keywords.slice().join(', ')} />
      )}

      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}

      <link rel="apple-touch-icon" href="/apple-icon.png" />
      <link rel="shortcut icon" href={icon} type="image/png" />

      <link rel="manifest" href="/manifest.json" />

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={themeColor} />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </Head>
  )
}
