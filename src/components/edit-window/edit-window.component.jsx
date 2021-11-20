import React, { useEffect } from 'react';
import "./edit-window.styles.css";
import DeleteLogo from '../../assets/delete.svg';
import { getDateNow } from '../form/form.utils';

const EditWindow = (props) => {
    const {selectedNote, handleCloseModal,
            onSaveEdit, textInputEdit, onTitleEditChange,
            onTextEditChange , titleInputEdit} = props

    useEffect(() => {
        onTitleEditChange(selectedNote.title)
        }
    ,[]);
    useEffect(() => {
        onTextEditChange(selectedNote.noteText)
        }
    ,[]);
    return (
        <form id="editWindow">
            <img 
                onClick={() => handleCloseModal()}
                id="closeButton" src={DeleteLogo} alt="Close"></img>
            <input 
                onChange={
                    (e) =>  onTitleEditChange(e.target.value)
                }
                value={titleInputEdit}
                className="title" placeholder="Title" type="text"></input>
            <textarea 
                placeholder="Your Note"
                required
                className="text-area"
                onChange={(e) => onTextEditChange(e.target.value)}
                value={textInputEdit}
                onKeyDown={(e) => {
                if((e.keyCode === 10 || e.keyCode === 13)) {
                e.preventDefault();
                }
                }}
                >

            </textarea>
            <button
                type="submit"
                onClick={(e) =>{
                    e.preventDefault();
                        if(textInputEdit.length>=1){
                        onSaveEdit(selectedNote, textInputEdit, titleInputEdit,getDateNow())
                        }
                    }
                    }
                >Save</button>
        </form>
    )
}

export default EditWindow;