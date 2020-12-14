import React from 'react';
import DummyComp from "./DummyComp.js"
import TodoDone from "./TodoDone.js"
import axios from 'axios';
import { getJson, saveInBackend } from "../api";
import TodoCreate from './TodoCreate.js';


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "dbdata": [],
            "loading": true
        }
        //  this.handle = this.handle.bind(this)
    }

    componentDidMount() {
     // getJson()
       let a =  axios.get("http://localhost:8001/todoparent/todos")
       console.log("response:",a);    
      a .then((response) => { //resolve
                this.setState({ "dbdata": response.data, "loading": false })
            })
            .catch((error) => { //reject
                console.log(error);
            })

    }

    createTodo = (data) => {
      //  saveInBackend(data)
      console.log('data log',data)
      axios.post('http://localhost:8001/todoparent/todos', data)
            .then((response) => {
                console.log(response.data);
              //  response.data.completed = false;
                 this.state.dbdata.push(response.data);
                 let updatedData = this.state.dbdata
                 console.log(updatedData);
                this.setState({ "dbdata": updatedData });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    componentDidUpdate() {
        console.log("componentdidmount")
    }

    setToggle = (id) => {
        let updatedTodos = this.state.dbdata.map((fromChild) => {
            if (fromChild._id == id) {
                fromChild.completed = !fromChild.completed
            }
            return fromChild
        })
        this.setState({ "dbdata": updatedTodos })
    }

    isEmptyDone = () => {
        let emptyDone = this.state.dbdata.find(
            (dbdata) => {
                return dbdata.completed
            })

        if (!emptyDone) {
            return (<p>No Done Items</p>)
        }
    }


    render() {
        return (
            <div className="container">
                <TodoCreate createTodo={this.createTodo} />
                {
                    this.state.loading ? <h5>Loading</h5> :
                        <div className="row">
                            <div className="col-md-6">
                                <h4>Todo List</h4>
                                {
                                    !this.state.dbdata.find(
                                        (dbdata) => {
                                            return !dbdata.completed
                                        }) && <p>No Todos</p>
                                }
                                {
                                    this.state.dbdata.map(
                                        (frommap) => {
                                            return (
                                                <>
                                                    {!frommap.completed && <DummyComp sendthistodummy={frommap} setToggle={this.setToggle} />}
                                                </>
                                            )
                                        }
                                    )
                                }
                            </div>

                            <div className="col-lg-6">
                                <h4>Done List</h4>
                                {
                                    this.isEmptyDone()
                                }
                                {
                                    this.state.dbdata.map(
                                        (frommap) => {
                                            return (
                                                <>
                                                    {frommap.completed && <TodoDone sendthistodummy={frommap} setToggle={this.setToggle} />}
                                                </>
                                            )
                                        }
                                    )
                                }

                            </div>

                        </div>
                }

            </div>
        )
    }
}
export default Todo;