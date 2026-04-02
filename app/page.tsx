import { getClient } from '@/lib/drupal-client'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Brightside Dental - Modern Family Dentistry'
  const description = 'Modern dental care for the whole family. From routine cleanings to advanced cosmetic procedures, our experienced team helps you achieve a healthy, confident smile.'

  return {
    title,
    description,
    keywords: ['dental practice', 'family dentistry', 'teeth cleaning', 'dental implants', 'teeth whitening', 'Invisalign', 'cosmetic dentistry'],
    openGraph: {
      title: `${title} - Your Smile, Reimagined`,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Your Smile, Reimagined`,
      description,
    },
  }
}

export default async function Home() {
  const configStatus = checkConfiguration()
  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  try {
    const client = getClient()
    const data = await client.raw(GET_HOMEPAGE_DATA)
    const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

    if (!homepageContent) {
      const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
      return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
    }

    return <HomepageRenderer homepageContent={homepageContent} />
  } catch (error) {
    console.error('Error loading homepage:', error)
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }
}
