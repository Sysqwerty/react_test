import Product from './Product';
import BookList from './BookList';
import Alert from './Alert';
import { favoriteBooks } from './constants';
import { HiUser } from 'react-icons/hi';

export default function App() {
  return (
    <div>
      <p>
        <HiUser className="my-icon important" color="green" size="24" /> User
        profile
      </p>

      <h2>Best selling</h2>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h2>Books of the week</h2>
      <BookList books={favoriteBooks} />

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </div>
  );
}
