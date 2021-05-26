export const handleInputChange = (key, value) => {
  const payload = { key, value };

  return {
    type: "CHANGE_INPUT",
    payload,
  };
};
