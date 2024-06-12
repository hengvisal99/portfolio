import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import Head from "./head";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"] ,
  weight : ["100","200","300","400","500","600","700","800"],
  variable : "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable} >
        <Providers>
          <Head></Head>
          <main>
            {children}
          </main>

        </Providers>
      </body>
    </html>
  );
}
