import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "react-day-picker";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Wealth",
  description: "Wealth for your future!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`} >
        {/*header*/}
        <Header />

        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        {/*footer*/}
        <footer className="bg-black py-12 border-t border-purple-400 my-0">
          <div className="container mx-auto px-4 text-center text-gray-600" >
            <p>Made with Love of Ayush</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
