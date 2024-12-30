import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Image } from "@nextui-org/image";
import Link from "next/link";

import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-column justify-between p-3">
        <Link color="foreground" href="/">
      <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://lh6.googleusercontent.com/kzmA2qA6Lhq11aWrB0M340ea9I__CzrEpZeQUSNQYd3WU7S04rOhOWwHgTlSWPVMYHtkf-ATXHqR7lQc14n6XXZW9lRjANcAg6JpNNYQzKRVD8lO"
          width={40}
        />
            </Link>
        <div className="flex gap-4">
          <Link aria-current="page" href="/card">
            Customers
          </Link>

          <Link color="foreground" href="/manager">
            Riccardo
          </Link>

        </div>
        <div></div>

        </div>

         <div className="	grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <Providers>{children}</Providers>
          </main>
          </div>
      
      </body>
    </html>
  );
}
