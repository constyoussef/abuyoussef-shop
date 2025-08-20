import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-amiri",
  weight: ["400", "700"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});
export const metadata: Metadata = {
  title: "ابو يوسف - صالون حلاقة رجالي عصري",
  description: "خدمات العناية الرجالية الفاخرة بأسلوب وأناقة",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${cairo.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
