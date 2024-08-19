import React from 'react'
import Hero from '../../components/HeroSeaction/Hero'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import FAQs from '../../components/FAQS/FAQS'
import ContactSection from '../../components/ContactSection/ContactSection'
import Testimonials from '../../components/Testimonials/Testimonials'
import Elearning from '../../components/Elearning/Elearning'

export default function Home() {
  return (
    <div>
     <Hero/>
     <ServiceSection/>
     <Elearning/>
     <ContactSection/>
     <FAQs/>
     <Testimonials/>


    </div>
  )
}
