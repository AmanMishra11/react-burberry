"use client"
import { ShopButton } from "./shop-button";
import Image from "next/image"
import { useState } from "react"
//import { Button } from "@/components/ui/button"
import styles from "@/styles/hoodie-card.module.css"

interface HoodieCardProps {
  name: string
  price: number
  image1: string
  image2: string
}

export function HoodieCard({ name, price, image1, image2 }: HoodieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? image2 : image1}
          alt={name}
          fill
          className={styles.productImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
        <ShopButton>SHOP</ShopButton>
      </div>
    </div>
  )
}
