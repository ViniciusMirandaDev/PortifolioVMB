import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { forwardRef } from 'react'

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({
  href,
  replace,
  scroll,
  shallow,
  locale,
  children
}) {
  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      passHref
    >
      {children}
    </NextLink>
  )
})
