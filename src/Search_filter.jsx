import React, {useState} from 'react'
function SearchFilter() {
const [search, setSearch] = useState('');
const items = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple', 'Watermelon'];
const filteredItem = items.filter(
    item => item.toLowerCase().includes(search.toLowerCase())
)
return (
<div>
          <h1 style={{textAlign:'center', color:'blue', textShadow:'2px 2px 2px blue', marginTop:'10%'}}>Search Filter</h1>
    <div style={{textAlign:'center', height:'200px', width:'300px', boxShadow:'5px 5px 5px gray', marginLeft:'auto', marginRight:'auto', border:'2px solid gray', marginTop:'3%', padding:'10px' }}>
   
   <label>Search: &nbsp;</label>
    <input type='text'
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            placeholder='Enter item to search'></input>
  
        <ul style={{listStyleType:'none' ,textAlign:'center', alignContent:'center'}}>
            {
                filteredItem.map(
                    (item, index)=>
                    <li key={index}>{item}</li>  
                )
            }
        </ul>
 
    </div>
      </div>
  )
}
export default SearchFilter;