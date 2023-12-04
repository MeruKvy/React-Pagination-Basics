import React from "react";
import { Button } from "antd";
import "./pagination.css";

export function Pagination({ total, size, current, onChange }) {

  const pageCount = Math.ceil(total / size) || 1;

  const emptyArray1 = new Array(pageCount).fill(null);

  return (
    <div className="pagination__container">
      <Button>Prev</Button>
      {emptyArray1.map((_, index) => {
        const isActive = current === index + 1;
        return <Button onClick={() => onChange(index + 1)} type={isActive ? "primary" : "default"} >{index + 1}</Button>;
      })}
      <Button>Next</Button>
    </div>
  );
}
