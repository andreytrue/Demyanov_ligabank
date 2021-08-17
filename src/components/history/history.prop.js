import PropTypes from 'prop-types';

export default PropTypes.shape({
  date: PropTypes.string.isRequired,
  amountIn: PropTypes.string.isRequired,
  currencyIn: PropTypes.string.isRequired,
  amountOut: PropTypes.string.isRequired,
  currencyOut: PropTypes.string.isRequired,
}).isRequired;
