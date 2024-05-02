import React, { useState } from 'react'

function Items({item , onDeleteItems ,onCheckItems , items }) {
 


  return (
  <>
    {/* <li className='list'>
    <input type="checkBox" />
      <p>
      {item.description}
      </p>
    <button className='actions'>❌</button>
    </li> */}

    <li>
      <input
        type="checkbox"
        value={item.packed}
        // onChange={()=>setCheck(!check)}
        onChange={()=>onCheckItems(item.id)}
        
       
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.count} {item.input}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  </>

  )
}

export default Items
