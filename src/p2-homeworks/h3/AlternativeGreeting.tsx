import React from "react";
import {UserType} from "./HW3";

type AlternativeGreetingPropsType = {
    users: UserType[]
}

function AlternativeGreeting(props: AlternativeGreetingPropsType) {
    return (
        <div>
            {props.users.map(item => <div key={item._id}>
                <div>{item.name}</div>
            </div>)}
        </div>
    );
}

export default AlternativeGreeting;
