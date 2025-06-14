
import { client } from '../lib/client'
import Image from 'next/image'

async function getData() {
  const query = `*[_type == "home"][0]{title, subtitle, "heroImage": heroImage.asset->url}`
  return await client.fetch(query)
}

export default async function Home() {
  const data = await getData()

  if (!data) {
    return (
      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>Inget innehåll hittades</h1>
        <p>Publicera ett "Home"-dokument i Sanity först.</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 900, margin: '2rem auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{data.title}</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
        {data.subtitle}
      </p>

      {data.heroImage && (
        <Image
          src={data.heroImage}
          alt="Hero image"
          width={800}
          height={500}
          style={{ margin: '0 auto', borderRadius: '10px' }}
        />
      )}
    </main>
  )
}
