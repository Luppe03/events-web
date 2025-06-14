import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'l5sjfic4',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
