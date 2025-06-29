import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import CoursesSection from "@/components/CoursesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import "bootstrap/dist/css/bootstrap.min.css";
import AlumniPage from "./alumni/page"






export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <HeroSection />
      <AboutSection />
   
  
      <CoursesSection />
      <TestimonialsSection />
      <AlumniPage/>
      <ContactSection />
      
      <Footer />
    </main>
  )
}

