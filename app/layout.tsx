import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github User Search",
  description:
    "Discover GitHub users effortlessly with GitFinder – the ultimate GitHub user search app. Explore profiles, repositories, and stay connected with the open-source community. Simple, fast, and secure. Optimize your GitHub experience today!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body className={openSans.className}>{children}</body>
  </html>
);

export default RootLayout;
