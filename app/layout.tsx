import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"
import { CustomCursor } from "@/components/custom-cursor"
import styles from "@/styles/layout.module.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Burberry London - Premium Hoodies",
  description: "Premium streetwear and comfortable hoodies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <SplashScreen />
        <div className={styles.logoFixed}>
          <Logo />
        </div>
        {children}
        <footer className={styles.footer}>
          <div className={`container ${styles.footerContent}`}>
            <p>&copy; 2025 BURBERRY. All rights reserved.</p>
          </div>
        </footer>
        <CustomCursor />
      </body>
    </html>
  )
}
