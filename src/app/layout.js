import "./globals.css";
import Header from "./components/Header";
import Script from "next/script";
import { Barlow } from "next/font/google";

// Configure Barlow font for headings
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

// Configure Lexend Deca font for body text
// const lexendDeca = Lexend_Deca({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-lexend-deca",
// });

export const metadata = {
  title: "GreenRock Solutions | Your trusted consruction partner",
  description: "High-quality industrial and commercial construction solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Load GSAP and CustomEase via CDN */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/CustomEase.min.js"
          strategy="beforeInteractive"
        />
        {/* Load transition script */}
        <Script
          src="/scaffolding-transition.js"
          strategy="afterInteractive"
        />
        
      </head>
      <body className={`${barlow.className}  bg-[#0a0a0a] text-white antialiased min-h-screen flex flex-col font-sans`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer to allow page scrolling and premium feel */}
        <footer className="bg-black/40 border-t border-white/5 py-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GreenRock Solutions. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
