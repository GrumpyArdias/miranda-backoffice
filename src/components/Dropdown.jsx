import React, { useState } from "react";
import { BookingTopSelect } from "./styles/Bookings.styles";

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <BookingTopSelect
      value={selectedOption}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </BookingTopSelect>
  );
};

export default Dropdown;
