import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beam Demo",
  description: "Test bed for the Claude PM-to-PR flow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
