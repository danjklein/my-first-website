import Link from 'next/link';

export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl mb-6">
            I'm a web developer with a passion for building beautiful, functional websites.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">My Skills</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">HTML/CSS</li>
            <li className="mb-2">JavaScript</li>
            <li className="mb-2">React</li>
            <li className="mb-2">Next.js</li>
          </ul>
          <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }