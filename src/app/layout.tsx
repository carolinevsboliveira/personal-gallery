import { Hero } from "~/components/hero";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Colorful princess",
  description:
    "A simple gallery to display princess created by Caroline Oliveira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* @ts-expect-error Async Server Component */}
        <Hero />
        {children}
      </body>
    </html>
  );
}
