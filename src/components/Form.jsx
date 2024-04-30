

function Form() {
  return (
    <div className="add-form">
      <p>what do you need for your 😍trip ?</p>
     <select name="" id="">
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
     </select>
      <input type="text" placeholder="items..." />
      <button>Add</button>
    </div>
  )
}

export default Form
