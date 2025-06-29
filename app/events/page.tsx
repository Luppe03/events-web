import { groq } from 'next-sanity'
import { sanityClient } from '../../sanityClient'
import Link from 'next/link'

const query = groq`
  *[_type == "event"] | order(date asc) {
    title,
    date,
    slug,
    location,
    "imageUrl": image.asset->url
  }
`

export default async function Events() {
  const events = await sanityClient.fetch(query)

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Kommande Events</h1>
      <ul>
        {events.map((event: any) => (
          <li key={event.slug.current} className="mb-8">
            <Link href={`/events/${event.slug.current}`} legacyBehavior>
              <a className="block border rounded-lg p-4 hover:shadow-lg transition">
                <h2 className="text-2xl font-semibold">{event.title}</h2>
                <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                <p className="italic">{event.location}</p>
                {event.imageUrl && (
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="mt-3 rounded"
                  />
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
