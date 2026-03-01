import './globals.css';

const SITE_URL = 'https://www.adisaputra-tech.my.id';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Adi Saputra | Portfolio - IoT & Web Developer',
    template: '%s | Adi Saputra',
  },
  description:
    'Portfolio Adi Saputra (adisaputra) - Sarjana Komputer, Web Developer & IoT Enthusiast. Skilled in Next.js, React, IoT integration, and hardware troubleshooting. Based in Magelang, Indonesia.',
  keywords: [
    'adisaputra',
    'adi saputra',
    'Adi Saputra',
    'Nur Cahyo Adi Saputra',
    'adisaputra portfolio',
    'adisaputra web developer',
    'adisaputra iot',
    'web developer Magelang',
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
    title: 'Adi Saputra | Portfolio - IoT & Web Developer',
    description:
      'Portfolio adisaputra - Sarjana Komputer, Web Developer & IoT Enthusiast. Building responsive web applications and IoT solutions.',
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
    title: 'Adi Saputra | Portfolio - IoT & Web Developer',
    description:
      'Portfolio adisaputra - Sarjana Komputer, Web Developer & IoT Enthusiast.',
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
  const jsonLd = {
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
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
