import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span>{p.name}</span>
            <span style={{marginLeft: '10px'}}>{p.age}</span>
        </div>
    ))

    const sortUp = (): Array<UserType> =>  (homeWorkReducer(initialPeople, {type: 'SORT-UP', payload: 'up'}))
    const sortDown = () =>  (homeWorkReducer(initialPeople, {type: 'SORT-DOWN', payload: 'down'}))
    const check18 = () =>  (homeWorkReducer(initialPeople, {type: 'CHECK', payload: 'check'}))

    return (
        <div>
            <hr/>
            homeworks 8
            {/*should work (должно работать)*/}
            {finalPeople}
            <div>
                <SuperButton onClick={() => setPeople(sortUp)}>sort up</SuperButton>
                <SuperButton onClick={() => setPeople(sortDown)}>sort down</SuperButton>
                <SuperButton onClick={() => setPeople(check18)}>check 18</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
