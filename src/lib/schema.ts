export interface JsonLd {
  '@context': string
  '@type': string
  [key: string]: any
}

const SITE_URL = process.env.SITE_URL || 'https://livepriceindia.vercel.app'

export function generateOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'LivePriceIndia',
    description: 'Real-time financial prices tracking platform for India',
    url: SITE_URL,
    sameAs: [
      'https://twitter.com/livepriceindia',
      'https://facebook.com/livepriceindia',
      'https://instagram.com/livepriceindia',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Maharashtra',
      addressLocality: 'Pune',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@livepriceindia.com',
    },
  }
}

export function generateProductSchema(product: {
  name: string
  price: number
  city?: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      ...(product.city && {
        areaServed: {
          '@type': 'City',
          name: product.city,
        },
      }),
    },
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  publishedAt: string
  author: string
  image?: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'LivePriceIndia',
      url: SITE_URL,
    },
    ...(article.image && {
      image: article.image,
    }),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
