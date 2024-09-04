import React from "react";
import styles from "./Homepage.module.css";
import CategoryCard from "./CategoryCard";

const Homepage: React.FC = () => {
  const categories = [
    {
      title: "Vehicles",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d0bbcc31dea0b1b2a5da76822b1757cdba0842202c32633ae3d52a860b5c7c75?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      backgroundColor: "#3ca30b",
    },
    {
      title: "Tools",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c540e112c6fc7f30c7dc22c105b6f3a6f29f2f7057d532b18749dcff17d3da04?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      backgroundColor: "#e2d908",
    },
    {
      title: "RC & Hobby",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/22565ccee65bc7e72242fab5fdc0fad4979b1c9e02c4673aa92c7a8f46329dd9?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      backgroundColor: "#d9d9d9",
      width:'50%'
    },
  ];

  return (
    <main className={styles.homepage}>
    <section className={styles.mainContent}>
      <div className={styles.categoryGrid}>
        {categories.slice(0, 2).map((category) => (
          <div key={category.title} className={styles.categoryColumn}>
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </section>

      <CategoryCard {...categories[2]}/>

      <p className={styles.disclaimer}>
        We accept your old , small electronics and model hobby products ( EE
        waste ) free of charge. We accept similar products to those we sell
        ourselves. You can send the products to us, <br />
        Remember! Small electronics , etc. ,must not be collected together with
        normal residual waste.
      </p>

      <footer className={styles.footer}>
        <h2 className={styles.footerTitle}>Contracts</h2>
        <address className={styles.footerAddress}>
          <span className={styles.highlight}>Office address :</span> Frithjof
          Arngren , Arngren Sky Commuter AS , Sondreveien 3k (Smestad), 0378
          Oslo .
        </address>
        <div className={styles.footerContact}>
          <span className={styles.highlight}>Tel. : </span>22 14 91 66{" "}
          <span className={styles.highlight}>Mobile :</span> 92 06 08 73{" "}
          <span className={styles.highlight}>Email :</span>{" "}
          <a href="mailto:frithjof@arngren.net" target="_blank" rel="noopener noreferrer">
            frithjof@arngren.net
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;
