

const SearchForm = () => {
  return (
    <>
      <div>
        <form>
          <input type="text" name="query" autoComplete="off" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;