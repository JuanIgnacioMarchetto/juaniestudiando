import React, { useState } from 'react';

const GiftList = () => {
  const [gifts, setGifts] = useState([
    { id: 1, name: 'Regalo 1' },
    { id: 2, name: 'Regalo 2' },
    { id: 3, name: 'Regalo 3' }
  ]);

  return (
    <div>
      <h2>Lista de Regalos de Navidad</h2>
      <ul>
        {gifts.map(gift => (
          <li key={gift.id}>{gift.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GiftList;
