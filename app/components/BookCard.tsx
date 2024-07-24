import { FC, useState } from 'react';

interface BookCardProps {
  book: {
    key: string;
    title: string;
    author_name?: string[];
    first_publish_year?: number;
  };
  onAdd: (book: any) => void;
}

const BookCard: FC<BookCardProps> = ({ book, onAdd }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddClick = () => {
    onAdd(book);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="relative border p-4 rounded shadow hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-gray-700">{book.author_name?.join(', ')}</p>
      <p className="text-gray-500">{book.first_publish_year}</p>
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={handleAddClick}
      >
        Add to Bookshelf
      </button>
      {showPopup && (
        <div className="absolute top-0 right-0 bg-green-500 text-white p-2 rounded shadow-lg">
          Successfully added {book.title} to Bookshelf!
        </div>
      )}
    </div>
  );
};

export default BookCard;
