import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Navbar } from "@/components/common";
import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mis Barajitas",
  description: "Mis barajitas, aplicación web de stickers digitales coleccionables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider>
          <Setup />
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-8">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
