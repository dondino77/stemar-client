import React, { useState } from "react";
import "./modalCantiere.css";

interface PersonaleCantiereProps {}

const PersonaleCantiere: React.FC<PersonaleCantiereProps> = () => {
  const [data, setData] = useState([
    { id: 1, text: "Dato 1", value: 0 },
    { id: 2, text: "Dato 2", value: 0 },
    { id: 3, text: "Dato 3", value: 0 },
    { id: 4, text: "Dato 4", value: 0 },
    { id: 5, text: "Dato 5", value: 0 },
  ]);

  const handleSelectChange = (id: any, value: any) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  return (
    <div className="cantiere-grouped-grid">
        
      <div className="personale-in-cantiere-grid1">
        {data.map((item) => (
          <div className="personale-in-cantiere-row" key={item.id}>
            {item.text}
          </div>
        ))}
      </div>

      <div className="personale-in-cantiere-grid2">
        {data.map((item) => (
          <>
            <div className="personale-in-cantiere-row" key={item.id}>
              {item.text}
            </div>
            <div className="personale-in-cantiere-row" key={item.id}>
              <select
                value={item.value}
                onChange={(e) => handleSelectChange(item.id, e.target.value)}
              >
                {Array.from({ length: 17 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <div className="personale-in-cantiere-row" key={item.id}>
              <button>{item.text}</button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PersonaleCantiere;
