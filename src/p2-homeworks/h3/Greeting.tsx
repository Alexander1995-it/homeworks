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
        if (!name) {
            setError('Required field')
        }
    }
    const onFocusHandler = () => {
        setError('')
    }
    return (
        <div>
            <input onFocus={onFocusHandler} onBlur={onBlurErrorHandler} value={name} onChange={setNameCallback}
                   className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span style={{color: 'red'}}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
