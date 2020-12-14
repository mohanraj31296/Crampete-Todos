import React from 'react';

class TodoCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            completed : null
        }
        //  this.handle = this.handle.bind(this)
    }

    textboxfun = (event) => {
        console.log(event.target.value);
        this.setState ({"title" : event.target.value,"completed":false})
    }

    formfunc = (event) => {
        let data = {"title" : this.state.title,"completed": this.state.completed}
        this.props.createTodo(data)
       }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h5>New Todo</h5>
                    <form onSubmit ={this.formfunc}> 
                        <label>Title</label>
                        <input onChange={this.textboxfun} className="form-control"></input>
                        <input className="btn btn-primary" type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}



export default TodoCreate;