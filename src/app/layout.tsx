import type { Metadata } from "next";
import { Geist, Big_Shoulders } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const bigShouldersText = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Purpose Project - Find Clarity, Discover Your Purpose",
  description: "Join us for a transformative session where you'll unlock your true potential and gain clarity on your life's purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${bigShouldersText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
