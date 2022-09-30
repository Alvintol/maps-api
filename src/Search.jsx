import { useState } from 'react';

export const Search = ({ getNewLocation }) => {
  const [search, setSearch] = useState('');

  const changeHandler = (input) => {
    setSearch((prev) => input);
  };

  return (
    <div id='search'>
      <input
        id='searchBox'
        type='text'
        placeholder='Search'
        value={search}
        onChange={(e) => {
          e.preventDefault();
          changeHandler(e.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log('test');
          // getNewLocation()
          setSearch('');
        }}
      >
        Locate
      </button>
    </div>
  );
};
