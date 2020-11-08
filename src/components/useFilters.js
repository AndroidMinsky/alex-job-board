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

  const removeFilter = (name) => {
    setFilters(filters.filter((tag) => tag !== name));
  };

  return { filters, setFilters, addFilter, removeFilter };
}
