import Link from "next/link"

interface PostParams {
  params: {
    slug: string
  }
}

export default function Post({ params }: PostParams) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Post: {params.slug}</h1>
      <div className="prose">
        <p>This is the content for post {params.slug}</p>
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Blog Home
      </Link>
    </div>
  )
}

// Add generateStaticParams to pre-render these routes at build time
export async function generateStaticParams() {
  // Define which posts exist
  const posts = ['post-1', 'post-2']
  
  return posts.map((slug) => ({
    slug,
  }))
} 