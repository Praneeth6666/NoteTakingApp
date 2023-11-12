const validateForm = (text, selectedCategory, selectedClient) => {
  if (text.trim() === "" || !selectedCategory || !selectedClient) {
    return false;
  }
  return true;
};

export { validateForm };
