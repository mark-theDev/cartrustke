'use client'
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Nav_Bar1 from "../components/Nav_Bar";
import NextNProgress from 'nextjs-progressbar';

const inter = Inter({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextNProgress color="tomato" height={5} />
        <Nav_Bar1 />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
