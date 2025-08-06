import React, { useState } from "react";
function SearchFilter() {
    const [search, setSearch] = useState("");
    const items = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
    let filteredItems = []; 
  if (search.trim() === "") {
      filteredItems = items; 
  }
  else{
      for(let i=0;i<items.length;i++){
          if(items[i].toLowerCase().includes(search.toLowerCase())){
              filteredItems.push(items[i])
          }
      }
    }
    return (
        <div>
            <div
                style={{
                    textAlign: "center",
                    height: "200px",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "3%",
                    padding: "10px",
                }}>
                <label>Search:&nbsp;</label>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Enter item to search"
                />
                <ul style={{ listStyleType: "none", textAlign: "center", alignContent: "center" }}>               
{
                    filteredItems.map((item, index) =>
                     <li key={index}>{item}</li>)
}
                </ul>
            </div>
        </div>
    );
}

export default SearchFilter;
