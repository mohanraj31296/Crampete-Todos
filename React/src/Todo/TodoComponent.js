import React from 'react'

function TodoComponent(props){
    let {todo} = props
    return(
        <div className ="card">
            <div className ="card-body">
    <h5 className ="card-title">{todo.title}</h5>
    <button className="btn btn-success">Done</button>
    <button className="btn btn-danger">delete</button>
            </div>

        </div>
    )
}

export default TodoComponent