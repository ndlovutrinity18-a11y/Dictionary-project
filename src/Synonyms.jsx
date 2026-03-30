import React from 'react';
export default function Synonyms(props){
    if (props.synonyms) {
        return (
            <div className="Synonyms">
            
                <ul>
                  <strong>Synonyms:</strong>  {props.synonyms.map((synonym, index) => (
                        <li key={index}>{synonym}</li>
                    ))}
                </ul>
            </div>
        );
    }
    return null;
}