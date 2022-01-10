import React from "react";
import { getUsers } from "../../api/UserApi";
import { User } from "../../model/User";
import { Details } from "../details/Details";


interface State {
    users: User[];
}

interface Props {

}

export class Welcome extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        getUsers().then((users) => {
            this.setState({
                users: users
            })
        })
    }

    async addUser(firstName: string, lastName: string, age: number) {
        // Do backend api call
        this.setState({
            users: [...this.state.users, { firstName: firstName, lastName: lastName, age: age }]
        });
    }

    renderUser(user: User) {
        return (
            <Details user={user}></Details>
        )
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <button onClick={() => this.addUser('FirstName', 'lastName', 30) } style={{marginTop: 50}}> Add New User</button>
                <h1> User List </h1>
                {
                    users.map(this.renderUser)
                }
            </div>
        )
    }
}