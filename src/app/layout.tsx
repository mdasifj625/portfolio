import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";
import portfolioData from "@/data/portfolio.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description: portfolioData.personal.description,
  openGraph: {
    title: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    description: portfolioData.personal.description,
    url: portfolioData.personal.domain,
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} - ${portfolioData.personal.role}`,
    description: portfolioData.personal.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.personal.name,
    jobTitle: portfolioData.personal.role,
    url: portfolioData.personal.domain,
    sameAs: portfolioData.socialLinks.map((link) => link.url),
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full scroll-pt-24 scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="flex min-h-full flex-col overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
