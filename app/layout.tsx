import type { Metadata, Viewport } from "next";
import "./globals.css";
import { OnboardingModal } from "@/components/onboarding-modal";

export const metadata: Metadata = {
  title: "Yurtdışı Göç Rehberi | Size Özel Ülke Önerileri",
  description: "Yurtdışına göç etmek istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz? Size en uygun ülkeleri bulun, gerçekçi maliyetleri öğrenin ve adım adım kılavuzunuzu alın.",
  keywords: ["yurtdışı göç", "göç danışmanlığı", "vize", "ülke önerileri", "yurtdışı yaşam", "çalışma vizesi", "öğrenci vizesi"],
  authors: [{ name: "Göç Rehberi" }],
  creator: "Göç Rehberi",
  publisher: "Göç Rehberi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yurtdisi-goc-rehberi.vercel.app",
    title: "Yurtdışı Göç Rehberi | Size Özel Ülke Önerileri",
    description: "Yurtdışına göç etmek istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz? Size en uygun ülkeleri bulun, gerçekçi maliyetleri öğrenin ve adım adım kılavuzunuzu alın.",
    siteName: "Yurtdışı Göç Rehberi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yurtdışı Göç Rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yurtdışı Göç Rehberi | Size Özel Ülke Önerileri",
    description: "Yurtdışına göç etmek istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz? Size en uygun ülkeleri bulun.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://yurtdisi-goc-rehberi.vercel.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="font-sans antialiased">
        {children}
        <OnboardingModal />
      </body>
    </html>
  );
}
