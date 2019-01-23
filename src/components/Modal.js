import React, { Component, createRef } from "react";

export default class Modal extends Component {
  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  handleWindowClick = e => {
    if (e.target !== this.backdropRef.current) return;
    this.props.onClose();
  };
  render() {
    const { onClose } = this.props;

    return (
      <div className="Backdrop" ref={this.backdropRef}>
        <div className="ModalWindow">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
