export default function Blog() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold mb-6">My Blog</h1>
          
          <article className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold mb-2">Getting Started with Next.js</h2>
            <p className="text-gray-500 mb-4">Posted on March 5, 2025</p>
            <p className="mb-4">
              Next.js is an amazing framework for building React applications. In this post, I share my experience getting started with it.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Read more →</a>
          </article>
          
          <article className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Deploying to Vercel</h2>
            <p className="text-gray-500 mb-4">Posted on March 5, 2025</p>
            <p className="mb-4">
              Vercel makes deployment incredibly easy. Here's how I deployed my first Next.js application.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">Read more →</a>
          </article>
          
          <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </a>
        </div>
      </main>
    );
  }