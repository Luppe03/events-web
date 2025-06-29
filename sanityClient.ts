import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: 'l5sjfic4',
  dataset: 'production',
  apiVersion: '2023-06-01',
  useCdn: false,
})
