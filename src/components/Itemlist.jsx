import Items from "./Items.jsx"

function Itemlist({items , onDeleteItems , }) {

  


  return (
    <div className=" list">
      <ul>
        {
        items.map((item)=>{
          return(

            <Items item={item} onDeleteItems={onDeleteItems} /> 
          )
        })  
        }
      </ul>
     
     
     
    </div>
  )
}

export default Itemlist
