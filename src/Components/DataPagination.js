import React from "react";
import { Pagination } from "react-bootstrap";

import "../bootstrap.min.css";
const DataPagination = ({ page, setPage, hasNextPage }) => {
  const pageClickHandler = (amt) => {
    setPage((prevPage) => prevPage + amt);
  };
  return (
    <Pagination className="m-3">
      {page !== 1 && <Pagination.Prev onClick={() => pageClickHandler(-1)} />}
      {page !== 1 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && (
        <Pagination.Item onClick={() => pageClickHandler(-1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && (
        <Pagination.Item onClick={() => pageClickHandler(1)}>
          {page + 1}
        </Pagination.Item>
      )}
      {hasNextPage && <Pagination.Next onClick={() => pageClickHandler(1)} />}
    </Pagination>
  );
};
export default DataPagination;
