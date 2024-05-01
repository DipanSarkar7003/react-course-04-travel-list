import { useState } from 'react'

import Itemlist from './components/Itemlist'
import Logo from './components/Logo'
import Form from './components/Form'
import Stats from './components/Stats'


function App() {
const initialItems = [
    { id: 1, input: "Passports", count: 2, packed: false },
    { id: 2, input: "Socks", count: 12, packed: false },
    { id: 3, input: "charger", count: 2, packed: false },
  ];

  const [items , setItems] = useState(initialItems)

  function handleaAddItems(item){
    // (items)=>{
    //   setItems([...items,item])
    //   console.log(
    //     items
    //   );
    // }
  
    setItems((items)=>{
      return(
  
        [...items,item]
      )
    })
  
    // setItems((items) => [...items, item]);
  
   }

   function handleDeleteItems(id){
    console.log(id)
    setItems(items.filter((item => item.id != id)))
   }
   


  return (
    <>
     <Logo/>
     <Form onAddingItems ={handleaAddItems}/>
     <Itemlist   items = {items} onDeleteItems = {handleDeleteItems}  />
     <Stats/>
    
    </>
  )
}

export default App