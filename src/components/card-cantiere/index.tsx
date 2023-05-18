import React from 'react';
import './cardCantiere.css';

interface CardCantiereProps {
  title: string;
  description: string;
  content: string;
  selected?: boolean;
  onSelected: (id: string) => void;
  error?: boolean;
}

const CardCantiere: React.FC<CardCantiereProps> = ({ title, description, content, selected = false, error = true, onSelected }) => {

  return (
    <div
      className={`card ${selected ? 'selected' : ''} `}
      onClick={() => onSelected(content)}
    >
      <div className={`${error ? 'red-line' : 'green-line'}`}></div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default CardCantiere;
