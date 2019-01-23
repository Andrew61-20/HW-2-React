import React, { Component } from "react";

export default class NoteEditor extends Component {
  state = {
    text: "",
    age: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
    // e.target.name: e.target.value была бы такая запись,
    // если не деструктуризировать e, то есть handleChange = е => {
  };

  handleSubmit = e => {
    e.preventDefault();
    // Передает в проп onSubmit - это метод из АПП аргумент - значение text this.state.text
    // И при сабмите формы вызывается функция handleAddNote из АПП с этим аргументом - this.state.text
    this.props.onSubmit1(this.state.text, this.state.age);

    this.setState({ text: "", age: "" });
  };

  render() {
    const { text, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Поставьте оценку блюда
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <textarea
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          autoComplete="off"
        />
        <button>Добавить отзыв</button>
      </form>
    );
  }
}
