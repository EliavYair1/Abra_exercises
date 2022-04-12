// import React, { useState } from 'react';

// const PrintName = ({persons}) => {
//   const fruit = ['apple', 'banana', 'orange', 'grapefruit',
//   'mango', 'strawberry', 'peach', 'apricot'];
//   const [filter, setFilter] = useState('');
//   // massage when empty
//   // one way
//   // if (persons.length === 0 ) {
//   //   return <p>no persons in array</p>
    
//   // }
// const onSearchValueChange = (event)=>{
// let filtered = [...persons]
//   const filteredPersons = persons.filter(person=>
//     {
//       return person.firstName.includes(event.target.value) 
//     } )
//   }


//   return ( <>

// <label>Search : </label>
// <input type="text"/>

//       {/* second way */}
// {persons.length === 0 ? <p>no persons in array</p> : (<>



//   {persons.map((person,idx)=>(
//     <p key={idx}>{person.firstName} {person.lastName}</p>
//     ))}
  
//     </>)}
//   </> );
// }
 
// export default PrintName;

import { useState } from "react"

const PrintNames = ({ persons, ...props }) => {

    const [searchValue, setSearchValue] = useState("");
    
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);        
    }

    const filteredPersons = persons.filter(person => 
    {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase();
        return fullName.includes(searchValue.toLowerCase());
    });
 
    return (
        <>
            <label>Search :</label>
            <input onChange={onSearchValueChange} type="text"></input>
            { filteredPersons.length === 0 ?
                <p>No persons in array.</p> :
                <>
                    {filteredPersons.map((person, idx) => 
                        <p key={idx}>{person.firstName} {person.lastName} {person.phoneNumber}</p>
                    )}
                </>
            }
        </>
    )
}

export default PrintNames;