import React from "react";
import Form from "./components/form/form.component.jsx";
import NotesGrid from "./components/notes-grid/notes-grid.component";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputNote: "",
      notes: [],
      textInputTitle: "",
      showModal: false,
      selectedNote: null,
      textInputEdit: "",
      titleInputEdit: "",
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({
      showModal: false,
      textInputEdit: "",
      titleInputEdit: "",
      selectNote: null,
    });
  }

  selectNote = (note) => {
    this.setState({ selectedNote: note });
  };

  onInputChange = (text) => {
    this.setState({
      ...this.state,
      textInputNote: text,
    });
  };

  onTextEditChange = (text) => {
    this.setState({
      textInputEdit: text,
    });
  };

  onTitleEditChange = (title) => {
    this.setState({
      titleInputEdit: title,
    });
  };

  onTitleChange = (title) => {
    this.setState({
      textInputTitle: title,
    });
  };

  addNoteToState = (note) => {
    this.setState({
      ...this.state,
      textInputNote: "",
      textInputTitle: "",
      notes: [...this.state.notes, note],
    });
  };

  onSaveEdit = (note, text, title, editDate) => {
    const newNotes = [];
    this.state.notes.map((element) => {
      if (element.id === note.id) {
        const newElement = element;
        newElement.noteText = text;
        newElement.title = title;
        newElement.editDate = editDate;
        newNotes.push(newElement);
      } else {
        newNotes.push(element);
      }
    });
    this.setState({
      notes: newNotes,
      textInputEdit: "",
      titleInputEdit: "",
      selectNote: null,
      showModal: false,
    });
  };

  onDeleteNote = (index) => {
    const modifiedNotes = this.state.notes;
    modifiedNotes.splice(index, 1);
    this.setState({ notes: modifiedNotes });
  };

  render() {
    return (
      <div className="App">
        <Form
          textInputNote={this.state.textInputNote}
          onInputChange={this.onInputChange}
          addNoteToState={this.addNoteToState}
          textInputTitle={this.state.textInputTitle}
          onTitleChange={this.onTitleChange}
        />
        {this.state.notes.length > 0 && (
          <NotesGrid
            onDeleteNote={this.onDeleteNote}
            notes={this.state.notes}
            handleOpenModal={this.handleOpenModal}
            showModal={this.state.showModal}
            handleCloseModal={this.handleCloseModal}
            handleOpenModal={this.handleOpenModal}
            selectNote={this.selectNote}
            selectedNote={this.state.selectedNote}
            textInputEdit={this.state.textInputEdit}
            onSaveEdit={this.onSaveEdit}
            titleInputEdit={this.state.titleInputEdit}
            onTitleEditChange={this.onTitleEditChange}
            onTextEditChange={this.onTextEditChange}
          />
        )}
      </div>
    );
  }
}

export default App;
