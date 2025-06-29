import { groq } from 'next-sanity'
import { sanityClient } from '../../../sanityClient'

const query = groq`
  *[_type == "event" && slug.current == $slug][0]{
    title,
    description,
    date,
    location,
    "imageUrl": image.asset->url
  }
`

interface Props {
  params: {
    slug: string
  }
}

export default async function EventDetail({ params }: Props) {
  const event = await sanityClient.fetch(query, { slug: params.slug })

  if (!event) {
    return <p>Event hittades inte</p>
  }

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
      <p className="italic mb-4">Plats: {event.location}</p>
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full max-w-xl rounded mb-6"
        />
      )}
      {/* Om description är rich text (array av block) behövs en konvertering. 
          Här förutsätter vi att det är ren HTML. */}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: event.description }} />
    </main>
  )
}
