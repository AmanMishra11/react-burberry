"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "@/styles/splash-screen.module.css"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => setIsComplete(true), 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  return (
    <div className={`${styles.splashContainer} ${isComplete ? styles.hidden : styles.visible}`}>
      <div className={styles.logoContainer}>
        <Image
          src="/b-logo.png"
          alt="BURBERRY LONDON"
          fill
          className={styles.logoImage}
          priority
        />
      </div>

      <div className={styles.matrixText}>{`LOADING_SYSTEM: ${matrixText}`}</div>

      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.progressText}>{`${progress}%`}</div>
    </div>
  )
}
