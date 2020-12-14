import React from 'react';

function DummyComp (props) {
    console.log(props.sendthistodummy);
    return(
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    {props.sendthistodummy.title}</p>
                <button type="button" onClick={(event)=>{props.setToggle(props.sendthistodummy._id)}} className="btn btn-success" >
                    Done</button>
                <button type="button" className="btn btn-danger">
                    Delete</button>
            </div>
        </div>
    )
}

export default DummyComp