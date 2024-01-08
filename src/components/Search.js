import React, { useRef, useContext } from 'react';
import appContext from '../store/appContext';

function Search() {
  const textRef = useRef();
  const { handleSearch } = useContext(appContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = textRef.current.value;
    handleSearch(searchTerm);

    textRef.current.value = '';
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={textRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
