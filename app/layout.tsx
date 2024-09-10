import "@/styles/globals.css";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/index";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider} from "@/components";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `Yash Godara | @y17godara`,
    template: `%s | Yash Godara`,
  },
  description: siteConfig.description,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  metadataBase: new URL("https://www.y-g.tech"),
  alternates: {
    canonical: "https://www.y-g.tech",
    languages: {
      "x-default": "https://www.y-g.tech",
      en: "https://www.y-g.tech",
    },
  },
  robots: "index, follow",
  appleWebApp: true,
  referrer: "origin-when-cross-origin",
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
  src: "../public/assets/fonts/HubotSans.woff2",
  variable: "--font-hubot",
  display: "swap",
  weight: "400 900",
});

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({
  children,
}: SiteLayoutProps): React.ReactElement<SiteLayoutProps> {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      <body className={cn(hubot.variable)}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children} <SpeedInsights />
        <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
