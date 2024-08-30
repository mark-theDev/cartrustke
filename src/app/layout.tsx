'use client'
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Nav_Bar1 from "../components/Nav_Bar";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { NextUIProvider } from "@nextui-org/react";


const inter = Inter({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ProgressBar
            height="5px"
            color="#082854"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Nav_Bar1 />
          <main>
            {children}
          </main>
          <Footer />
        </NextUIProvider>

      </body>
    </html>
  );
}
