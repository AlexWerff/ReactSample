import React from "react";
import { User } from "../../model/User";


interface State {

}

interface Props {
    user: User;
}

export class Details extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const { firstName, lastName, age } = this.props.user;
        return (
            <div>
                <h1>
                    {firstName} {lastName} Age: {age}
                </h1>
            </div>
        )
    }
}