import React, { useState } from "react";

const ComboBox = () => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <select value={selectedItem} onChange={(e) => handleSelectItem(e.target.value)}>
        <option value="">Seleziona un elemento</option>
        <option value="Elemento 1">Elemento 1</option>
        <option value="Elemento 2">Elemento 2</option>
        <option value="Elemento 3">Elemento 3</option>
      </select>
      <p>Elemento selezionato: {selectedItem}</p>
    </div>
  );
};

export default ComboBox;