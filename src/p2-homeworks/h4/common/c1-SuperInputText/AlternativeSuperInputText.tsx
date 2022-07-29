import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './AlternativeSuperInputText.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type AlternativeSuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText: (text: string) => void
    error: string

}

function AlternativeSuperInputText({error, onChangeText, ...props}: AlternativeSuperInputTextPropsType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText (e.currentTarget.value)
    }

    const styleError = `${s.error} ${error ? s.error2 : ''}`

    return (
        <div>
            <input onChange={onChangeHandler} {...props}/>
            <span className={styleError}>эээ</span>
        </div>

    )
}

export default AlternativeSuperInputText
