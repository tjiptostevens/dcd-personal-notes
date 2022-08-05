import React, { useState } from 'react'
import './App.css'
import './assets/css/body.css'
import './assets/css/modal.css'
import Content from './components/content'
import Header from './components/header'
import { getInitialData } from './config/initialData'
const initialData = getInitialData()

function App() {
  const [data, setData] = useState(initialData)
  const [isLoaded, setIsLoaded] = useState(false)
  const handleAdd = (note) => {
    setIsLoaded(true)
    let x = data
    x.push(note)
    setData(x)
    setIsLoaded(false)
    console.log('ok')
    return data
  }
  const handleUpdate = (id, note) => {
    setData({ ...data, note })
  }
  const handleDelete = (id, note) => {
    let lists = data
    console.log(lists)
    if (lists.length === 0) {
      setData({ ...data })
    } else {
      setData({ ...data, lists })
    }
  }

  return (
    <div className="App body-container">
      {console.log(data)}
      <Header handleAdd={handleAdd} />
      {isLoaded ? '' : <Content data={data} />}
    </div>
  )
}

export default App
