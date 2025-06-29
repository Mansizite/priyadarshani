"use client"

import { useEffect, useRef } from "react"
import Image from "next/image";
import styles from "@/styles/courses-section.module.css"
const courses = [
  {
    id: 1,
    title: "Science (Physics, Chemistry, Biology)",
    description:
      "Dive into the world of science with in-depth knowledge in Physics, Chemistry, and Biology.",
    image: "/programs/IMG-20250629-WA0011.jpg",
    color: "blue",
  },
  {
    id: 2,
    title: "Mathematics (School Level)",
    description:
      "Strengthen problem-solving skills and build a strong foundation in algebra, geometry, and calculus.",
    image: "/programs/IMG-20250629-WA0012.jpg",
    color: "cyan",
  },
  {
    id: 3,
    title: "Commerce",
    description:
      "Learn the essentials of business, economics, accounting, and finance.",
    image: "/programs/IMG-20250629-WA0013.jpg",
    color: "green",
  },
  {
    id: 4,
    title: "Humanities (History, Geography, Political Science)",
    description:
      "Study history, human geography, and global political systems.",
    image: "/programs/IMG-20250629-WA0014.jpg",
    color: "amber",
  },
  {
    id: 5,
    title: "Languages (English, Hindi, French, etc.)",
    description:
      "Enhance communication in English, Hindi, and foreign languages.",
    image: "/programs/IMG-20250629-WA0015.jpg",
    color: "red",
  },
  {
    id: 6,
    title: "Computer Science",
    description:
      "Learn programming, web development, and digital literacy.",
    image: "/programs/IMG-20250629-WA0016.jpg",
    color: "purple",
  },
 
];




export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (

<section id="courses" className={styles.coursesSection} ref={sectionRef}>
  <div className={styles.container}>
    <h2 className={styles.title}>Our Academic Programs</h2>
    <p className={styles.subtitle}>
      Discover our diverse range of programs designed to nurture every student's unique talents and interests
    </p>

    <div className={styles.courseGrid}>
      {courses.map((course, index) => (
        <div
          key={course.id}
          className={`${styles.courseCard} ${styles[`color${course.color}`]}`}
          ref={(el) => (cardsRef.current[index] = el)}
        >
          <div className={styles.courseIcon}>
            <Image
              src={course.image}
              alt={course.title}
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}

