import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopstar",
  description: "SAAS based e-commerce software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
    <head>
      <title>Shopstar</title>
        <ColorSchemeScript />
    </head>
    <body
        className={`${inter.variable} antialiased`}
    >
      <MantineProvider withGlobalClasses>
        <Navbar />
        {children}
        <Footer />
      </MantineProvider>
    </body>
    </html>
  );
}
