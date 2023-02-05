import PropTypes from "prop-types";
import "./GlobalStyle.scss";

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

function GlobalStyles({ children }) {
  return children;
}

export default GlobalStyles;
