import {FaRegWindowClose} from "react-icons/fa";
import React, { useState } from 'react';


export default function NoteModal({ isOpen, onClose, note, children}) {
  const [edit, setEdit] = useState(false)
  if (!isOpen) {
    return null;
  }

  return (
    <div className="ModalOverlay">
      <div className="ModalContent">
      {
        edit
        ?children
        :
          <>
            <div>
              <div>
                <h1>{note.title}</h1>
                <p className="testee">{note.description}</p>
              </div>
              <button className="addButton" type="submit" onClick={()=>setEdit(true)}>Editar</button>
            </div>
            <FaRegWindowClose className="closeButton" onClick={onClose} color={"red"} size={25}/>
          </>
      }
      </div>
    </div>
  );
}