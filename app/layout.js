import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NexaHome — Teknologi Rumah Pintar Modern",
  description:
    "Panduan lengkap membangun smart home modern: perangkat pintar, protokol Zigbee/Z-Wave/Matter, otomatisasi, keamanan 24/7, dan efisiensi energi dalam satu aplikasi.",
  keywords: [
    "smart home",
    "rumah pintar",
    "IoT",
    "home automation",
    "Matter",
    "Zigbee",
    "Z-Wave",
    "perangkat pintar",
  ],
  openGraph: {
    title: "NexaHome — Teknologi Rumah Pintar Modern",
    description:
      "Perangkat, protokol, dan langkah membangun rumah pintar masa depan.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
