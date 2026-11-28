import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anniket Prajapati | Unity Developer — XR, Gameplay Systems & 3D",
  description:
    "Unity developer with 35+ delivered client projects and 29 publicly showcased builds across VR, hyper-casual mobile and 3D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
