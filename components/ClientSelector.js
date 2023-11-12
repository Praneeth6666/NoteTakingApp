import React from "react";
import { Picker } from "@react-native-picker/picker";

const ClientSelector = ({ selectedClient, clients, onSelect }) => {
  return (
    <Picker
      selectedValue={selectedClient}
      onValueChange={(itemValue) => onSelect(itemValue)}
      style={{ marginTop: -30 }}
    >
      <Picker.Item label="Select Client" value={null} />
      {clients.map((client) => (
        <Picker.Item key={client.id} label={client.name} value={client.id} />
      ))}
    </Picker>
  );
};

export default ClientSelector;
