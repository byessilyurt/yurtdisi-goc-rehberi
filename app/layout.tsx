import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OnboardingModal } from "@/components/onboarding-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yurtdışı Göç Rehberi | Size Özel Ülke Önerileri",
  description: "Yurtdışına göç etmek istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz? Size en uygun ülkeleri bulun, gerçekçi maliyetleri öğrenin ve adım adım kılavuzunuzu alın.",
  keywords: "yurtdışı göç, göç danışmanlığı, vize, ülke önerileri, yurtdışı yaşam, çalışma vizesi, öğrenci vizesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <OnboardingModal />
      </body>
    </html>
  );
}
