import React, { useState } from "react";
import { BookigTopSelect } from "./styles/Bookings.styles";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <BookigTopSelect
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </BookigTopSelect>
  );
};

export default Dropdown;
