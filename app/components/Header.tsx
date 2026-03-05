'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Phone } from 'lucide-react'

const navigationItems = [
  { name: 'Services', href: '/services' },
  { name: 'Providers', href: '/team' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('[class*="bg-amber-500"]') as HTMLElement | null
      setBannerHeight(banner ? banner.offsetHeight : 0)
    }
    updateBannerHeight()
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] })
    window.addEventListener('resize', updateBannerHeight)

    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateBannerHeight)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header
      className={clsx(
        'fixed left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/80 backdrop-blur-md'
      )}
      style={{ top: bannerHeight }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-primary-700 hover:text-primary-500 transition-colors duration-200">
            <span className="text-2xl">🦷</span>
            Brightside Dental
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-200',
                  activeTab === item.name
                    ? 'text-primary-600 border-b-2 border-primary-500 pb-1'
                    : 'text-gray-700 hover:text-primary-600'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Book Appointment
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-primary-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'text-sm font-medium py-2 px-3 rounded-lg transition-colors duration-200',
                    activeTab === item.name
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors duration-200 mt-2"
              >
                <Phone className="w-4 h-4" />
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
