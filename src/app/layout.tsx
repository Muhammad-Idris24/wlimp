import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://wlimp.org"),
  title: {
    default: "WLIMP 2026 | WeCare Leadership Conference",
    template: "%s | WLIMP",
  },
  description:
    "Register for the WeCare Leadership Conference 2026, the flagship convening of the WeCare Leadership and Impact Mentorship Programme.",
  keywords: [
    "WLIMP",
    "WeCare Leadership Conference",
    "youth leadership conference",
    "leadership mentorship Nigeria",
    "youth innovation conference",
    "African leadership development",
  ],
  authors: [{ name: "WeCare Centre for Community Awareness and Empowerment Initiative" }],
  creator: "WeCare Centre for Community Awareness and Empowerment Initiative",
  openGraph: {
    title: "WLIMP 2026 | WeCare Leadership Conference",
    description:
      "Leadership For Impact: Driving Youth Innovation For Nation Building.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/abuja-youth-leadership.jpg",
        width: 1200,
        height: 1500,
        alt: "Emerging youth leadership in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WLIMP 2026 | WeCare Leadership Conference",
    description:
      "A premium leadership, mentorship and youth innovation platform by WeCare.",
    images: ["/images/abuja-youth-leadership.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
