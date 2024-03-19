import * as C from './styles'
import { FaPlus } from 'react-icons/fa'
import { useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('')

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }

    const handleAddTask = () => {
        if (inputText.trim() !== '') {
            onEnter(inputText)
            setInputText('')
        }
    }


    return (
        <C.Container>
            <div className='image' onClick={handleAddTask}> <FaPlus /></div>
            <input 
                type="text"
                placeholder='Adicione uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={e => handleKeyUp(e)}
             />
        </C.Container>
    )
}