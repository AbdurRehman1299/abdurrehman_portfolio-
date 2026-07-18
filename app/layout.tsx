import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: "Portfolio | Abdur Rehman",
  description: "This website is related to my portfolio. I am Abdur Rehman, Full Stack Developer. Currently, I am pursuing in 7th semester of Software Engineering from Superior University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className={`${syne.className} min-h-full flex flex-col leading-8 overflow-x-hidden`}>{children}</body>
    </html>
  );
}
