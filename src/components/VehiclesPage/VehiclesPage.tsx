import React from "react";
import styles from "./VehiclesPage.module.css";
import ProductCard from "../ProductCard";

interface Product {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
}

const products: Product[] = [
  {
    name: "Willy el-Jeep",
    price: "NOK 5998",
    description: "el-bil 4WD 3-seters 12V Willy",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8f00deca0dcc4b912ab838ac8822438ac23558311a7be24a80ddc53dbe31872b?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
  },
  {
    name: "Land Rover Defender",
    price: "NOK 4398",
    description:
      "4WD Land Rover Defender, med 2 seter, Gummihjul og Skinnseter",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d3ac416214cab6cc0b741d50092c748e0787da3abeddda48de92d2444222cddd?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
  },
];

const VehiclesPage: React.FC = () => {
  return (
    <main className={styles.vehiclesPage}>
      <section className={styles.pageHeading}>
        <h1 className={styles.headingText}>Vehicles</h1>
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

export default VehiclesPage;
