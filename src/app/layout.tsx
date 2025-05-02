import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import agromindlogo from "../../public/Agromind-logo.png";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agromind",
  description: "Toprağı anlamanın akıllı yolu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-black`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="flex min-h-[64px] items-center shadow z-10 bg-white px-4">
      <nav className="flex items-center w-full">
        <Link href="/">
          <Image
            src={agromindlogo}
            alt="agromind logo"
            width={200}
            height={50}
          />
        </Link>

        <div className="ml-auto flex gap-4 items-center">
          <Link className="hover:text-[#92b73a] transition-colors duration-300" href="/">
            Ürünlerimiz
          </Link>
          <Link className="hover:text-[#92b73a] transition-colors duration-300" href="/">
            Bize Ulaşın
          </Link>
          <Link className="hover:text-[#92b73a] transition-colors duration-300" href="/">
            Hakkımızda
          </Link>
        </div>
      </nav>
    </header>
  );
}
