import { useState } from "react";

export default function useFilters() {
  const [filters, setFilters] = useState([]);

  const addFilter = (value) => {
    if (value.trim()) {
      const newArr = filters.map((tag) => tag.toLowerCase());
      if (!newArr.includes(value.toLowerCase())) {
        setFilters([...filters, value]);
      }
    }
  };

  return { filters, setFilters, addFilter };
}
