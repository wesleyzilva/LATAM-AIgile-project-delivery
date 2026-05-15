import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Wesley | LATAM BR | Agile Delivery",
  description:
    "Wesley Zilva — Agile Delivery Manager for Digital Projects | Nearshore LATAM | Scrum, LegalTech, HRTech, Fintech, Remote Teams, Cybersecurity.",
  openGraph: {
    title: "Wesley | LATAM BR | Agile Delivery",
    description:
      "Wesley Zilva — Agile Delivery Manager for Digital Projects | Nearshore LATAM | Scrum, LegalTech, HRTech, Fintech, Remote Teams, Cybersecurity.",
    url: "https://wesleyzilva.github.io/agile-delivery-manager",
  },
};

import TopMenu from "@/components/TopMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <TopMenu />
        <Sidebar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
