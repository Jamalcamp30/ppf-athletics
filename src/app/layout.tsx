import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PPF Athletics | Performance OS — Timed. Measured. Coached. Verified.",
  description:
    "PPF is where serious athletes build a cleaner, stronger, faster, more evaluatable version of themselves. Combine & Pro Day preparation built on coached standards, verified measurables, and real outcomes.",
  keywords: [
    "PPF Athletics",
    "combine prep",
    "pro day training",
    "football performance",
    "speed training",
    "NFL combine",
    "draft preparation",
    "athlete development",
    "verified testing",
    "performance facility",
  ],
  openGraph: {
    title: "PPF Athletics | Performance OS",
    description:
      "Build a draft-ready profile before the room ever questions it. Timed. Measured. Coached. Verified.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-ppf-black text-ppf-white">
        {children}
      </body>
    </html>
  );
}
