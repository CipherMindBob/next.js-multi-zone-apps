import Link from "next/link"

export default function HomePage() {
  const mainAppUrl = process.env.NEXT_PUBLIC_BLOG_URL || 'http://localhost:3001'
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Blog Zone</h1>
      <p className="mb-4">This is the blog home page served by a separate Next.js app.</p>
      <div className="space-x-4">
        <Link href="/posts/post-1" className="text-blue-500 hover:underline">
          Post 1
        </Link>
        <Link href="/posts/post-2" className="text-blue-500 hover:underline">
          Post 2
        </Link>
        <a href={mainAppUrl} className="text-blue-500 hover:underline">
          Back to Main App
        </a>
      </div>
    </div>
  )
}

