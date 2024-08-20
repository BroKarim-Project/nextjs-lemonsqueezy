import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const TITLE = "Luncurkan.io | Open Source Nextjs SaaS Starterkits and Components";
const DESCRIPTION = "Launch your apps faster with our SaaS starterkits, components, building blocks. Customizable. Open Source";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luncurkan.io"),
  title: TITLE,
  description: DESCRIPTION,
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body className={`${fontSans.className} min-h-screen antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
