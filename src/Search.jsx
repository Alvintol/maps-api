import { useState } from 'react';

export const Search = ({ getNewLocation }) => {
  const [search, setSearch] = useState('');

  const changeHandler = (input) => setSearch((prev) => input);

  const clickHandler = () => {
    // getNewLocation()
    console.log(search);
    setSearch('');
  };

  const eventHandler = (event) => {
    event.preventDefault();
    changeHandler(event.target.value);
  };

  return (
    <div id='search'>
      <input
        id='searchBox'
        type='text'
        placeholder='Search'
        value={search}
        onChange={eventHandler}
      />
      <button onClick={clickHandler}>Locate</button>
    </div>
  );
};
