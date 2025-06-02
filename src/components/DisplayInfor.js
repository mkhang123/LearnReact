import React from "react";

class DisplayInfor extends React.Component {
    render () {
        //destructuring array/object
        const { listUsers } = this.props; //object
        console.log(listUsers)
        // console.log(this.props)
        //props => viet tat properties
        return (
            <div>
                { listUsers.map((user, index) => {
                    return (
                        <div key = {user.id} >
                            <div>My name is {user.name} </div>
                            <div>My age is {user.age} </div>
                            <hr/>
                        </div>
                    )
                })}
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr/>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
                <hr/>
                <div>My name is {name}</div>
                <div>My age is {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor;