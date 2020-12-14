import React, { useState, useEffect } from 'react'
import TodoDone from './Todo/TodoDone.js'
import { getJson } from './api.js'

let TodoHooks = () => {
    let [todos, setTodo] = useState([])

    useEffect(() => {
        getJson()
            .then((response) => {
                console.log('Api Call', response.data)
                setTodo(response.data)
                // console.log('Hooks', todos)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    console.log('Hooks', todos)
    return (
        <>
            <div className="container">
                {
                todos.map(
                                        (todo) => {
                                            return (
                                                <>
                    {todo.completed && <TodoDone sendthistodummy={todo}  />}
                </>
                                            )
                                        }
                                    )
}
        </div>
        </>
    )
}


export default TodoHooks