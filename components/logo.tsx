import Image from "next/image"
import styles from "@/styles/logo.module.css"

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image
        //src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sdfm-gDlxg0zxe6wVV9o5cISteykVa4LQhz.png"
        //src="https://banner2.cleanpng.com/20180702/txo/aax0m89wo.webp"
        src="/b-logo.png"
        alt="SDFM 2520"
        fill
        className={styles.logoImage}
        priority
      />
    </div>
  )
}
