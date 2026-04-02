// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

export const GET_SERVICE_TEASERS = gql`
  query GetServiceTeasers($first: Int = 10) {
    nodeServices(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeService {
          body { processed summary }
          duration
          priceRange
          image {
            url alt width height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
          }
        }
      }
    }
  }
`

export const GET_PROVIDER_TEASERS = gql`
  query GetProviderTeasers($first: Int = 10) {
    nodeProviders(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeProvider {
          body { processed }
          specialty
          email
          phone
          photo {
            url alt width height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
          }
          education { processed }
        }
      }
    }
  }
`

export const GET_TESTIMONIAL_TEASERS = gql`
  query GetTestimonialTeasers($first: Int = 10) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        changed { timestamp }
        ... on NodeTestimonial {
          body { processed }
          patientName
          serviceReceived
          rating
          photo {
            url alt width height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed }
        featuresTitle
        featuresSubtitle
        featuresItems {
          ... on ParagraphFeatureItem {
            id
            title
            description { processed }
            icon
          }
        }
        ctaTitle
        ctaDescription { processed }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id title
            body { processed }
          }
          ... on NodeService {
            id title
            body { processed }
            duration
            priceRange
            image {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
            }
          }
          ... on NodeProvider {
            id title
            body { processed }
            specialty email phone
            photo {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
            }
            education { processed }
          }
          ... on NodeTestimonial {
            id title
            body { processed }
            patientName
            serviceReceived
            rating
            photo {
              url alt width height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height }
            }
          }
          ... on NodeHomepage {
            __typename
            id title path
            heroTitle heroSubtitle
            heroDescription { processed }
            featuresTitle featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id title
                description { processed }
                icon
              }
            }
            ctaTitle
            ctaDescription { processed }
            ctaPrimary ctaSecondary
          }
        }
      }
    }
  }
`
