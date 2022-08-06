import React, { useState } from 'react'
import Modal from './modal'
import NoteAdd from './noteAdd'
import useWindow from '../custom/useWindow'

const Header = (props) => {
  const { width } = useWindow()
  const [vis, setVis] = useState({ modal: false })
  return (
    <>
      {console.log(width)}
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
        className={width > 450 ? 'body-left' : 'body-left-m'}
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
          {width > 450 ? 'ADD NOTE' : <i className="bi bi-plus">NOTE</i>}
        </button>
      </div>
    </>
  )
}

export default Header
