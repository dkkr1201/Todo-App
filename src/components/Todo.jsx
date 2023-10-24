import React from 'react'
import {BsFillTrashFill} from 'react-icons/bs'

const Todo = (props) => {

  return (
    <li>
        <input onClick={()=>props.checkHandler(props.item.id)} type="checkbox" defaultChecked={props.item.check}/>
        <span style={{textDecoration: props.item.check && 'line-through'}}>{props.item.text}</span>
        <span onClick={()=>props.deleteTodo(props.item.id)}><BsFillTrashFill/></span>
    </li>
  )
}

export default Todo