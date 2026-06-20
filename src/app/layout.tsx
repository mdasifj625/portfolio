import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CommandMenu } from "@/components/command-menu";

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
    default: "Md Asif Jawed - Senior Backend Engineer",
    template: "%s | Md Asif Jawed",
  },
  description: "Portfolio of Md Asif Jawed, Senior Backend Engineer focusing on scalable systems, distributed architectures, and SaaS products.",
  openGraph: {
    title: "Md Asif Jawed - Senior Backend Engineer",
    description: "Portfolio of Md Asif Jawed, Senior Backend Engineer focusing on scalable systems, distributed architectures, and SaaS products.",
    url: "https://asif-portfolio.com",
    siteName: "Md Asif Jawed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Asif Jawed - Senior Backend Engineer",
    description: "Portfolio of Md Asif Jawed, Senior Backend Engineer focusing on scalable systems, distributed architectures, and SaaS products.",
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
    name: "Md Asif Jawed",
    jobTitle: "Senior Backend Engineer",
    url: "https://asif-portfolio.com",
    sameAs: [
      "https://linkedin.com/in/yourusername",
      "https://github.com/mdasifj625"
    ]
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
