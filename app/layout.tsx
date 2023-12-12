import '@/styles/globals.css';
import localFont from 'next/font/local';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/index';
import { cn } from '@/lib/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { url } from 'inspector';

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
  },
  openGraph: {
    title: siteConfig.aboutMe,
    siteName: siteConfig.title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Yash Godara',
      },
    ],
  },
  referrer: 'origin-when-cross-origin',
  keywords: siteConfig.keywords,
  generator: siteConfig.generator,
  applicationName: siteConfig.title,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
          'w-full bg-primary font-sans text-primary antialiased selection:bg-secondaryA',
          hubot.variable
        )}
      >
        <div
          className={
            'mx-auto max-w-screen-md px-2 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20'
          }
        >
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
