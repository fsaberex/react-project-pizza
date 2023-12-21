import React from 'react';
import { useRef } from 'react';

function Search() {
    const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(textRef.current.value);

    textRef.current.value='';

  };

  return(
    <form onSubmit={handleSubmit}>
          <input type="search" ref={textRef}/>
          <button type="submit">Submit</button>
        </form>
  );
}

export default Search;