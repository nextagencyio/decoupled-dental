'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import Image from 'next/image'
import Link from 'next/link'
import { Smile, Heart, Shield, Clock, Star, Stethoscope, ArrowRight } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const services = [
  { title: 'General Dentistry', description: 'Routine exams, cleanings, and preventive care to keep your teeth healthy.', href: '/services', icon: Stethoscope },
  { title: 'Cosmetic Dentistry', description: 'Whitening, veneers, and smile makeovers for a confident smile.', href: '/services', icon: Star },
  { title: 'Orthodontics', description: 'Invisalign and braces for patients of all ages.', href: '/services', icon: Smile },
  { title: 'Restorative Care', description: 'Implants, crowns, and bridges to restore your smile.', href: '/services', icon: Shield },
]

const icons = [
  { icon: Smile, label: 'Gentle Care', description: 'Comfortable, anxiety-free experience' },
  { icon: Heart, label: 'Patient First', description: 'Your wellbeing is our priority' },
  { icon: Shield, label: 'Safe & Clean', description: 'Highest sterilization standards' },
  { icon: Clock, label: 'On Time', description: 'We respect your schedule' },
  { icon: Star, label: 'Top Rated', description: '5-star patient reviews' },
  { icon: Stethoscope, label: 'Expert Team', description: 'Board-certified specialists' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&fit=crop', alt: 'Modern dental office interior' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&fit=crop', alt: 'Smiling patient after dental treatment' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80&fit=crop', alt: 'Professional dental instruments' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&fit=crop', alt: 'Dental team at work' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Services - Card Grid */}
      <section className="bg-[#f8fbff] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Dental Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive care using the latest technology and techniques, all in a comfortable environment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose Brightside Dental</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">We combine advanced technology with a gentle, personalized approach to dental care.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {icons.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-bold text-gray-900 mb-1">{item.label}</span>
                <span className="text-xs text-gray-500 leading-snug">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-primary-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Practice</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">A welcoming, state-of-the-art environment designed for your comfort.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow-md group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-primary-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-heading text-xl font-bold text-white mb-4">
                <span className="text-2xl">🦷</span>
                Brightside Dental
              </div>
              <p className="text-primary-300 text-sm leading-relaxed">
                Providing comprehensive dental care with a gentle touch. Your smile is our passion.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/services" className="text-sm text-primary-300 hover:text-white transition-colors">Services</Link>
                <Link href="/team" className="text-sm text-primary-300 hover:text-white transition-colors">Providers</Link>
                <Link href="/testimonials" className="text-sm text-primary-300 hover:text-white transition-colors">Testimonials</Link>
                <Link href="/contact" className="text-sm text-primary-300 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="flex flex-col space-y-2 text-sm text-primary-300">
                <span>123 Smile Avenue</span>
                <span>Sunnyville, CA 90210</span>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
                <a href="mailto:hello@brightsidedental.com" className="hover:text-white transition-colors">hello@brightsidedental.com</a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-800 pt-8">
            <p className="text-sm text-primary-400 text-center">
              &copy; {new Date().getFullYear()} Brightside Dental. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
