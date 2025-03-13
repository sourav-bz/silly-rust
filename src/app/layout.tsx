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
      { url: "/icons/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/icons/icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icons/icon-96x96.png",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
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
