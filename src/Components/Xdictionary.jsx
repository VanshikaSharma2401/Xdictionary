import React, { useState } from 'react';

const initialDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

function Xdictionary() {
    const [dictionary, setDictionary] = useState(initialDictionary);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleSearch = () => {
        const foundWord = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
        if (foundWord) {
            setSearchResult(foundWord.meaning);
        } else {
            setSearchResult('Word not found in the dictionary.');
        }
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <p>Definition:</p>
            <div>{searchResult}</div>
        </div>
    );
}

export default Xdictionary;
