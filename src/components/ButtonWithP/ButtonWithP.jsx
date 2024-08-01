import { useState } from 'react';

const ButtonWithP = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};

export default ButtonWithP;
