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
              <small>{showFormattedDate(vis.data.createdAt)}</small>
            </>
          }
          handleClose={() => setVis({ modal: false })}
        />
      )}

      <div className="row col-md-12" style={{ margin: 0, padding: 0 }}>
        {/* {console.log(vis)} */}
        {data.map((d) => (
          <div
            key={d.id}
            className="col-md-3 note-card"
            style={{ margin: 0, padding: '5px' }}
          >
            <div className={`note-container ${d.archived ? 'archived' : ''}`}>
              <div className="note-title">
                {d.title}{' '}
                <i
                  className="bi bi-x-square"
                  onMouseEnter={(e) =>
                    (e.target.className = 'bi bi-x-square-fill')
                  }
                  onMouseLeave={(e) => (e.target.className = 'bi bi-x-square')}
                  style={{ cursor: 'pointer' }}
                ></i>
              </div>
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
                onClick={(e) => console.log(e)}
                onMouseEnter={(e) =>
                  (e.target.firstChild.textContent = 'UNARCHIVED')
                }
                onMouseLeave={(e) =>
                  (e.target.firstChild.textContent = 'ARCHIVED')
                }
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
