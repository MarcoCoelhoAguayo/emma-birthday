import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Cumpleaños de Emma | 4 años",
  description: "Estás invitado a celebrar los 4 años de Emma.",
  openGraph: {
    title: "¡Emma cumple 4 años!",
    description: "Acompáñanos a celebrar su cumpleaños.",
    url: "https://tu-dominio.com",
    siteName: "Invitación de Emma",
    images: [
      {
        url: "https://tu-dominio.com/og-emma.jpg",
        width: 1200,
        height: 630,
        alt: "Invitación de cumpleaños de Emma",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
