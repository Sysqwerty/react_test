import { HiSearch } from 'react-icons/hi';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.wrapper}>
      <HiSearch className={css.icon} />
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
