import type { Metadata } from "next";
import { EB_Garamond, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const ebGaramond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UAV Cyber-Attack Detection",
  description: "Comparative Research Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ebGaramond.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="app-root">
            <Navbar />
            <main className="app-shell">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
