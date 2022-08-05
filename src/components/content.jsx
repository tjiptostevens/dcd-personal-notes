import React, { useMemo, useState } from 'react'
import Notes from './notes'

const Content = (props) => {
  const [state, setState] = useState({})
  const [archived, setArchived] = useState(false)
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const data = useMemo(() => {
    const searchRegex = state.search && new RegExp(`${state.search}`, 'gi')
    return (
      props.data &&
      props.data.filter(
        (d) =>
          (!searchRegex || searchRegex.test(d.title + d.body)) &&
          (archived ? true : d.archived === archived),
      )
    )
  }, [props.data, state.search, archived])
  return (
    <>
      <div className="body-right">
        <div className="body-right-title">
          <div>
            <b>NOTES COLLECTION</b>
          </div>
          <div className="body-right-search">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '0 15px',
                width: '200px',
                textAlign: 'right',
                borderRight: 'solid 1px gray',
              }}
            >
              Show Archived
              <i
                className={archived ? 'bi bi-check-square' : 'bi bi-square'}
                style={{ cursor: 'pointer', padding: '0 15px' }}
                onClick={() => setArchived(!archived)}
              ></i>
            </div>

            <input
              type="search"
              name="search"
              className="form-control rounded"
              placeholder="Search Here"
              onChange={handleChange}
            />
            <span>
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <Notes data={data} />
      </div>
    </>
  )
}

export default Content
