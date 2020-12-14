import React from 'react'
//var count = 0;

class Counter extends React.Component{
constructor(props){
    super(props)
    this.state ={
        "counts" : 0
    }
  //  this.handle = this.handle.bind(this)
}

handleplus = () =>
{
//console.log("handle"+ this.state);
console.log(this.state.counts);

this.setState({"counts" : this.state.counts +1});
} 

handleminus = () =>
{
    console.log(this.state.counts);
    this.setState({"counts" : this.state.counts -1})
}

/*handle()
{
console.log("handle"+ this.state.counts);
}*/  

render()
{
    return(
        <>
        <div>
    <span>{this.state.counts}</span>
        </div>
           <div>
            <button type="button" onClick={this.handleplus} className="btn btn-success">Increase</button>
            </div>
            <div>
            <button type="button" onClick={this.handleminus} className="btn btn-danger">Decrease</button>
            </div>
            <h1>Counter Component</h1>
        </>
    )
}
}

export default Counter;