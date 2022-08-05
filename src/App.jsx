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
  const handleAdd = (note) => {
    setData({ ...data, note })
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
    // setData({ ...data, archived: true })
  }
  return (
    <div className="App body-container">
      {/* {console.log(data)} */}
      <Header handleAdd={handleAdd} />
      <Content data={data} />
    </div>
  )
}

export default App
