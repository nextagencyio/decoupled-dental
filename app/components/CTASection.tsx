'use client'

import Link from 'next/link'
import { Calendar, Phone } from 'lucide-react'
import { DrupalHomepage } from '@/lib/types'

interface CTASectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function CTASection({ homepageContent }: CTASectionProps) {
  const title = (homepageContent as any)?.ctaTitle || 'Ready for your best smile?'
  const primaryLabel = (homepageContent as any)?.ctaPrimary || 'Book Appointment'

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 md:py-28 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
          {title}
        </h2>
        <p className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Schedule your visit today and experience the difference that personalized, gentle dental care can make.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full text-base font-bold hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            {primaryLabel}
          </Link>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/25 transition-all duration-200 border border-white/30"
          >
            <Phone className="w-5 h-5" />
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  )
}
