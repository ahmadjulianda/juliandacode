import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Julianda - Full-Stack Web Developer",
    template: "%s | Ahmad Julianda",
  },
  description:
    "Full-Stack Web Developer passionate about building scalable web applications with modern technologies. View my portfolio and blog.",
  keywords: [
    "Web Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js",
    "Portfolio",
    "Blog",
    "Ahmad Julianda",
  ],
  authors: [{ name: "Ahmad Julianda" }],
  creator: "Ahmad Julianda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juliandacode.com",
    siteName: "Ahmad Julianda",
    title: "Ahmad Julianda - Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer passionate about building scalable web applications with modern technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Julianda - Full-Stack Web Developer",
    description:
      "Full-Stack Web Developer passionate about building scalable web applications with modern technologies.",
    creator: "@ahmadjulianda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1" style={{ paddingTop: '80px' }}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
