import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import TodoList from './TodoList'

const TodoApp = () => {

  // const dummy_todos = [
  //   {id:uuid(), text:'Buy Groceries'},
  //   {id:uuid(), text:'Learn React'},
  //   {id:uuid(), text:'Go to Gym'},
  //   {id:uuid(), text:'Make food'},
  // ]

  const data = JSON.parse(localStorage.getItem('todos') || '[]')
  
  const [todos, setTodos] = useState(data);

  function deleteTodo(id){
    const newTodos = todos.filter(item => item.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  }

  function addTodo(todo){
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  function checkHandler(id){
    setTodos((prevState)=>{
      return prevState.map(item => item.id === id ? {...item, check: !item.check} : item)
    })
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])


  return (
    <div>
        <InputForm todos={todos} addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} checkHandler={checkHandler}/>
    </div>
  )
}

export default TodoApp