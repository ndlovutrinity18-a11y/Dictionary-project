import React from 'react';
import Synonyms from './Synonyms';
export default function Meaning(props){
let meaning = props.meanings;    
    return (
        <div className= "Meaning">
            <section>
        <h4>{meaning.partOfSpeech}</h4>
        <p><strong>Definition:</strong> {meaning.definition}</p>
        <Synonyms synonyms={meaning.synonyms} />
        </section>
        </div>
    );
    

}