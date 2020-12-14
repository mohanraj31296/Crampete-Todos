import React, {useState, useEffect} from 'react'
import{useSelector,useDispatch} from 'react-redux'
import TodoComponent from './TodoComponent'
import {getTodosRedux} from '../store'

let TodoRedux = () => {

    let dispatch1 = useDispatch()

    useEffect(() => {
        dispatch1(getTodosRedux) // arg to store
    },[])

    let todos = useSelector((fromStore) => {return fromStore.todos})
    console.log(todos)

    return(
<>
<div className = "container">
    <div className="row">
        <div className ="col">
            {
                todos.map(
                    (todo) => {
                        return (
                            <>
                            {!todo.completed && <TodoComponent todo ={todo}/>}
                            </>
                        )
                    }
                )
            }
        </div>
        </div>
</div>
</>
    )
}

export default TodoRedux