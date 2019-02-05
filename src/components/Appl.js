import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import v4 from "uuid/v4";
import AppHeader from "./AppHeader/AppHeader";
import Modal from "./Author/Modal";
import OrderPage from "./Order/OrderPage";
import SignupForm from "./SignupForm/SignupForm";
import NoteFilter from "./Note/NoteFilter";
import NoteList from "./Note/NoteList";
import NoteEditor from "./Note/NoteEditor";
import menu from "./menu.json";
import MenuPage from '../pages/Menu';
import MenuItemPage from '../pages/MenuItem';
import routes from '../configs/routes';

export default class Appl extends Component {
  state = {
    menu: menu,
    filter: "",
    notes: [],
    isModalOpen: false
  };

  componentDidMount() {
    window.addEventListener("keyup", this.handleEscapeModal);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.state;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleEscapeModal);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleEscapeModal = e => {
    if (e.keyCode === 27) this.closeModal();
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  handleAddNote = (text, age) => {
    this.setState(prevState => ({
      notes: [{ id: v4(), text: text, age: age }, ...prevState.notes]
    }));
  };

  handleDeleteNote = id => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  render() {
    const {filter, notes, isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>

        {isModalOpen && (
          <Modal onClose={this.closeModal} onOpen={this.openModal} />
        )}
        <OrderPage />
        <SignupForm />
        <NoteFilter
          filter={filter}
          onFilterChange={this.handleFilterChange}
          placeholder={"Find menu"}
        />
     <Switch>
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
     </Switch>
        <NoteEditor onSubmit1={this.handleAddNote} />
        <NoteList notes={notes} onDeleteNote={this.handleDeleteNote} />
      </div>
    );
  }
}
