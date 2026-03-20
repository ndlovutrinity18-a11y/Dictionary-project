import React, {useState} from 'react';
import './Dictionary.css';
import axios from 'axios';
export default function Dictionary() {
  const [keyword, setKeyword] =useState("");

  function handleResponse(response){
    console.log(response.data);
  }


  function search(event){
    event.preventDefault();

    let apikey="4o3f7f642638142f8fcf994tc99ba709";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
        <form onSubmit={search}>
          <input type="search" placeholder="Enter a word..." onChange={handleKeywordChange} />
          <button type="submit">Search</button>
        </form>
        <div className="results">
        </div>
    </div>
  );
}