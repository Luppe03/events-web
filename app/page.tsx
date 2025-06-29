import { sanityClient } from '../sanityClient'
import Image from 'next/image'

async function getData() {
  const query = `*[_type == "home"][0]{title, subtitle, "heroImage": heroImage.asset->url}`
  return await sanityClient.fetch(query)
}

export default async function Home() {
  const data = await getData()

  if (!data) {
    return (
      <main className="text-center mt-20">
        <h1>Inget innehåll hittades</h1>
        <p>Publicera ett "Home"-dokument i Sanity först.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{data.subtitle}</p>

      {data.heroImage && (
        <Image
          src={data.heroImage}
          alt="Hero image"
          width={800}
          height={500}
          className="mx-auto rounded-lg"
        />
      )}
    </main>
  )
}
