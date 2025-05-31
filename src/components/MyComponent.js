
import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Khang',
        address: 'Can Tho',
        age: 21
    }; 


    //JSX
    render() {
        return (
            <div> 
                
               My name is {this.state.name} and Im from {this.state.address}
            </div>
        );
    }
} 

export default MyComponent;