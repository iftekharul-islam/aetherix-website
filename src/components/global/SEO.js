'use client';
import { APPNAME } from '@/config';
import Head from 'next/head';

export default function SEO({seo}) {
  const siteName = APPNAME;
  const image = 'https://yoursite.com/default-image.jpg';
  const defaultImage = 'https://yoursite.com/default-image.jpg';

  return (
    <Head>
      <title>{seo?.title ? `${seo?.title} | ${siteName}` : siteName}</title>
      {seo?.description && <meta name="description" content={seo?.description} />}
      {seo?.keywords && <meta name="keywords" content={seo?.keywords} />}
      <meta property="og:title" content={seo?.title || siteName} />
      <meta property="og:description" content={seo?.description || ''} />
      <meta property="og:image" content={image || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo?.title || siteName} />
      <meta name="twitter:description" content={seo?.description || ''} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
}
