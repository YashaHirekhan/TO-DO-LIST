import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        {/* <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i> */}
        <FontAwesomeIcon icon={faTrashCan} className="icon-delete" onClick={e => { props.deleteItem(props.index) }} />
        </span>
    </li>
  )
}

export default Todolist