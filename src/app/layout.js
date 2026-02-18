import './globals.css';

export const metadata = {
  title: 'Adi Saputra | Portfolio - IoT & Web Developer',
  description: 'Portofolio Adi Saputra - Bachelor of Computer Science. Skille d in Next.js, IoT integration, and hardware troubleshooting. Menciptakan solusi digital yang menghubungkan software dan hardware.',
  keywords: 'Adi Saputra, Portfolio, Web Developer, IoT, Next.js, Computer Science, Magelang',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
