
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoList } from './components/ToDoList';
import { TodoInput } from './components/TodoInput';

import { useState, useEffect } from 'react'



function App() {
  
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleCompleteToDo(index) {
      // Update/edit/modify
      let newTodoList = [...todos] // Create new array and spread out the props
      let completedToDo = todos[index] // Get completed ToDo item by passed in index
      completedToDo['complete'] = true // Mark it complete
      newTodoList[index] = completedToDo // Get the item in the new array and overwrite
      setTodos(newTodoList) // Overwrite original array
      handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
       let newTodoList = todos.filter((val, valIndex) => {
        return valIndex !== index
       })
       setTodos(newTodoList)
       handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: currentTodos}))
  }

  function handleTimeOfDay() {
    var date = new Date();
    var hours = date.getHours();

    let message;

    if (hours < 12) {
      message = "morning! 🌅";
    } else if (hours < 18) {
      message = "afternoon! 🌇";
    } else {
      message = "evening! 🌆";
    }

    return message;
  }

  useEffect(() => {
    if (!localStorage || ! localStorage.getItem('todo-app')) { // Check for local storage
      return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
      setTodos(db.todos)
  }, [])

  return (
    <>
      
      <Header handleTimeOfDay={handleTimeOfDay} todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo = {handleCompleteToDo} handleDeleteTodo={handleDeleteTodo} selectedTab ={selectedTab} todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo} />

    </>
  )
}

export default App
