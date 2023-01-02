import {FaTrash} from "react-icons/fa";
import {CiEdit} from "react-icons/ci";
import Moment from 'moment';
import "moment/locale/pt-br"

export default function TextComponent({note, deleteNote, select}){
    return (
      <div className="card">
        
        <div>
            <div className="topdiv">
                <h2 className="title">{note.title}</h2> 
                <FaTrash className="closeButtonNote" onClick={deleteNote} color={"red"} size={18}/>
            </div>
            <p className="description">{note.description}</p> 
        </div>
        <div className="topdiv">
          <p className="id">{Moment(note.date).format("ll")}</p>
          <CiEdit className="bottomdiv" size={30} color={"rgba(255,255,255,0.5)"} onClick={select}/>
        </div>
      </div>
    )
  }