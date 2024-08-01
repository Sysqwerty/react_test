const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        return (
          <li key={book.id} data-testid={book.id}>
            {book.name}
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
