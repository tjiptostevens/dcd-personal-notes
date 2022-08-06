import React, { useEffect, useMemo, useState } from 'react'
import useWindow from '../custom/useWindow'
import Notes from './notes'

const Content = (props) => {
  const { width } = useWindow()
  const [state, setState] = useState({})
  const [archived, setArchived] = useState(true)

  useEffect(() => {
    console.log('changed')
  }, [props.data])
  useEffect(() => {
    let x = JSON.parse(localStorage.getItem('archived', true))
    console.log(x)
    if (x === null) {
      localStorage.setItem('archived', true)
      setArchived(true)
    } else {
      setArchived(x)
    }
  }, [])
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const data = useMemo(() => {
    const searchRegex = state.search && new RegExp(`${state.search}`, 'gi')
    return props.data && props.data !== []
      ? props.data
          .sort((a, b) => (a.archived === b.archived ? 0 : a.archived ? 1 : -1))
          .filter(
            (d) =>
              (!searchRegex || searchRegex.test(d.title + d.body)) &&
              (archived ? true : d.archived === archived),
          )
      : props.data
  }, [props.data, state.search, archived])
  return (
    <>
      <div className="body-right">
        <div className="body-right-title">
          {width > 450 ? (
            <div className="col-md-3" style={{ textAlign: 'left' }}>
              <b>NOTES COLLECTION</b>
            </div>
          ) : (
            ''
          )}
          <div
            className={
              width > 450
                ? 'col-12 col-md-9 body-right-search'
                : 'col-12 col-md-9 body-right-search-m'
            }
          >
            {/* {width > 450 ? ( */}
            <div className="col-4 col-md-3">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  margin: '0 15px',
                  textAlign: 'right',
                  borderRight: 'solid 1px gray',
                }}
              >
                Show Archived
                <i
                  className={archived ? 'bi bi-check-square' : 'bi bi-square'}
                  style={{ cursor: 'pointer', padding: '0 15px' }}
                  onClick={() => {
                    setArchived(!archived)
                    localStorage.setItem('archived', !archived)
                  }}
                ></i>
              </div>
            </div>
            {/* ) : (
               ''
             )}*/}
            <div className="col-8 col-md-9">
              <div style={{ position: 'relative' }}>
                <input
                  type="search"
                  name="search"
                  className="form-control rounded"
                  style={{ width: '100%' }}
                  placeholder="Search Here"
                  onChange={handleChange}
                />
                <span
                  style={{ position: 'absolute', top: '7px', right: '15px' }}
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        {data.length === 0 ? (
          <div>
            <h3>"It's deserted in here."</h3>
          </div>
        ) : (
          <Notes
            data={data}
            handleUpdate={(id, data) => props.handleUpdate(id, data)}
            handleDelete={(id) => props.handleDelete(id)}
          />
        )}
      </div>
    </>
  )
}

export default Content
