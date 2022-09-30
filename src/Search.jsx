export const Search = ({ getNewLocation, searchBox, setSearchBox }) => {

  // Changes SearchBox input field 
  const changeHandler = (input) => setSearchBox((prev) => input);

  // Changes location and clears the search box of previous input
  const clickHandler = () => {
    getNewLocation(searchBox);
    setSearchBox('');
  };

  // Allows the change in put field to work smoothly without interruption 
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
        value={searchBox}
        onChange={eventHandler}
      />
      <button onClick={clickHandler}>Locate</button>
    </div>
  );
};
