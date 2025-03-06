import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl">My Portfolio</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2">About</Link>
          <Link href="/blog" className="text-gray-300 hover:text-white px-3 py-2">Blog</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
}