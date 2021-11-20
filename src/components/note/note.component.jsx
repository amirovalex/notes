import React from 'react';
import "./note.styles.css";
import DeleteLogo from '../../assets/delete.svg';
import ReactModal from "react-modal";
import Modal from 'react-modal';
import Form from '../form/form.component';

Modal.setAppElement("#root")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width:'80%',
    height:'80%',
    backgroundColor: "#e6927c",
    borderRadius: "10px"
  },
};

const Note = (props) => {
    const {note,notes,onDeleteNote,showModal,handleCloseModal, handleOpenModal, selectNote,
    selectedNote, onSaveEdit, textInputEdit ,titleInputEdit,
    onTextEditChange, onTitleEditChange } = props
    return(
        <div  
            id="note">
            <div 
                onClick={(event) => {
                selectNote(note)
                handleOpenModal()
            }} 
            className="note-container">
            <div> 
                <p className="note-date">{note.date}</p>
                {
                    note.editDate && <p className="note-date-edit">Edited: {note.editDate}</p>
                }
                <p>Title: {note.title ? note.title : null}</p>
                <hr></hr>
            </div>
            <p>{note.noteText}</p>
            </div>
            <div 
                onClick={(event) => {
                    const foundIndex = notes.findIndex(element => element.id === note.id);
                    const confirmed = window.confirm("Are you sure you want to delete this note?");
                    if (confirmed) {
                        onDeleteNote(foundIndex);
                    }
                }}
                className="delete-container">
            <div>
            <img src={DeleteLogo} alt="Delete"/>
            </div>
            </div>
                     <ReactModal
          isOpen={showModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        {selectedNote && 
            <Form
            selectedNote={selectedNote}
            handleCloseModal={handleCloseModal}
            onSaveEdit={onSaveEdit}
            textInputEdit={textInputEdit}
            titleInputEdit={titleInputEdit}
            onTextEditChange={onTextEditChange}
            onTitleEditChange={onTitleEditChange}
            onEditPage={true}
            />
        }
        </ReactModal>
        </div>
    )
}

export default Note;