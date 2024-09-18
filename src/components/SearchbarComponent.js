import React from 'react'

export default function SearchbarComponent({searchValue, handleInputChange}) {
  return (
    <div className="container-fluid d-flex gap-3 align-items-center p-2">
      <h3 className="d-flex flex-column">
        Meals <span className="fs-6 text-secondary">search for: {searchValue}</span></h3>
      <div className="d-flex ms-auto w-50 align-items-center">
        <input type="search" 
          className="form-control" 
          placeholder="Search..." 
          value={searchValue}
          aria-label="Search" 
          onChange={handleInputChange}/>
      </div>
    </div>
  );
}
