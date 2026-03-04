import Link from 'next/link'
import { DrupalTestimonial } from '@/lib/types'

interface TestimonialCardProps {
  item: DrupalTestimonial
}

export default function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group flex items-center justify-between py-6 border-b border-gray-200 transition-all duration-200 hover:pl-1"
    >
      <div className="flex items-baseline gap-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-500 transition-colors duration-200">
          {item.title}
        </h3>
        {(item as any).patientName && (
          <span className="text-sm text-gray-400">{(item as any).patientName}</span>
        )}
      </div>
      <span className="text-sm text-gray-400 shrink-0 ml-4">
        View
      </span>
    </Link>
  )
}
