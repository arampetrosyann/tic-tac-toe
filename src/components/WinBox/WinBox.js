import React from "react";
import styles from "./WinBox.module.css";
import PropTypes from "prop-types";

export default function WinBox({ winner, className, style }) {
  return (
    <p className={`${styles.win} ${className}`} style={style}>
      {winner === -1 ? "Draw!" : `Win: ${winner}`}
    </p>
  );
}

WinBox.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
};
