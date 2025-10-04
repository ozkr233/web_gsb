
export default function robots() {
  const baseUrl = 'https://gimnasiosimonbolivar.edu';
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
