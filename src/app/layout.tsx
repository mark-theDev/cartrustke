import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Nav_Bar1 from "../components/Nav_Bar";

const inter = Inter({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Vertical",
  description: "Car History Check",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">      
      <body className={`${inter.className} 
      ${process.env.NODE_ENV === "development"?"debug-screens":""}`}>
        <Nav_Bar1 />
          <main>
            {children}           
          </main>  
        <Footer />      
        </body>
    </html>
  );
}
