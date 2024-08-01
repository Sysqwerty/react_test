const Button = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

export default Button;
