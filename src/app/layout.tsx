import type { Metadata } from "next";
import { Anton, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnav Joshi | Business, Finance, Technology & Creative Exploration",
  description:
    "Editorial portfolio and intellectual profile of Arnav Joshi — exploring the intersection of business strategy, quantitative finance, systems engineering, and visual storytelling.",
  keywords: [
    "Arnav Joshi",
    "Chronicle Finance",
    "AURELIAN OS",
    "Business Strategy",
    "Financial Modelling",
    "Systems Engineering",
    "Editorial Portfolio",
  ],
  authors: [{ name: "Arnav Joshi" }],
  openGraph: {
    title: "Arnav Joshi | Business, Finance, Technology & Creative Exploration",
    description:
      "Independent builder exploring the intersection of business, analytical thinking, technology, financial intelligence, and creative expression.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Joshi | Portfolio & Profile",
    description:
      "Business. Systems. Finance. Technology. Creativity.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-screen bg-[var(--outer-mat)] text-[var(--butter-yellow)] antialiased">
        {children}
      </body>
    </html>
  );
}
