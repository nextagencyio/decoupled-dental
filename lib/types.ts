
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  duration?: string
  priceRange?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalProvider extends DrupalNode {
  body?: {
    processed: string
  }
  specialty?: string
  email?: string
  phone?: string
  photo?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
  education?: {
    processed: string
  }
}

export interface DrupalTestimonial extends DrupalNode {
  body?: {
    processed: string
  }
  patientName?: string
  serviceReceived?: string
  rating?: number
  photo?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  __typename?: string
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresTitle?: string
  featuresSubtitle?: string
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

export interface ServiceListData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

export interface ProviderListData {
  nodeProviders: {
    nodes: DrupalProvider[]
  }
}

export interface TestimonialListData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}

export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
