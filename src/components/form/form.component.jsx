import "./form.styles.css"
import { getDateNow, getCloseButton } from './form.utils'

import React, { useEffect } from 'react';
// import "./edit-window.styles.css";

const Form = (props) => {
    const {onEditPage} = props
    const {addNoteToState,onInputChange,textInputNote,textInputTitle,onTitleChange} = props

        const {selectedNote, handleCloseModal,
            onSaveEdit, textInputEdit, onTitleEditChange,
            onTextEditChange , titleInputEdit} = props

    useEffect(() => {
        if(onEditPage){
        onTitleEditChange(selectedNote.title)
        }
        }
    ,[]);
    useEffect(() => {
        if(onEditPage){
        onTextEditChange(selectedNote.noteText)
        }
        }
    ,[]);

    return(
        <div 
            id={onEditPage ? null : "formContainer"}
            className={onEditPage ? 'form-container-on-edit' : null}
        >
            {
                onEditPage &&  getCloseButton('white',"closeButton",handleCloseModal)
            }
        <form 
            id="form"
            className={onEditPage ? "form-edit" : null}>
        <input 
        onChange={(e) =>
            onEditPage ? onTitleEditChange(e.target.value) : onTitleChange(e.target.value)
        }
        value={onEditPage ? titleInputEdit : textInputTitle} placeholder="Title" id="title" type="text"/>
        <textarea 
            required 
            value={onEditPage ? textInputEdit :textInputNote} 
            id={"textArea"} 
            onKeyDown={(e) => {
                if((e.keyCode === 10 || e.keyCode === 13)) {
                e.preventDefault();
                }
                if(!onEditPage) {
                    if(textInputNote.length > 0 && e.keyCode === 13) {
                    addNoteToState({noteText:textInputNote,date:getDateNow(),id:Date.now(),
                    title:textInputTitle})
                    }
                }
            }}
            onChange={(e) => onEditPage ?  onTextEditChange(e.target.value) : onInputChange(e.target.value)} 
            name="noteInput" 
            cols={onEditPage ? null : "40"} 
            rows={onEditPage ? null : "10"}
            ></textarea>
        <button onClick={(e) => {
            e.preventDefault();

            if(onEditPage) {
                if(textInputEdit.length>=1){
                    onSaveEdit(selectedNote, textInputEdit, titleInputEdit,getDateNow())
                }
            } else {
            if(textInputNote.length > 0) { 
            addNoteToState({noteText:textInputNote,date:getDateNow(),id:Date.now(),title:textInputTitle})
            }
            }
            }} 
            type="submit" 
            id="addButton">{onEditPage ? "Save" : "Add"}</button>
        </form>
        </div>
    )
}

export default Form;