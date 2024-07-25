import { useState } from "react";
import Pagination from "./Pagination";

export default function PaginationExample() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const dataCount = 100;
  const handleChange = (value: number) => {
    setPage(value);
  };
  return (
    <Pagination
      page={page}
      paginationCount={Math.ceil(dataCount / itemsPerPage)}
      handleChange={handleChange}
    />
  );
}
