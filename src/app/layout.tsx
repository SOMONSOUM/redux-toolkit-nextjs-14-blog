import type { Metadata } from "next";
import { ReduxProvider } from "@/store/Provider";
import { Inter } from "next/font/google";
import { reduxStore } from "@/store/store";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{overscrollBehavior: 'none'}}><ReduxProvider>{children}</ReduxProvider></body>
    </html>
  );
}
