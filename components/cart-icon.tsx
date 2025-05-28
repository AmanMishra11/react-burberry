"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import styles from "@/styles/cart-icon.module.css"

export function CartIcon() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.cartButton} ${isClicked ? styles.clicked : ""}`}
      title="View cart"
      aria-label="View cart"
    >
      <ShoppingCart className={styles.cartIcon} />
    </button>
  )
}
