import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yure Moutella - Software Developer",
  description:
    "Software Architect with 6+ years designing scalable enterprise systems. Specialized in distributed architectures, DDD, and API-driven integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
