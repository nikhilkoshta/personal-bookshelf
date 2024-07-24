import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link href="/" className="text-2xl font-bold">
          Personal Bookshelf
        </Link>
        <div>
          <Link href="/search" className="mr-4 hover:underline">
            Search Books
          </Link>
          <Link href="/bookshelf" className="hover:underline">
            My Bookshelf
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
