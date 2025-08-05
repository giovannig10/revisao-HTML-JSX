import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Otimização para Core Web Vitals
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ElectroStore - Loja de Eletrônicos",
  description: "A melhor loja de eletrônicos do Brasil. Smartphones, laptops, TVs e muito mais com entrega grátis!",
  keywords: ["eletrônicos", "smartphones", "laptops", "TVs", "tecnologia"],
  authors: [{ name: "ElectroStore Team" }],
  robots: "index, follow",
  openGraph: {
    title: "ElectroStore - Loja de Eletrônicos",
    description: "A melhor loja de eletrônicos do Brasil",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="pt-BR" 
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preconnect para melhor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload de recursos críticos */}
        <link rel="preload" href="/next.svg" as="image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header 
          title="ElectroStore"
          subtitle="Sua loja de tecnologia"
          totalProducts={10}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
