"use client"
import { ShopButton } from "./shop-button";
import { useState, useEffect } from "react"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
import styles from "@/styles/auto-slider-banner.module.css"

const images = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section")
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={styles.bannerContainer}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.imageContainer} ${index === currentIndex ? styles.visible : styles.hidden}`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Banner ${index + 1}`}
            fill
            className={styles.bannerImage}
            priority
          />
        </div>
      ))}
      <div className={styles.overlay}>
        <h1 className={styles.title}>Burberry</h1>
        <h1 className={styles.title}>London</h1>
        <p className={styles.subtitle}>スタイルを高める</p>
        <div>
        <ShopButton onClick={handleShopClick}>SHOP</ShopButton>
        </div> 
      </div>
    </div>
  )
}
