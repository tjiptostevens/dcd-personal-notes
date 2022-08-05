import React, { useState } from 'react'

const NoteAdd = (props) => {
  const [error, setError] = useState('')
  const [data, setData] = useState({
    id: +new Date(),
    title: '',
    body: '',
    createdAt: new Date(),
    archived: false,
  })
  const handleChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    let x
    if (nam === 'title') {
      setData({ ...data, [e.target.name]: e.target.value })
      console.log(val.length)
      if (val.length === 50) {
        setError({ ...error, title: 'Max Character Reached' })
      } else if (val.length > 30 && val.length < 50) {
        x = 50 - val.length
        setError({ ...error, title: x + ' Character left.' })
      } else {
        setError({ ...error, title: false })
      }
    } else {
      setData({ ...data, [e.target.name]: e.target.value })
    }
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
        <label className="form-label">
          Title{' '}
          <small style={{ color: 'yellow' }}>
            <i> {error.title ? ` | ${error.title}` : ''}</i>
          </small>
        </label>
        <input
          className="form-control mb-3"
          type="text"
          name="title"
          value={data.title}
          maxLength="50"
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
        <button className="btn btn-light" type="submit" onClick={handleSubmit}>
          ADD NOTES
        </button>
      </form>
    </>
  )
}

export default NoteAdd
