import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onDismiss(): void;
  content: JSX.Element;
  title: string;
}

export const Modal = ({ onDismiss, content, title }: ModalProps) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }

  }, [])
  
  const modal = document.getElementById('modal') as HTMLElement;

  
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="modal-container noselect">
      <div className="modal-body">
        <div className="modal-title">
          <h4>{title}</h4>
        </div>
        <div className="modal-text">
          <span className="sub-bold">{content}</span>
        </div>
        <div className="modal-actions">
          <button onClick={onDismiss}>OK</button>
        </div>
      </div>
    </div>,
    modal
  );
};
