import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Ropa_Sans, Pacifico } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
})

const ropaSans = Ropa_Sans({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-ropa-sans',
})

export const metadata: Metadata = {
  title: "Ótica Lorgil",
  description: "Uma ótica diferente para você ver o mundo!",
  openGraph: {
    title: "Ótica Lorgil",
    description: "Uma ótica diferente para você ver o mundo!",
    url: "https://www.oticalorgil.com.br",
    siteName: "Ótica Lorgil",
    images: [
      {
        url: "/img/Logos/Logo_Lorgil.svg",
        width: 1200,
        height: 630,
        alt: "Ótica Lorgil - Uma ótica diferente para você ver o mundo!",
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${ropaSans.variable} ${pacifico.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ótica Lorgil" />
        <meta name="google-site-verification" content="TCdbfXNFBn1HYwKZocDepcYAg9_O5HUPqRsKgoo6C4o" />
        <link rel="icon" href="/img/Logos/Logo_Lorgil.svg" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
