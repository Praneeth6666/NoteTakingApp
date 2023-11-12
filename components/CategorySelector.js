import React from "react";
import { Picker } from "@react-native-picker/picker";

const CategorySelector = ({ selectedCategory, categories, onSelect }) => {
  return (
    <Picker
      selectedValue={selectedCategory}
      onValueChange={(itemValue) => onSelect(itemValue)}
      style={{ marginTop: -30 }}
    >
      <Picker.Item label="Select Category" value={null} />
      {categories.map((category) => (
        <Picker.Item
          key={category.id}
          label={category.name}
          value={category.id}
        />
      ))}
    </Picker>
  );
};

export default CategorySelector;
