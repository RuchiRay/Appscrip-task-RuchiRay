import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const simplon = localFont({
  src: [
    {
      path: "./fonts/Simplon_BP_Regular_1.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Simplon_BP_Medium_1.ttf",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "./fonts/Simplon_BP_Bold_2.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
});
export const metadata: Metadata = {
  title: "Online shopping site",
  description:
    "An online shopping site offering a wide range of products. Find great deals and discounts on your favorite brands. Shop now and enjoy convenient and secure online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={simplon.className}>{children}</body>
    </html>
  );
}
