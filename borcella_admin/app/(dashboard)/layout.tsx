import type { Metadata } from "next";
import {ClerkProvider} from '@clerk/nextjs'
import { Inter } from "next/font/google";


import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borcelle - Admin Dashboard",
  description: "Admin dashboard to manage Borcella's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        
        <div className="flex max-lg:flex-col text-grey-1">
          <LeftSideBar />
          <TopBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  </ClerkProvider>
  );
}
