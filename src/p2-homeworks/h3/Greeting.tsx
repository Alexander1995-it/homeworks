import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    setError: (error: string) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''

    const onBlurErrorHandler = () => {
        name || setError('Required field')
}

return (
    <div>
        <input onBlur={onBlurErrorHandler}
               value={name}
               onChange={setNameCallback}
               className={inputClass}
        />
        <button onClick={addUser}>add</button>
        <span>{totalUsers}</span>
        <div>
            <div style={{height: '21px', color: 'red'}}>
                {error}
            </div>
        </div>
    </div>
)
}

export default Greeting
