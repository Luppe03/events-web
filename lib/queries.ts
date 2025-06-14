export const homeQuery = `*[_type == "home"][0]{
  title,
  subtitle,
  heroImage {
    asset->{
      _id,
      url
    }
  }
}`


export const eventsQuery = `*[_type == "event"] | order(date asc) {
  _id,
  title,
  slug,
  description,
  date,
  location,
  "imageUrl": image.asset->url
}`

export const eventBySlugQuery = (slug: string) => `*[_type == "event" && slug.current == "${slug}"][0]{
  _id,
  title,
  description,
  date,
  location,
  "imageUrl": image.asset->url
}`
