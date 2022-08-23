import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: any): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            return [...state].sort((userA, userB) => userA.name.localeCompare(userB.name))
        }
        case 'SORT-DOWN': {
            return [...state].sort((userA, userB) => userB.name.localeCompare(userA.name))
        }
        case 'CHECK': {
            return state.filter(user => user.age >= 18)
        }
        default:
            return state
    }
}