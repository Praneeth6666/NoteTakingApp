import { View } from "react-native";
import NoteForm from "../components/NoteForm";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "notes";

const AddNoteScreen = ({ route, categories, clients }) => {
  const navigation = useNavigation();
  const noteToEdit = route?.params?.noteToEdit;

  const handleNoteSubmit = async (note) => {
    try {
      let existingNotes =
        JSON.parse(await AsyncStorage.getItem(STORAGE_KEY)) || [];

      if (noteToEdit) {
        // Editing existing note
        existingNotes = existingNotes.map((existingNote) =>
          existingNote.id === noteToEdit.id
            ? { ...note, id: noteToEdit.id }
            : existingNote
        );
      } else {
        // Adding a new note
        existingNotes = [
          ...existingNotes,
          { ...note, id: existingNotes.length + 1 },
        ];
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existingNotes));
    } catch (error) {
      console.error("Error saving note:", error);
    }

    navigation.goBack();
  };

  return (
    <View>
      <NoteForm
        onSubmit={handleNoteSubmit}
        categories={categories}
        clients={clients}
        initialNote={noteToEdit}
      />
    </View>
  );
};

export default AddNoteScreen;
