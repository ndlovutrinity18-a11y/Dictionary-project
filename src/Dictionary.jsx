import React, {useState} from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';


export default function Dictionary() {
  const [keyword, setKeyword] =useState("Dictionary");
  const[result, setResults]=useState(null);
  const[loaded, setLoaded]=useState(false);

  function handleResponse(response){
    console.log(response.data);
    setResults(response.data);
  }


  function handleSubmit(event){
    event.preventDefault();
    search();
  }

function search(){
    let apikey="4o3f7f642638142f8fcf994tc99ba709";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;
    axios.get(apiUrl).then(handleResponse);
  
  }
  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }
function load(){
  setLoaded(true);
  search();
}


if(loaded){
  return (
    <div className="Dictionary">
      <section>
    
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a word..." onChange={handleKeywordChange} defaultValue={keyword}/>
          <button type="submit">Search</button>
        </form>
      
        <div className="hint">
          Suggested word: Software, Sunrise, Pilot
        </div>
        </section>
        <Results results={result} />
    </div>
  );
}

else{
  load();
  return "loading"
}
}