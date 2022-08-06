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
  const [id, setId] = useState(1)
  const handleAdd = (note) => {
    let x = data
    x.push(note)
    setData(x)
    setId(id + 1)
    console.log('added')
  }

  const handleUpdate = (id, note) => {
    let x = data
    let i = x.findIndex((obj) => obj.id === id)
    let y = { ...x[i], ...note }
    x[i] = y
    setData(x)
    setId(id + 1)
    console.log('updated')
  }
  const handleDelete = (id) => {
    let x = data
    let i = x.findIndex((obj) => obj.id === id)
    x.splice(i, 1)
    setData(x)
    setId()
    console.log('deleted')
  }

  return (
    <div className="App body-container">
      <Header handleAdd={handleAdd} />
      <Content
        key={id}
        data={data}
        handleUpdate={(id, data) => handleUpdate(id, data)}
        handleDelete={(id) => handleDelete(id)}
      />
    </div>
  )
}

export default App
