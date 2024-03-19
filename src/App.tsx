import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const[list, setList] = useState<Item[]>([
    {id: 1, name: 'Acordar as 06:00h', done: true},
    {id: 2, name: 'Tomar café da manhã até as 06:30h', done: false},
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          To Do List Typescrit with ReactJS
        </C.Header>

        <AddArea onEnter={handleAddTask} />
        
        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App