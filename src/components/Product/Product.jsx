import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  price,
}) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="480" />
      <p>Price: {price} credits</p>
    </>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;
