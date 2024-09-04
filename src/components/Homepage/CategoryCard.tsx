import React from "react";
import styles from "./Homepage.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  backgroundColor: string;
  width?: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageSrc,
  backgroundColor,
  width,
  link,}) => {
  return (
    <Link to={`/${link}`} style={{ color: 'inherit' ,textDecoration: 'none'}}>
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
    </Link>
  );
};

export default CategoryCard;
