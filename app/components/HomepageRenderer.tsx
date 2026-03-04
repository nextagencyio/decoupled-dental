'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import Image from 'next/image'
import Link from 'next/link'
import { Smile, Heart, Shield, Clock, Star, Stethoscope } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const services = [
  { title: 'General Dentistry', description: 'Routine exams, cleanings, and preventive care', href: '/services' },
  { title: 'Cosmetic Dentistry', description: 'Whitening, veneers, and smile makeovers', href: '/services' },
  { title: 'Orthodontics', description: 'Invisalign and braces for all ages', href: '/services' },
  { title: 'Restorative Care', description: 'Implants, crowns, and bridges', href: '/services' },
]

const icons = [
  { icon: Smile, label: 'Gentle Care' },
  { icon: Heart, label: 'Patient First' },
  { icon: Shield, label: 'Safe & Clean' },
  { icon: Clock, label: 'On Time' },
  { icon: Star, label: 'Top Rated' },
  { icon: Stethoscope, label: 'Expert Team' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&fit=crop', alt: 'Modern dental office interior' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80&fit=crop', alt: 'Smiling patient after dental treatment' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80&fit=crop', alt: 'Professional dental instruments' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80&fit=crop', alt: 'Dental team at work' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Services - List View */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-sm font-medium tracking-widest text-gray-400 uppercase mb-8">Services</h2>
          <div className="border-t border-gray-200">
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="group flex items-center justify-between py-6 border-b border-gray-200 transition-all duration-200 hover:pl-1"
              >
                <div className="flex items-baseline gap-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-500 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <span className="text-sm text-gray-400 hidden sm:inline">{service.description}</span>
                </div>
                <span className="text-sm text-gray-400 shrink-0 ml-4">
                  View
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-sm font-medium tracking-widest text-gray-400 uppercase mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {icons.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <item.icon className="w-6 h-6 text-primary-500 mb-3" strokeWidth={1.5} />
                <span className="text-xs text-gray-500 tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-sm font-medium tracking-widest text-gray-400 uppercase mb-8">Our Practice</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Clearview Dental
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/services" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/team" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Providers</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
