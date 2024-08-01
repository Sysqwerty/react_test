import { useState } from 'react';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e =>
    setInputValue(prevInputValue =>
      e.target.value.includes('$') ? prevInputValue : e.target.value
    ); // Update the input

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBar;
