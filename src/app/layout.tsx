import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Light Saas Landing Page",
  description: "A Light Mode Saas Landing Page Template for Portfolio",
  authors: [{ name: "Muhammad Saad Anjum" }],
  keywords: ["light", "saas", "landing", "page", "template"],
  openGraph: {
    title: "Light Saas Landing Page",
    description: "A Light Mode Saas Landing Page Template for Portfolio",
    url: "https://light-saas-landing-page.vercel.app/",
    siteName: "Light Saas Landing Page",
  },
  applicationName: "Light Saas Landing Page",
  publisher: "Muhammad Saad Anjum",
  creator: "Muhammad Saad Anjum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
