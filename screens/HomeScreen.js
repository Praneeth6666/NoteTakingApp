import React, { useEffect, useState } from "react";
import { View, Text} from "react-native";
import NoteList from "../components/NoteList";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "notes";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleEdit = (note) => {
    navigation.navigate("AddNote", { noteToEdit: note });
  };

  useEffect(() => {
    loadNotes();
  }, [notes]);

  return (
    <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
      {notes.length > 0 ? (
        <NoteList notes={notes} onEdit={handleEdit} onDelete={deleteNote} />
      ) : (
        <Text>No notes available. Add some notes!</Text>
      )}
    </View>
  );
};

export default HomeScreen;
