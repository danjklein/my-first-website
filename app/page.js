import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl mb-4">
          Hello! I'm a web developer passionate about creating amazing digital experiences.
        </p>
        <p className="mb-6">
          This is my first website built with Next.js and deployed on Vercel.
        </p>
        <div className="mt-6">
          <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
            About Me
          </Link>
          <Link href="/blog" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">
            Blog
          </Link>
          <Link href="/contact" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}