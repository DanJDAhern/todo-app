import {useState} from 'react'

export function TodoInput(props) {

    const {handleAddTodo} = props
    const [inputValue, setInputValue] = useState('')
    console.log(inputValue)
    return (
        <div className="input-container">
            <input value={inputValue} 
                   onChange={(e) =>{setInputValue(e.target.value)}} // Bind to the event of E, on the value changing, it sets the input value to the event target val
                   placeholder="Add Task"/>
            <button onClick={() =>{
                if (!inputValue) {return} // If input is blank, prevent submission
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
             <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}