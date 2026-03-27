import React from 'react';
import Synonyms from './Synonyms';
export default function Meaning(props){
    console.log( props.meanings);
let meaning = props.meanings;    
    return (
        <div className= "Meaning">
        <h3>{meaning.partOfSpeech}</h3>
        <p>{meaning.definition}</p>
        <Synonyms synonyms={meaning.synonyms} />
        </div>
    );
    

}