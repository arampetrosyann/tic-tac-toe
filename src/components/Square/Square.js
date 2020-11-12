import React from "react";
import styles from "./Square.module.css";
import PropTypes from "prop-types";

export default function Square({ value, onClick, style }) {
  return (
    <button onClick={onClick} className={styles.sqr} style={{ ...style }}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  style: PropTypes.object,
};
