'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Your smile, reimagined'
  const subtitle = (homepageContent as any)?.heroSubtitle || 'Comprehensive dental care for the whole family'
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80&fit=crop"
          alt="Modern dental office with state-of-the-art equipment"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/75 to-primary-800/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            Now accepting new patients
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-primary-100 mt-4 max-w-xl leading-relaxed">{subtitle}</p>
          )}
          {description && !subtitle && (
            <div className="text-lg sm:text-xl text-primary-100 mt-4 max-w-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/25 transition-all duration-200 border border-white/30"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 30V80H0Z" fill="#f8fbff" />
        </svg>
      </div>
    </section>
  )
}
