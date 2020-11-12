import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ value, disabled, onClick, onBlur, style }) {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      onBlur={onBlur}
      className={styles.btn}
      style={style}
      disabled={disabled}
    />
  );
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  onBlur: PropTypes.func,
};
