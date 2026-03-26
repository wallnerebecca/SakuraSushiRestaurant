import type { Metadata } from "next";
import "./globals.css";
import Sakura from "./ui/sakura";

export const metadata: Metadata = {
  title: "Sakura Sushi",
  description: "Sushi App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
    <body className="min-h-full">
      <Sakura />
      {children}
    </body>
    </html>
  );
}
