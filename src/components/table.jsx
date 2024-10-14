import React from "react";

const TableContainer = ({ children }) => {
  return <table>{children}</table>
}

const THead = ({ children }) => {
  return <thead>{children}</thead>
}

const TBody = ({ children }) => {
  return <tbody>{children}</tbody>
}

const TFoot = ({ children }) => {
  return <tfoot>{children}</tfoot>
}

const Row = ({ children }) => {
  return <tr>{children}</tr>
}

const Column = ({ children }) => {
  return <td>{children}</td>
}

const ColumnHeader = ({ children }) => {
  return <th>{children}</th>
}

const Table = {
  TableContainer,
  THead,
  TBody,
  TFoot,
  Row,
  Column,
  ColumnHeader,
}

export default Table