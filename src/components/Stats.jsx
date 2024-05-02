

function Stats({items}) {

  if (!items.length){
    return(
      <footer className="stats "> 
      <em>
        lets start adding items in the list 😎
      </em>
    </footer>
    )
  }

  const totalItems = items.length
  const packedItems = (items.filter((item)=>item.packed)).length
  const persentage = Math.round(packedItems/totalItems*100)



  return (
    <footer className="stats "> 
    {persentage==100? <em>
      all set lest go for the trip 🌴💹

      </em>:
       <em>
             you have {totalItems} item on your list , you have already packed {packedItems} ({persentage}%)

     </em>}

    </footer>
  )
}

export default Stats
