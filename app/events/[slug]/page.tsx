import { client } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const query = groq`*[_type == "event" && defined(slug.current)][].slug.current`
  const slugs: string[] = await client.fetch(query)

  return slugs.map((slug) => ({ slug }))
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const query = groq`
    *[_type == "event" && slug.current == $slug][0]{
      name,
      date,
      description
    }
  `
  const event = await client.fetch(query, { slug: params.slug })

  if (!event) return notFound()

  return (
    <main style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{event.name}</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p>{event.description}</p>
    </main>
  )
}
