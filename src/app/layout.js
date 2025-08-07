import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import ToastProvider from "../components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header 
          title="ElectroStore"
          subtitle="Sua loja de tecnologia"
          totalProducts={10}
        />
        <main>{children}</main>
        <ToastProvider />
      </body>
    </html>
  );
}
