import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto React - POS IFRN",
  description: "Projeto criado como atividade da disciplina de POS (Programação Orientada a Serviços) no IFRN - CNAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <h1>Projeto React - IFRN</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
