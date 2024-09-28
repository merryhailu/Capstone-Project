

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery,
}) => {




    
    return (
        <form onSubmit={handleSubmit} className="text-center">
            <input 
                value={query}
                className="form-control bg-slate-200 px-10 py-2 rounded-2xl border-none outline-none transition-all "
                placeholder="Search for a recipe..."
                name="query"
                disabled={isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
            <input
                disabled={isLoading || !query}
                type="submit"
                className="btn bg-red-700 px-5 py-2 text-white rounded-2xl m-4"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;