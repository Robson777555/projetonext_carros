import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins, League_Gothic } from "next/font/google";
import type { Metadata, Viewport } from "next";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league",
});

export const metadata: Metadata = {
  title: "Esplayer Cars - Os Melhores Carros Esportivos do Mercado",
  description:
    "Esplayer Cars - A melhor loja de carros esportivos do Brasil. Encontre Ferrari, Lamborghini, BMW e outros veículos premium. Consultoria especializada e venda de carros importados.",
  keywords:
    "carros esportivos, Ferrari, Lamborghini, BMW, carros importados, veículos premium, loja de carros, consultoria automotiva",
  authors: [{ name: "Esplayer Cars" }],
  creator: "Esplayer Cars",
  publisher: "Esplayer Cars",
  robots: "index, follow",
  metadataBase: new URL("https://projetocarrosemnextbyrobsonjobim.netlify.app/"),
  openGraph: {
    type: "website",
    url: "https://projetocarrosemnextbyrobsonjobim.netlify.app/",
    title: "Esplayer Cars - Os Melhores Carros Esportivos",
    description:
      "A melhor loja de carros esportivos do Brasil. Encontre Ferrari, Lamborghini, BMW e outros veículos premium.",
    siteName: "Esplayer Cars",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Esplayer Cars - Logo",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esplayer Cars - Os Melhores Carros Esportivos",
    description:
      "A melhor loja de carros esportivos do Brasil. Encontre Ferrari, Lamborghini, BMW e outros veículos premium.",
    images: ["/img/logo.png"],
    creator: "@esplayercars",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/img/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/img/logo.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eb2d2d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${leagueGothic.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
