import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tucker's Marketplace - Ottawa's Favourite Buffet | ByWard Market",
  description: "Experience Ottawa's iconic buffet with over 50 rotating selections daily. Located in the heart of ByWard Market at 61 York Street. Freshly carved meats, wood-fired pizzas, and more!",
  keywords: "Tucker's Marketplace, Ottawa buffet, ByWard Market restaurant, buffet Ottawa, family dining Ottawa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
