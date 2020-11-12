import React from "react";
import styles from "./Board.module.css";
import PropTypes from "prop-types";
import { Square } from "../";

export default function Board({ squares = [], onClick }) {
  return (
    <div className={styles.brd}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func,
};
