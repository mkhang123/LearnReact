
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "Tran Minh Khang", age: "16"},
            {id: 2, name: "Kheng", age: "20"},
            {id: 3, name: "Teo", age: "50"}
        ]
    }

    handleAddNewUser = (userObj) => {
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.unshift(userObj);
        // console.log("check: ", listUsersNew)
        // this.setState ({
        //     listUsers: listUsersNew
        // })
        
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
            // listUsers: [...this.state.listUsers, userObj]
        })
    }
    

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }
    //JSX
    render() {
        //DRY: dont repeat yourself

        // const test = {name: 'khang', age: 21};

        return (
            <>
                {/* {JSON.stringify(test)} */}
                <div className="a"> 
                <AddUserInfor
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor 
                    listUsers = {this.state.listUsers}
                    handleDeleteUser = {this.handleDeleteUser}
                />
                </div>
                    <div className="b">
                </div>
            </>
        );
    }
} 

export default MyComponent;