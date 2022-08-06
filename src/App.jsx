import React, { useState } from 'react'
import './App.css'
import './assets/css/mobile.css'
import './assets/css/body.css'
import './assets/css/modal.css'
import Content from './components/content'
import Header from './components/header'
import { getInitialData } from './config/initialData'
import useWindow from './custom/useWindow'
const initialData = getInitialData()

function App() {
  const { width } = useWindow()
  const [data, setData] = useState(initialData)
  const [divId, setDivId] = useState(1)
  const handleAdd = (note) => {
    let x = data
    x.push(note)
    setData(x)
    setDivId(divId + 1)
    console.log('added')
  }

  const handleUpdate = (id, note) => {
    let x = data
    let i = x.findIndex((obj) => obj.id === id)
    let y = { ...x[i], ...note }
    x[i] = y
    setData(x)
    setDivId(divId + 1)
    console.log('updated')
  }
  const handleDelete = (id) => {
    let x = data
    let i = x.findIndex((obj) => obj.id === id)
    x.splice(i, 1)
    setData(x)
    setDivId(divId + 1)
    console.log('deleted')
  }

  return (
    <div
      className={width > 450 ? 'App body-container' : 'App body-container-m'}
    >
      <Header handleAdd={handleAdd} />
      <Content
        key={divId}
        data={data}
        handleUpdate={(id, data) => handleUpdate(id, data)}
        handleDelete={(id) => handleDelete(id)}
      />
    </div>
  )
}

export default App
