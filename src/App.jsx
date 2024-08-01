// import Product from './components/Product/Product';
// import BookList from './components/BookList/BookList';
// import Alert from './components/Alert/Alert';
// import Button from './components/Button/Button';
// import ButtonWithP from './components/ButtonWithP/ButtonWithP';
// import { favoriteBooks } from './constants';
// import { HiUser } from 'react-icons/hi';
// import { useState } from 'react';

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <div>
//       <p>
//         <HiUser className="my-icon important" color="green" size="24" /> User
//         profile
//       </p>

//       <Button value={clicks} onUpdate={handleClick} />
//       <Button value={clicks} onUpdate={handleClick} />

//       <ButtonWithP />

//       <h2>Best selling</h2>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <h2>Books of the week</h2>
//       <BookList books={favoriteBooks} />
//       <Alert variant="info">
//         Would you like to browse our recommended products?
//       </Alert>
//       <Alert variant="error" outlined>
//         There was an error during your last transaction
//       </Alert>
//       <Alert variant="success" elevated>
//         Payment received, thank you for your purchase
//       </Alert>
//       <Alert variant="warning" outlined elevated>
//         Please update your profile contact information
//       </Alert>
//     </div>
//   );
// }

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [clicks, setClicks] = useState(
//     () => Number(window.localStorage.getItem('saved-clicks')) || 0
//   );

//   useEffect(() => {
//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// export default App;

// import { useState } from 'react';
// import LoginForm from './components/LoginForm/LoginForm';
// import SearchBar from './components/SearchBar/SearchBar';
// import LangSwitcher from './components/LangSwitcher/LangSwitcher';
// import LoginForm2 from './components/LoginForm2/LoginForm2';

// const App = () => {
//   // Колбек-функція для обробки сабміту форми
//   const handleLogin = userData => {
//     // Виконуємо необхідні операції з даними
//     console.log(userData);
//   };

//   const [lang, setLang] = useState('uk');

//   const [coffeeSize, setCoffeeSize] = useState('sm');

//   const handleSizeChange = e => {
//     setCoffeeSize(e.target.value);
//   };

//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = e => setHasAccepted(e.target.checked);

//   return (
//     <>
//       <div>
//         <h1>Please login to your account!</h1>
//         {/* Передаємо колбек як пропс форми */}
//         <LoginForm onLogin={handleLogin} />
//       </div>
//       <SearchBar />

//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />

//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === 'sm'}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === 'md'}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === 'lg'}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>

//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="terms"
//             checked={hasAccepted}
//             onChange={handleChange}
//           />
//           I accept terms and conditions
//         </label>
//         <button type="button" aria-label="Proceed" disabled={!hasAccepted}>
//           Proceed
//         </button>
//       </div>

//       <LoginForm2 />
//     </>
//   );
// };

// export default App;

import FeedbackForm from './components/FeedbackForm/FeedbackForm';

const App = () => {
  return <FeedbackForm />;
};

export default App;
