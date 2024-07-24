"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Adjusted import path

const BookshelfPage = () => {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    setBooks(savedBooks);
  }, []);

  const removeFromBookshelf = (bookKey: string) => {
    const updatedBooks = books.filter(b => b.key !== bookKey);
    setBooks(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book.key} className="border p-4 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold">{book.title}</h3>
              <p className="text-gray-700">{book.author_name?.join(', ')}</p>
              <p className="text-gray-500">{book.first_publish_year}</p>
              <button
                className="mt-2 bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition-colors"
                onClick={() => removeFromBookshelf(book.key)}
              >
                Remove from Bookshelf
              </button>
            </div>
          ))}
        </div>
        <Link href="/search" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default BookshelfPage;
