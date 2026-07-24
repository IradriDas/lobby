import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toast"

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOBBY",
  description: "Video Calling App",
  icons: {
    icon: '/icons/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <ClerkProvider
        appearance={{
          options: {
            logoImageUrl: "/icons/lobby-logo.svg",
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorForeground: "#fff",
            colorPrimary: '#0E78F9',
            colorBackground: '#1C1F2E',
            colorInput: '#252a41',
            colorInputForeground: '#fff',
          },
          elements: {
            logoBox: 'h-28 w-auto flex justify-center items-center',
            logoImage: 'h-28 w-auto object-contain'
          }
        }}>
        <body className={`${inter.className} bg-[#1c1f2e]`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
