import React from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import EditIcon from "../assets/edit-icon";
import DeleteIcon from "../assets/delete-icon";

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 40,
            margintop: 40,
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <Text>{item.text}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity onPress={() => onEdit(item)}>
              <EditIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default NoteList;
