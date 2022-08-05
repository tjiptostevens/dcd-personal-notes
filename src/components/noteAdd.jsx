import React, { useState } from 'react'

const NoteAdd = (props) => {
  const [data, setData] = useState({
    id: +new Date(),
    title: '',
    body: '',
    createdAt: new Date(),
    archived: false,
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(data)
    props.handleAdd(data)
    props.handleClose()
  }
  return (
    <>
      <form>
        <label className="form-label">Title</label>
        <input
          className="form-control mb-3"
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          required={true}
        />
        <label className="form-label">Note Detail</label>
        <textarea
          className="form-control mb-3"
          type="text"
          name="body"
          value={data.body}
          onChange={handleChange}
          required={true}
        />
        <button className="btn btn-light" onClick={handleSubmit}>
          ADD NOTES
        </button>
      </form>
    </>
  )
}

export default NoteAdd
