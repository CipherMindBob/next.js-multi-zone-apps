import Link from "next/link"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post: {params.slug}</h1>
      <p className="mb-4">This is the content of the blog post.</p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Back to Blog Home
      </Link>
    </div>
  )
}

