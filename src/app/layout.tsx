import "./global.css";
import { satoshi, fraunces } from "./fonts";
import SideBar from "@/components/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silly Rust - Learn Rust and Bevy",
  description:
    "Documenting my journey of learning Rust and Bevy game engine. Insightful articles about game development, ECS architecture, and Rust programming.",
  keywords: "Rust, Bevy, game development, ECS, programming, tutorials",
  authors: [{ name: "Sourav" }],
  creator: "Sourav",
  publisher: "Silly Rust",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sillyrust.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sillyrust.com",
    siteName: "Silly Rust",
    title: "Silly Rust - Learn Rust and Bevy",
    description:
      "Documenting my journey of learning Rust and Bevy game engine. Insightful articles about game development, ECS architecture, and Rust programming.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silly Rust - Learn Rust and Bevy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silly Rust - Learn Rust and Bevy",
    description:
      "Documenting my journey of learning Rust and Bevy game engine. Insightful articles about game development, ECS architecture, and Rust programming.",
    creator: "@sourav_bz",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Silly Rust",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.className} ${fraunces.className} h-full`}
    >
      <body className="h-full">
        <div className="h-screen bg-[#fff] flex overflow-hidden">
          {/* Sidebar */}
          <SideBar />
          {/* Main content */}
          <main className="ml-4 w-full overflow-y-auto">
            <div className="mx-auto py-12 pr-24 pl-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
