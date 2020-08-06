import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

class Modal extends Component {
  modalRootRef = document.querySelector('#modal-root');

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
    this.props.clearUrl();
  }

  keyDownHandler = ({ code }) => {
    if (code === 'Escape') {
      this.props.toggleModal();
    }
  };

  clickHandler = ({ target }) => {
    if (target.nodeName !== 'DIV') return;
    this.props.toggleModal();
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.clickHandler}>
        <img className="Modal" src={this.props.url} alt="" />
      </div>,
      this.modalRootRef,
    );
  }
}

export default Modal;
