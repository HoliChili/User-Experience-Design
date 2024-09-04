
import * as React from "react";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  name,
  price,
  description,
}) => (
  <article className={styles.productCard}>
    <img
      loading="lazy"
      src={imageSrc}
      className={styles.productImage}
    />
    <div className={styles.productDetails}>
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productPrice}>{price}</p>
      <p className={styles.productDescription}>{description}</p>
    </div>
  </article>
);

export default ProductCard;
