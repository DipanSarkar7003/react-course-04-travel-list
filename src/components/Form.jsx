import { useState } from "react";




function Form( {onAddingItems}) {
  const numberArrey = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [input, setInput] = useState("");
  const [count, setCount] = useState(1);





  function handleSubmit(e) {
    e.preventDefault();
if(!input)return;

    const newItem = {id: Math.floor(Math.random()*10) ,input , count , packed:false,}
onAddingItems(newItem)
        setCount(1)
    setInput("")
    

  }




  
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>what do you need for your 😍trip ?</p>
      <select
        name="count"
        id=""
        value={count}
        onChange={(e) => {
          setCount(e.target.value)
          console.log(e.target.value);
        }}
      >
        {numberArrey.map((elem) => {
          return (
            <option value={elem} key={elem}>
              {elem}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="items..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}

export default Form;
