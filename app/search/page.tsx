"use client";

import { useState, useEffect, ChangeEvent } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'; // Adjusted import path
import BookCard from '../components/BookCard'; // Adjusted import path

const SearchPage = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setResults(data.docs);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const addToBookshelf = (book: any) => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf') || '[]');
    if (!savedBooks.find((b: any) => b.key === book.key)) {
      savedBooks.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(savedBooks));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 container mx-auto">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books..."
          className="w-full p-2 border rounded"
        />
        {loading && <div className="text-center my-4">Loading...</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {results.map((book) => (
            <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
          ))}
        </div>
        <Link href="/bookshelf" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Go to Bookshelf
        </Link>
      </div>
    </div>
  );
};

export default SearchPage;
