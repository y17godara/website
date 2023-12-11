import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/index';
import { cn } from '@/lib/utils';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `Yash Godara | ${siteConfig.meta}`,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creatorId: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: { url: `/og-bg.png`, alt: `${siteConfig.title}` },
  },
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(siteConfig.url),
  assets: [`${siteConfig.url}/assets`],
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: new URL('/og-bg.png', siteConfig.url).toString(),
        alt: siteConfig.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: siteConfig.keywords,
  generator: siteConfig.generator,
  applicationName: siteConfig.title,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const hubot = localFont({
  src: '../public/assets/fonts/HubotSans.woff2',
  variable: '--font-hubot',
  display: 'swap',
  weight: '400 900',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement<RootLayoutProps> {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background text-text selection:bg-bgSelection selection:text-textSelection w-full font-sans antialiased',
          hubot.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
