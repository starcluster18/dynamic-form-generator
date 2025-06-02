import React from 'react';

interface Props {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h3>❌ Error</h3>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorModal;
