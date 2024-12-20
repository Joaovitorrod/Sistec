import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  image?: string; // Caminho ou URL da imagem
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  // Verifica se a imagem é um link absoluto ou local
  const isExternalImage = image?.startsWith('http://') || image?.startsWith('https://');

  return (
    <div className="card" onClick={onClick} style={styles.card}>
      {image && (
        <img
          src={isExternalImage ? image : `${process.env.PUBLIC_URL}${image}`} // Usa o caminho certo
          alt={title}
          style={styles.image}
        />
      )}
      <h3 style={styles.title}>{title}</h3>
      {description && <p style={styles.description}>{description}</p>}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.2em',
    margin: '0 0 8px 0',
  },
  description: {
    color: '#666',
  },
};
