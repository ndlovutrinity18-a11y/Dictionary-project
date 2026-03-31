import React, {useState} from 'react';
import './Dictionary.css';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';  


export default function Dictionary() {
  const [keyword, setKeyword] =useState("Dictionary");
  const[result, setResults]=useState(null);
  const[loaded, setLoaded]=useState(false);
  const[photos, setPhotos]=useState([]);

  function handleResponse(response){
    setResults(response.data);
  }


  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handlePexelResponse(response){
    console.log(response.data);
    setPhotos(response.data.photos);
  }

function search(){
  // API request for dictionary data from SheCodes
    let apikey="4o3f7f642638142f8fcf994tc99ba709";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apikey}`;
    axios.get(apiUrl).then(handleResponse);

  // API request for photos from Pexels
  const pexelApi="wOShyaR5XNrMIcObTwPDOV8G9Fc4Hyz7QyH2ulSap5SjjWQOVemckvdV";
  const pexelUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  console.log(pexelUrl);
  const headers = {Authorization: pexelApi};
  axios.get(pexelUrl,{headers: headers}).then(handlePexelResponse);
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
        <Photos photos={photos} />
    </div>
  );
}

else{
  load();
  return "loading"
}
}