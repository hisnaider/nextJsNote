import React, { useState } from 'react';
import TextComponent from "../components/textComponent"
import CreateNoteModal from "../components/createNoteModal"
import NoteModal from '../components/noteModal';
import {FaRegWindowClose} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";



function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [openCreateNoteModal, setOpenCreateNoteModal] = useState(false)
  const [select, setSelect] = useState(null)

  function addNote(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.note.value;
    const description = form.description.value
    setNotes([...notes, {title, description, date:Date.now(), id:(Math.random() + 1).toString(36).substring(7)}]); 
    setOpenCreateNoteModal(false)
  }
  function deleteNote(id) {
    setNotes([...notes.filter(e=>e.id != id)]);
  }

  function editNote(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.note.value;
    const description = form.description.value
    setNotes([...notes.map(e=>e.id == select.id ? {...e, title, description} : e)]);
    setSelect(false)
  }

  return (
    <div>
      <div className="grid">
          {
            notes.length
            ?
            notes.map(note => (
              <TextComponent key={note.id} note={note} deleteNote={()=>deleteNote(note.id)} select={()=>setSelect(note)}/>
            ))
            :<h1>Nenhuma nota</h1>
          }
      </div>

      <CiCirclePlus className="myButton" onClick={()=>setOpenCreateNoteModal(true)} size={75} color="white" type="submit"/>
      
      <CreateNoteModal isOpen={openCreateNoteModal} onClose={()=>setOpenCreateNoteModal(false)}>
        <form className="form" onSubmit={addNote}>
          <label htmlFor="note" className="formTitle">Nova Nota</label>
          <p className="inputTitle">Titulo</p>
          <input className="input"  type="text" id="note" />
          <p className="inputTitle">Descrição</p>
          <input className="bigInput" type="text" id="description" />
          <button className="addButton" type="submit">Adicionar</button>
          <FaRegWindowClose className="closeButton" onClick={()=>setOpenCreateNoteModal(false)} color={"red"} size={25}/>
        </form>
      </CreateNoteModal>

      <NoteModal isOpen={select} onClose={()=>setSelect(null)} note={select} editNote={editNote}>
        <form className="form" onSubmit={editNote}>
          <label htmlFor="note" className="formTitle">Editar nota</label>
          <p className="inputTitle">Titulo</p>
          <input className="input"  type="text" id="note" defaultValue={select?.title}/>
          <p className="inputTitle">Descrição</p>
          <input className="bigInput" type="text" id="description" defaultValue={select?.description}/>

          
          <button className="addButton" type="submit">Adicionar</button>
          <FaRegWindowClose className="closeButton" onClick={()=>setOpenCreateNoteModal(false)} color={"red"} size={25}/>
        </form>
      </NoteModal>

    </div>
  );
}

export default NotesApp;
