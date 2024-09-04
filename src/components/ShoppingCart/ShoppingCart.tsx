/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ShoppingCart.module.css";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const ShoppingCart: React.FC = () => {
  const cartItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bd46457a7d1097f4f18d06a5684f688f92acaa2c7f2c63eb03729e5276655543?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      name: "Willy el-Jeep",
      price: "kr 5998,-",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2def2f83a5fcb6ba951205ffd0f47ebb8825e1aa6c918246069a582333392c94?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      name: "Self-balancing Robot",
      price: "kr 999,-",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f253946b5491553fe77685683e3b362248e95781368b522160b9e442f63aebed?placeholderIfAbsent=true&apiKey=e2809fcf8a8249a5a890320535b1076d",
      name: "H3 Tritrium Watch Navy Seal",
      price: "kr 1998,-",
    },
  ];

  return (
    <main className={styles.shoppingCart}>
      <section className={styles.pageHeading}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.basketTitle}>Basket</h1>
          <span className={styles.itemCount}>3 items</span>
        </div>
        <hr className={styles.divider} />
      </section>
      <div className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentColumns}>
            <div className={styles.leftColumn}>
              <div className={styles.cartItems}>
                {cartItems.map((item, index) => (
                  <CartItem key={index} {...item} />
                ))}
              </div>
            </div>
            <div className={styles.rightColumn}>
              <OrderSummary
                subtotal="kr 8995,-"
                shipping="kr 0,-"
                tax="kr 90,-"
                total="kr 9085,-"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
