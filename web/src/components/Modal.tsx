import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

interface ModalProps {
  onDismiss(): void;
  content: string;
  title: string;
  actions: React.ReactNode;
}
export const Modal = ({ onDismiss, content, title, actions }: ModalProps) => {
  const modal = document.getElementById('modal') as HTMLElement;
  console.log('here');
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="Modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-body">
        <div onClick={(e) => e.stopPropagation()} className="modal-title">
          {title}
        </div>
        <div className="modal-content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    modal
  );
};
