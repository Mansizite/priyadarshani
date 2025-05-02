import React from "react";
import styles from "@/styles/teachers.module.css"; // Ensure this path is correct
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Header with Underline Animation */}
        <h1 className={styles.heading}>Teachers</h1>

        {/* Content Paragraphs */}
        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            Human values cannot be learnt from lectures or textbooks. Our teachers seek to impart values to students by practicing them first and setting an example.
          </p>
          <p className={styles.paragraph}>
            Their hearts are filled with love, and they lead the children under their care along the ideal path. They are ready to sacrifice everything for the sake of the pure-hearted children who rely on them for guidance.
          </p>
          <p className={styles.paragraph}>
            Our teachers teach love to students only through love. If a pupil has a vice, they alone suffer. But if a teacher has a vice, thousands are affected.
          </p>
          <p className={styles.paragraph}>
            Teachers can achieve any high ideal, provided they are cooperative, well-disciplined, and committed to service, sacrifice, and success.
          </p>
          <p className={styles.paragraph}>
            Our teachers are not bound by working hours. They stay back when needed to clear doubts and help students complete their assignments—because they see it as their duty.
          </p>
          <p className={styles.paragraph}>
            If teachers fulfill their roles with dedication, they can transform the nation. All student misconduct stems from poor guidance by both parents and teachers.
          </p>
        </div>

        {/* Single Final Image */}
        <div className={styles.imageWrapper}>
          <img src="/s1.jpg" alt="Teachers working together" className={styles.image} />
        </div>
      </div>
      <Footer />
    </>
  );
}
