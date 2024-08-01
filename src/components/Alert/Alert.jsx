import clsx from 'clsx';
import css from './Alert.module.css';

console.log(css);

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

export default Alert;
