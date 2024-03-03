import React, { useState } from 'react';

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  const customDictionary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.split(' ');

    for (const word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setCorrection(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        return;
      }
    }

    setCorrection('');
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here"
      />
      {correction && <div>{correction}</div>}
    </div>
  );
};

export default XSpellCheck;
