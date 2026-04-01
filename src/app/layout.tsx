import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebContent – UGC Platform",
  description: "WebContent is the easiest all-in-one UGC tool for Scandinavian brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
