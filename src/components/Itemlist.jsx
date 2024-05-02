import { useState } from "react"
import Items from "./Items.jsx"

function Itemlist({items , onDeleteItems , onCheckItems,onClearItems  }) {

const [sorted , setSorted]=useState("order")

let  sorteItem ;


if(sorted=="order") sorteItem = items 
if(sorted=="input") sorteItem = items.slice().sort((a , b) => a.input.localeCompare(b.input))
if(sorted=="packed") sorteItem = items.slice().sort((a , b)=> Number(a.packed) - Number(b.packed))



  return (
    <div className=" list">
      <ul>
        {
        sorteItem.map((item)=>{
          return(

            <Items key={item.id} item={item} items={items} onDeleteItems={onDeleteItems} onCheckItems={onCheckItems} /> 
          )
        })  
        }
      </ul>
     <div className="actions" >
      <select name="" id="" value={sorted}  onChange={(e)=>{setSorted(e.target.value)}}>
        <option value="order">sort by input order</option>
        <option value="input">sort by Name </option>
        <option value="packed">sort by status</option>
      </select>
<button onClick={onClearItems}>Clear</button>

     </div>
     
     
    </div>
  )
}

export default Itemlist
