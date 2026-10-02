import React, { Component } from "react";
 class Counter  extends Component{
    constructor(){
        super();
        this.state= {count:1};
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <div style ={{ textalign:"center",marginTop:"100px"}}>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default Counter;