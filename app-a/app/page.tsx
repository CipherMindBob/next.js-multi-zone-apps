import Link from "next/link"

export default function Home() {
  console.log('Blog URL:', process.env.NEXT_PUBLIC_BLOG_URL)
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Main App</h1>
      <p className="text-sm text-gray-500 mb-4">Blog URL: {process.env.NEXT_PUBLIC_BLOG_URL}</p>
      <p className="mb-4">This is the home page of our Multi-Zone Next.js application on Vercel.</p>
      <div className="space-y-4">
        <div className="space-x-4">
          <Link href="/about" className="text-blue-500 hover:underline">
            About
          </Link>
          <a href={`${process.env.NEXT_PUBLIC_BLOG_URL}/blog`} className="text-blue-500 hover:underline">
            Blog Home
          </a>
        </div>
        
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Latest Blog Posts:</h2>
          <div className="space-x-4">
            <a href={`${process.env.NEXT_PUBLIC_BLOG_URL}/blog/posts/post-1`} className="text-blue-500 hover:underline">
              Post 1
            </a>
            <a href={`${process.env.NEXT_PUBLIC_BLOG_URL}/blog/posts/post-2`} className="text-blue-500 hover:underline">
              Post 2
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

