import type { Metadata } from "next";
import { DM_Serif_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Harish & Deekshitha's Wedding",
  description: "Join us in celebrating the wedding of Harish and Deekshitha. November 7, 2025 - Wedding Ceremony & November 9, 2025 - Reception",
  keywords: ["wedding", "invitation", "Harish", "Deekshitha", "November 2025"],
  authors: [{ name: "Bloomora" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/lavender-love-symbol.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/lavender-love-symbol.svg"
  },
  openGraph: {
    title: "Harish & Deekshitha's Wedding",
    description: "Join us in celebrating the wedding of Harish and Deekshitha. November 7, 2025 - Wedding Ceremony & November 9, 2025 - Reception",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish & Deekshitha's Wedding",
    description: "Join us in celebrating the wedding of Harish and Deekshitha. November 7, 2025 - Wedding Ceremony & November 9, 2025 - Reception",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
