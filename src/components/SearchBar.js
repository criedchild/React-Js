import React from 'react'

const SearchBar = props => {
  return (
    <div style={styles.contentSearch}>
      <input
        placeholder="Search anything..."
        type="text"
        value={props.search}
        onChange={props.onChangeSearch}
      />
    </div>
  );
};

const styles = {
    inputSearch : {
        width: 500,
        height: 30,
    },
    contentSearch:{
        backgroundColor :"gray",
        height : 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }
}

export default SearchBar