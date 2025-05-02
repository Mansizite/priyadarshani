import React from "react";
import styles from "@/styles/parents.module.css"; // Make sure you create the correct CSS file
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Parents</h1>

        {/* Text Content for Parents */}
        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Parents are the first and most important mentors who shape the future of their children. The values, character, and ideals children adopt largely come from the examples set by their parents. When parents lead by example, their children will naturally follow and grow into pillars of integrity and responsibility, making a positive impact on society.
          </p>
          <p className={styles.paragraph}>
            The role of parents in influencing their children's minds is immense. They are the primary architects of their children's personalities and behaviors. The way children perceive the world and interact with it is directly shaped by the guidance and discipline they receive at home.
          </p>
          <p className={styles.paragraph}>
            It is essential that parents do not overindulge their children with too much freedom out of love. While affection is necessary, excessive leniency can lead children astray, weakening their ability to make responsible choices.
          </p>
          <p className={styles.paragraph}>
            The father and mother must work hand in hand to reinforce the values taught at school, ensuring that the teachings from both home and school complement one another. In doing so, they build a strong foundation of discipline, respect, and moral character that will serve their children well in life.
          </p>
        </div>

        {/* Single Final Image */}
        <div className={styles.imageWrapper}>
          <img src="/parents.jpg" alt="Parents guiding children" className={styles.image} />
        </div>
      </div>
      <Footer />
    </>
  );
}
