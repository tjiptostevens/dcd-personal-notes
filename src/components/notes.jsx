import React, { useState } from 'react'
import '../assets/css/notes.css'
import { showFormattedDate } from '../config/initialData'
import Modal from './modal'

const Notes = (props) => {
  const data = props.data
  const [vis, setVis] = useState({ modal: false })
  return (
    <>
      {vis.data && (
        <Modal
          modal={vis.modal}
          title={vis.title}
          element={
            <>
              <p>{vis.data.body}</p> <hr />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <small>{showFormattedDate(vis.data.createdAt)}</small>{' '}
                <div>
                  <i
                    className="btn bi bi-archive"
                    onMouseEnter={(e) => {
                      e.target.className = 'btn bi bi-archive-fill'
                      //   e.target.innerText = ' Archived'
                    }}
                    onMouseLeave={(e) => {
                      e.target.className = 'btn bi bi-archive'
                      //   e.target.innerText = ''
                    }}
                    onClick={() => {
                      props.handleUpdate(vis.data.id, { archived: true })
                      setVis({ modal: false })
                    }}
                    style={{
                      cursor: 'pointer',
                      fontWeight: '100',
                      position: 'relative',
                      color: 'white',
                    }}
                  >
                    Archived
                  </i>
                  <i
                    className="btn bi bi-trash"
                    onMouseEnter={(e) => {
                      e.target.className = 'btn bi bi-trash-fill'
                      //   e.target.innerText = ' Remove'
                    }}
                    onMouseLeave={(e) => {
                      e.target.className = 'btn bi bi-trash'
                      //   e.target.innerText = ''
                    }}
                    onClick={() => {
                      props.handleDelete(vis.data.id)
                      setVis({ modal: false })
                    }}
                    style={{
                      cursor: 'pointer',
                      fontWeight: '100',
                      position: 'relative',
                      color: 'white',
                    }}
                  >
                    Remove
                  </i>
                </div>
              </div>
            </>
          }
          handleClose={() => setVis({ modal: false })}
        />
      )}

      <div
        className="col-12 col-md-12"
        style={{
          margin: 0,
          padding: '20px',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {data.map((d) => (
          <div
            key={d.id}
            className="col-6 col-md-3 note-card"
            style={{ margin: 0, padding: '5px' }}
          >
            <div className={`note-container ${d.archived ? 'archived' : ''}`}>
              <div className="note-title">{d.title}</div>
              <div
                className="note-content"
                onClick={() =>
                  setVis({ ...vis, modal: true, title: d.title, data: d })
                }
              >
                {d.body.split(' ').slice(0, 10).join(' ')}
                <div className="note-read-more">
                  <small>
                    Read more
                    <i className="bi bi-chevron-right"></i>
                  </small>
                </div>
              </div>
              <hr
                style={{
                  color: 'rgb(255, 123, 0)',
                  marginBottom: '0',
                  marginTop: '5px',
                }}
              />
              <small style={{ padding: '5px', color: 'rgba(255, 123, 0,0.7)' }}>
                {showFormattedDate(d.createdAt)}
              </small>
            </div>
            {d.archived ? (
              <div
                className="archived-stamp-container"
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) =>
                  (e.target.firstChild.textContent = 'UNARCHIVED')
                }
                onMouseLeave={(e) =>
                  (e.target.firstChild.textContent = 'ARCHIVED')
                }
                onClick={() => props.handleUpdate(d.id, { archived: false })}
              >
                <div className="archived-stamp">ARCHIVED</div>
              </div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Notes
