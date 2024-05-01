import React, { useState } from 'react'

function Items({item , onDeleteItems }) {
 
const [check , setCheck] = useState(false)

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
        value={check}
        onChange={()=>setCheck(!check)}
        
       
      />
      <span style={check ? { textDecoration: "line-through" } : {}}>
        {item.count} {item.input}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>



    
  </>

  )
}

export default Items
