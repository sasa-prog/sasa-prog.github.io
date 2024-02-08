import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/navigationBar';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="sticky top-0 z-20 drop-shadow-md">
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}
