
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi cielo, mi universo ♡",
  description: "Un pequeño universo hecho especialmente para ti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
