import React from 'react';
import Note from '../note/note.component.jsx';
import "./notes-grid.styles.css"
const NotesGrid = (props) => {
    const { notes, onDeleteNote,showModal, handleCloseModal, handleOpenModal,
    selectNote, selectedNote,textInputEdit,
    onSaveEdit, titleInputEdit, onTitleEditChange, onTextEditChange } = props
    return(
        <div id="notesGrid">
            {
                notes.map((note,i) => <Note 
                                        notes={notes} 
                                        onDeleteNote={onDeleteNote} 
                                        key={note.id} 
                                        note={note}
                                        handleCloseModal={handleCloseModal}
                                        handleOpenModal={handleOpenModal}
                                        showModal={showModal}
                                        selectNote={selectNote}
                                        selectedNote={selectedNote}
                                        textInputEdit={textInputEdit}
                                        onSaveEdit={onSaveEdit}
                                        titleInputEdit={titleInputEdit}
                                        onTitleEditChange={onTitleEditChange}
                                        onTextEditChange={onTextEditChange}
                                        />)
            }
        </div>
    )
}

export default NotesGrid;