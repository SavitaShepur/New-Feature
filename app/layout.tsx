import type { Metadata } from "next";
import SiteFooter from "./components/SiteFooter";
import SiteNav from "./components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beam Demo",
  description: "Test bed for the Claude PM-to-PR flow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
