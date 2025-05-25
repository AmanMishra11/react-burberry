import { HoodieCard } from "@/components/hoodie-card"
import { AutoSliderBanner } from "@/components/auto-slider-banner"
import styles from "@/styles/page.module.css"

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "SDFM Classic Black",
      price: 149.99,
      image1: "https://assets.burberry.com/is/image/Burberryltd/1C09D316-7A71-472C-8877-91CEFBDB268A?$BBY_V3_SL_1$&wid=1500&hei=1500",
      image2: "https://assets.burberry.com/is/image/Burberryltd/A6818455-9172-4DC0-9847-9FF8C313CF90?$BBY_V3_ML_1$&wid=1500&hei=1500",
    },
    {
      id: 2,
      name: "SDFM Premium Gray",
      price: 154.99,
      image1: "https://assets.burberry.com/is/image/Burberryltd/3C0B6B97-BE06-44E9-A4B6-DC4D39681F14?$BBY_V3_SL_1$&wid=1500&hei=1500",
      image2: "https://assets.burberry.com/is/image/Burberryltd/B433FA8B-3CC1-45BA-BB09-D4A95271B720?$BBY_V3_ML_1$&wid=1500&hei=1500",
    },
    {
      id: 3,
      name: "SDFM Signature Navy",
      price: 159.99,
      image1: "https://assets.burberry.com/is/image/Burberryltd/9B3B1C45-BEC6-4D54-BCEF-E48AA7BCFDD0?$BBY_V3_SL_1$&wid=1500&hei=1500",
      image2: "https://assets.burberry.com/is/image/Burberryltd/4215EB1C-C980-46C8-8AF5-70336E9F508B?$BBY_V3_ML_1$&wid=1500&hei=1500",
    },
    {
      id: 4,
      name: "SDFM Limited Edition",
      price: 199.99,
      image1: "https://assets.burberry.com/is/image/Burberryltd/8DD303A6-E50B-4CDE-AA2B-8B25BC77AE47?$BBY_V3_SL_1$&wid=1500&hei=1500",
      image2: "https://assets.burberry.com/is/image/Burberryltd/C276BAA2-D8F5-4E11-8BD8-4E0FE1EABDF1?$BBY_V3_ML_1$&wid=1500&hei=1500",
    },
  ]

  return (
    <main className={styles.main}>
      <AutoSliderBanner />

      <section id="product-section" className={styles.productSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Latest Collection</h2>
          <div className={styles.productGrid}>
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
