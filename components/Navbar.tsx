// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image"; // Import Next.js Image component
// import { Menu, ChevronDown } from "lucide-react"; // Removed BookOpen icon
// import styles from "@/styles/navbar.module.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [aboutDropdown, setAboutDropdown] = useState(false);
//   const [mpdDropdown, setMpdDropdown] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
//       <div className={styles.container}>
//         <div className={styles.leftSection}>
//           <div className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
//             <Menu size={24} />
//           </div>
//           <Link href="/" className={styles.logo}>
//             {/* Logo Image */}
//             <Image src="/priyadarshani-logo.jpg" alt="Priyadarshani School Logo" width={50} height={50} className={styles.logoImage} />
//             <span className={styles.logoText}>
//               Priyadarshani
//             </span>
//           </Link>
//         </div>

//         <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//           <li>
//          <Link href='/mpd'>
//          MPD
//          </Link>
           
           
//           </li>

//           <li><Link href="#home" onClick={() => setIsOpen(false)}>Home</Link></li>

//           <li className={styles.dropdown}>
//             <span onClick={() => setAboutDropdown(!aboutDropdown)} className={styles.dropdownToggle}>
//               ABOUT <ChevronDown size={16} />
//             </span>
//             <ul className={`${styles.dropdownWrapper} ${aboutDropdown ? styles.active : ""}`}>
//               <li><Link href="#about" onClick={() => setAboutDropdown(false)}>About Our School</Link></li>
//               <li><Link href="#why-choose-us" onClick={() => setAboutDropdown(false)}>Why Choose Us</Link></li>
//               <li><Link href="/vissionMission" onClick={() => setAboutDropdown(false)}>Vision & Mission</Link></li>
//               <li><Link href="/historyOfPriyadarshani" onClick={() => setAboutDropdown(false)}>History Of Priyadarshani</Link></li>
//               <li><Link href="/teachers" onClick={() => setAboutDropdown(false)}>Teachers</Link></li>
//               <li><Link href="/parents" onClick={() => setAboutDropdown(false)}>Parents</Link></li>
//               <li><Link href="/children" onClick={() => setAboutDropdown(false)}>Children</Link></li>
//             </ul>
//           </li>

//           <li><Link href="#courses" onClick={() => setIsOpen(false)}>Academics</Link></li>
//           <li><Link href="#testimonials" onClick={() => setIsOpen(false)}>Students</Link></li>
//           <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
         
//           <li><Link href="#contact" onClick={() => setIsOpen(false)}>Admissions</Link></li>
//           <li><Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
         
//         </ul>

//         <div className={`${styles.actionButtons} ${isOpen ? styles.active : ""}`}>
//           <Link href="/register" className={styles.registerButton}>Apply Now</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setAboutDropdown(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
       
        <div className={styles.leftSection}>
  <div
    className={styles.mobileMenuButton}
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </div>
</div>

<div className={styles.centerLogo}>
  <Link href="/" className={styles.logo}>
    <Image
      src="/priyadarshani-logo.jpg"
      alt="Priyadarshani School Logo"
      width={50}
      height={50}
      className={styles.logoImage}
    />
    <span className={styles.logoText}>Priyadarshani</span>
  </Link>
</div>


        {/* Middle: Nav Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          
          <li>
            <Link href="#home" onClick={closeMenus}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/mpd" onClick={closeMenus}>
              Mandatory Public Disclosure
            </Link>
          </li>


          <li className={styles.dropdown}>
            <span
              onClick={() => setAboutDropdown(!aboutDropdown)}
              className={styles.dropdownToggle}
            >
              ABOUT <ChevronDown size={16} />
            </span>
            <ul
              className={`${styles.dropdownWrapper} ${
                aboutDropdown ? styles.active : ""
              }`}
            >
              <li>
                <Link href="#about" onClick={closeMenus}>
                  About Our School
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" onClick={closeMenus}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/vissionmission" onClick={closeMenus}>
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/historyOfPriyadarshani" onClick={closeMenus}>
                  History Of Priyadarshani
                </Link>
              </li>
              <li>
                <Link href="/teachers" onClick={closeMenus}>
                  Teachers
                </Link>
              </li>
              <li>
                <Link href="/parents" onClick={closeMenus}>
                  Parents
                </Link>
              </li>
              <li>
                <Link href="/children" onClick={closeMenus}>
                  Children
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="#courses" onClick={closeMenus}>
              Academics
            </Link>
          </li>
          <li>
            <Link href="#testimonials" onClick={closeMenus}>
              Students
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={closeMenus}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenus}>
              Admissions
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={closeMenus}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Apply Now Button */}
        <div className={`${styles.actionButtons} ${isOpen ? styles.active : ""}`}>
          <Link href="/register" className={styles.registerButton}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
