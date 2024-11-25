import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlexFi",
  description: "FlexFi - Payment Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo/FlexFiFavicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&family=Darker+Grotesque:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="FlexFi - Simplifying payments with blockchain technology"
        />
        <meta
          name="keywords"
          content="FlexFi, blockchain, payments, BNPL, finance"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta property="og:title" content="FlexFi - Payment Solutions" />
        <meta
          property="og:description"
          content="A revolutionary way to handle payments with FlexFi."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.flex-fi.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FlexFi - Payment Solutions" />
        <meta
          name="twitter:description"
          content="Simplifying payments with FlexFi."
        />
        <meta name="twitter:image" content="/images/twitter-image.png" />
        <title>FlexFi - Payment Solutions</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
