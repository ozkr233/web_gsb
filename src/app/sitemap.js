
const baseUrl = 'https://gimnasiosimonbolivar.edu.co';

export default function sitemap() {
  const pages = ['/', '/nosotros', '/bilinguismo', '/contacto'];
  const lastModified = new Date().toISOString();

  return pages.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified,
  }));
}
