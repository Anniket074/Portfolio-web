import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anniket | Game Developer Portfolio",
  description: "A showcase of VR, 2D and 3D projects by Anniket",
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
