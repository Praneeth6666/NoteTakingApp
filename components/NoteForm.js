import { useState, useEffect } from "react";
import { TextInput, Button } from "react-native-paper";
import CategorySelector from "./CategorySelector";
import ClientSelector from "./ClientSelector";
import { View } from "react-native";
import { validateForm } from "./utils";

const NoteForm = ({ onSubmit, categories, clients, initialNote = null }) => {
  const [text, setText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(validateForm(text, selectedCategory, selectedClient));
  }, [selectedCategory, selectedClient, text]);

  const handleSubmit = () => {
    if (validateForm(text, selectedCategory, selectedClient)) {
      onSubmit({ text, category: selectedCategory, client: selectedClient });
    }
  };

  useEffect(() => {
    if (initialNote) {
      setText(initialNote.text || "");
      setSelectedCategory(initialNote.category || null);
      setSelectedClient(initialNote.client || null);
    }
  }, [initialNote]);

  return (
    <View style={{ width: "90%", alignSelf: "center" }}>
      <CategorySelector
        selectedCategory={selectedCategory}
        categories={categories}
        onSelect={(category) => setSelectedCategory(category)}
      />
      <ClientSelector
        selectedClient={selectedClient}
        clients={clients}
        onSelect={(client) => setSelectedClient(client)}
      />
      <TextInput
        style={{ marginBottom: 20 }}
        label="Note Text"
        value={text}
        onChangeText={setText}
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        disabled={!formValid}
        style={{ width: "60%", alignSelf: "center" }}
      >
        Save Note
      </Button>
    </View>
  );
};

export default NoteForm;
