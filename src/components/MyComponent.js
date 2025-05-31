
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Khang',
        address: 'Can Tho',
        age: 21
    }; 

    handleClick(event) {
        console.log(">> click me my button");
        // console.log("My name is: ", this.state.name);

        this.setState({
            name: 'David',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random() * 100) + 1)
        // })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div> 
                
               My name is {this.state.name} and Im {this.state.age}
               <button onMouseOver={this.handleOnMoverOver} >Hover me</button>
               <button onClick={(event) => {this.handleClick(event)}} >Click me</button>
            </div>
        );
    }
} 

export default MyComponent;