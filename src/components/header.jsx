import React, { useState } from 'react'
import Modal from './modal'
import NoteAdd from './noteAdd'

const Header = (props) => {
  const [vis, setVis] = useState({ modal: false })
  return (
    <>
      <Modal
        modal={vis.modal}
        title={'ADD NEW NOTES'}
        element={
          <NoteAdd
            handleAdd={(e) => props.handleAdd(e)}
            handleClose={(e) => setVis({ modal: false })}
          />
        }
        handleClose={(e) => setVis({ modal: false })}
      />
      <div
        className="body-left"
        style={{ padding: '15px', background: '#1a1a1a' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',

            color: 'white',
            position: 'sticky',
          }}
        >
          <img src="./logoh.png" alt="logo" style={{ height: '60px' }} />
          <small>.APP</small>
        </div>
        <hr />
        <div className="w-100" style={{ height: '25px' }}></div>
        <button
          className="form-control"
          onClick={() => setVis({ ...vis, modal: true })}
        >
          ADD NOTES
        </button>
      </div>
    </>
  )
}

export default Header
