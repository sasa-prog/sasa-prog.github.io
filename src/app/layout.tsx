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
        <main className="flex min-h-screen flex-col p-6 bg-slate-900">
          {children}
        </main>
      </body>
    </html>
  );
}
