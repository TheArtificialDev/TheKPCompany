// Structured data schemas for The KP Company
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The KP Company',
  url: 'https://thekp.in',
  logo: 'https://thekp.in/logo.png',
  sameAs: [
    'https://twitter.com/thekpcompany',
    'https://linkedin.com/company/thekpcompany',
    'https://github.com/thekpcompany',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'The KP Company',
  url: 'https://thekp.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://thekp.in/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbListSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.name,
    item: b.url,
  })),
});
