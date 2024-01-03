import React, { useRef } from 'react';

function Search({ onSearch }) {
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = textRef.current.value;
    onSearch(searchTerm);

    // Clear the input field after submitting the search
    textRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" ref={textRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Search;
