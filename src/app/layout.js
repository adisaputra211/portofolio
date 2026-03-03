import Script from 'next/script';
import './globals.css';

const SITE_URL = 'https://www.adisaputra-tech.my.id';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Web Developer Magelang - Adi Saputra | Portfolio - IoT',
    template: '%s | Adi Saputra',
  },
  description:
    'Web Developer Magelang - Adi Saputra. Sarjana Komputer & IoT Enthusiast specializing in Next.js, React, and IoT solutions. Based in Magelang, Indonesia.',
  keywords: [
    'Web Developer Magelang',
    'web developer Magelang',
    'adi saputra',
    'Adi Saputra',
    'Nur Cahyo Adi Saputra',
    'adi saputra portfolio',
    'adisaputra web developer',
    'adi saputra iot',
    'iot developer Indonesia',
    'portfolio adi saputra',
  ],
  authors: [{ name: 'Adi Saputra', url: SITE_URL }],
  creator: 'Adi Saputra',
  publisher: 'Adi Saputra',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Adi Saputra Portfolio',
    title: 'Web Developer Magelang - Adi Saputra | Portfolio',
    description:
      'Web Developer Magelang - Adi Saputra. Building responsive web applications and IoT solutions. Sarjana Komputer, Web Developer & IoT Enthusiast.',
    images: [
      {
        url: '/Profil2.png',
        width: 800,
        height: 800,
        alt: 'Adi Saputra - Web Developer & IoT Enthusiast',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Developer Magelang - Adi Saputra | Portfolio',
    description:
      'Web Developer Magelang - Adi Saputra. Sarjana Komputer, Web Developer & IoT Enthusiast.',
    images: ['/Profil2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Nur Cahyo Adi Saputra',
      alternateName: ['Adi Saputra', 'adisaputra'],
      url: SITE_URL,
      image: `${SITE_URL}/Profil2.png`,
      jobTitle: 'Web Developer & IoT Enthusiast',
      description:
        'Sarjana Komputer specializing in Next.js, React, IoT integration, and hardware troubleshooting.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Magelang',
        addressCountry: 'ID',
      },
      email: 'adisaputra1523@gmail.com',
      sameAs: ['https://github.com/saputraaa211'],
      knowsAbout: [
        'Web Development',
        'IoT',
        'Next.js',
        'React',
        'Hardware Troubleshooting',
        'Arduino',
        'ESP32',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Adi Saputra Portfolio',
      alternateName: ['adisaputra'],
      url: SITE_URL,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Adi Saputra Portfolio',
      url: SITE_URL,
      logo: `${SITE_URL}/Logo.png`,
    },
  ];

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BPKNP96H3V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BPKNP96H3V');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
