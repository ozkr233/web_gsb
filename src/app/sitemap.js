import { SITE_URL } from '@/lib/seo';

export default function sitemap() {
  const pages = ['/', '/nosotros', '/bilinguismo', '/contacto'];
  const lastModified = new Date().toISOString();

  return pages.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
  }));
}
