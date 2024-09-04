import React from "react";
import styles from "./Homepage.module.css";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  backgroundColor: string;
  width?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageSrc,
  backgroundColor,
  width}) => {
  return (
    <div
      className={`${styles.categoryCard} ${
        styles[`categoryCard--${title.toLowerCase()}`]
      }`}
      style={{ backgroundColor, width }}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} category`}
        className={styles.categoryImage}
      />
      <div className={styles.categoryTitle}>{title}</div>
    </div>
  );
};

export default CategoryCard;
