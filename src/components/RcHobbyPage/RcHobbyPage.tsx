import React from "react";
import styles from "./RcHobbyPage.module.css";
import ProductCard from "../ProductCard";

interface Product {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    name: "Self-balancing Robot",
    price: "NOK 999",
    description: "Two wheels; App and motion controlled",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/87da82328739b304dc43ca99cb3d09c44fa587b07d050de08e8a69e5333ac762?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
  },
  {
    name: "Star Wars R2-D2",
    price: "NOK 299",
    description: "Projector Clock with sounds",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c43bd0ea533bfffa4ff5db2b4030a4813a78820d9a362e7682a62694b5119c5c?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
  },
  {
    name: "RC-Tiger tank",
    price: "NOK 3299",
    description: "Torro, metal, shoots plastic bullets approx. 25 meters (BB)",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ba0bf0e760686faa68bb3aafc57edb132269051977763ace167b0b1603f12bda?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
  },
];

const RcHobbyPage: React.FC = () => {
  return (
    <main className={styles.page}>
      <section className={styles.pageHeading}>
        <h1 className={styles.headingText}>RC & Hobby</h1>
        <hr className={styles.divider} />
      </section>
      <section className={styles.productGrid}>
        <div className={styles.productRow}>
          {products.map((product, index) => (
            <div key={index} className={styles.productColumn}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RcHobbyPage;
