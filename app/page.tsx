import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Personal Bookshelf</h1>
        <p className="text-xl mb-8 text-center">
          Use the navigation to search for books and manage your bookshelf.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/search" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
            Search Books
          </Link>
          <Link href="/bookshelf" className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition-colors">
            My Bookshelf
          </Link>
        </div>
        <div className="mt-12 text-center text-gray-700">
          <p className="text-lg italic">&quot;A room without books is like a body without a soul.&quot; - Marcus Tullius Cicero</p>
        </div>
      </div>
    </div>
  );
}
