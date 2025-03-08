import ClientLayout from "./clientLayout";
import { ColorSchemeScript,mantineHtmlProps } from "@mantine/core";
import {Inter} from "next/font/google"

export const metadata = {
  title: "Shopstar",
  description: "SAAS based e-commerce software",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
      <ClientLayout>{children}</ClientLayout>
    </body>
    </html>
  );
}
